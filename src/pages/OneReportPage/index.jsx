import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import style from './style.module.scss';
import arrowIcon from '../../../public/arrowIcon.svg';
import Select from './components/Select/Select';
import { counterpartiesData, projectsData, mockData } from '../../api/mock';
import ReportTable from './components/ReportTable/ReportTable';
import Modal from './components/Modal/Modal';

const mock = new MockAdapter(axios);

export default function OneReportPage() {
  const { id } = useParams();
  const [isFocused, setIsFocused] = useState(false);
  const [counterparties, setCounterparties] = useState([]);
  const [projects, setProjects] = useState([]);

  const [formData, setFormData] = useState({
    counterparty: '',
    date_from: '',
    date_to: '',
    all_time: true,
    projects: [],
  });

  const [resData, setResData] = useState(null);
  const [modalActive, setModalActive] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleDateInputChange = (e) => {
    const { name, value } = e.target;

    if ((name === 'date_from' || name === 'date_to') && value !== '') {
      setFormData({
        ...formData,
        [name]: value,
        all_time: false,
      });
    } else if (name === 'date_from' && value === '' && formData.date_to === '') {
      setFormData({
        ...formData,
        [name]: value,
        all_time: true,
      });
    } else if (name === 'date_to' && value === '' && formData.date_from === '') {
      setFormData({
        ...formData,
        [name]: value,
        all_time: true,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleCheckboxChange = (e) => {
    const isChecked = e.target.checked;
    if (isChecked) {
      setFormData({
        ...formData,
        date_from: '',
        date_to: '',
        all_time: isChecked,
      });
    } else {
      const isEitherDateFilled = formData.date_from !== '' || formData.date_to !== '';
      setFormData({
        ...formData,
        all_time: isEitherDateFilled ? false : isChecked,
      });
    }
  };

  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    if (value === 'all') {
      const allProjectIds = projects.map((project) => project.id);
      setFormData({
        ...formData,
        [name]: allProjectIds,
      });
    } else {
      if (formData.projects.includes(value)) {
        setFormData({
          ...formData,
          [name]: formData.projects.filter((projectId) => projectId !== value),
        });
      } else {
        setFormData({
          ...formData,
          [name]: [...formData.projects, value],
        });
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    mock.onPost('/submitForm').reply(200, mockData);

    axios
      .post('/submitForm', formData)
      .then((res) => {
        setResData(res.data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  useEffect(() => {
    mock.onGet('/counterparties').reply(200, counterpartiesData);
    axios
      .get('/counterparties')
      .then((res) => {
        setCounterparties(res.data);
      })
      .catch((error) => {
        console.log('Ошибка получения данных', error);
      });

    mock.onGet('/projects').reply(200, projectsData);
    axios
      .get('/projects')
      .then((res) => {
        setProjects(res.data);
      })
      .catch((error) => {
        console.log('Ошибка загрузки данных проектов:', error);
      });
  }, []);

  return (
    <div className={style.container}>
      <div className={style.firstSection}>
        <Link to="/" className={style.link}>
          <img src={arrowIcon} alt="Report Icon" />
          <span className={style.linkText}>К списку отчетов</span>
        </Link>
      </div>
      <div className={style.secondSection}>
        <h1>Отчет {id}</h1>
        <button type="button" className={style.legendBtn} onClick={() => setModalActive(true)}>
          Легенда
        </button>
      </div>
      <form className={style.thirdSection}>
        <div className={style.counterpartyContainer}>
          <p className={style.title}>Контрагент</p>

          <Select
            name="counterparty"
            options={[
              { value: '', label: 'Выберите' },
              ...counterparties.map((el) => ({ value: el.id, label: el.name })),
            ]}
            onChange={handleInputChange}
          />
        </div>
        <div className={style.periodContainer}>
          <p className={style.title}>Период</p>
          <div className={style.datesWrapper}>
            <div className={style.datesContainer}>
              <input
                name="date_from"
                className={style.dateInput}
                placeholder="Начало"
                type={isFocused ? 'date' : 'text'}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                onChange={handleDateInputChange}
              />
              <span>-</span>
              <input
                name="date_to"
                className={style.dateInput}
                placeholder="Конец"
                type={isFocused ? 'date' : 'text'}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                onChange={handleDateInputChange}
              />
            </div>
            <div className={style.checkboxContainer}>
              <input
                name="all_time"
                type="checkbox"
                className={style.checkbox}
                checked={formData.all_time}
                onChange={handleCheckboxChange}
              />
              <span className={style.checkboxTitle}>За все время</span>
            </div>
          </div>
        </div>
        <div className={style.counterpartyContainer}>
          <p className={style.title}>Проект</p>

          <Select
            name="projects"
            options={[
              { value: '', label: 'Выберите' },
              { value: 'all', label: 'Выберать все' },
              ...projects.map((el) => ({ value: el.id, label: el.name })),
            ]}
            onChange={handleSelectChange}
            multiple
          />
        </div>
        <button type="submit" className={style.runBtn} onClick={handleSubmit}>
          Сформировать
        </button>
      </form>
      <ReportTable data={resData} />
      <Modal active={modalActive} setActive={setModalActive} />
    </div>
  );
}
