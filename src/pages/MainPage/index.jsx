import { Link } from 'react-router-dom';
import style from './style.module.scss';
import OneCard from './components/OneCard';

const reports = [
  { id: 1, title: 'Отчет о надлежащем исполнении предписаний' },
  { id: 2, title: 'Отчет о надлежащем исполнении предписаний' },
  { id: 3, title: 'Отчет о надлежащем исполнении предписаний' },
  { id: 4, title: 'Отчет о надлежащем исполнении предписаний' },
  { id: 5, title: 'Отчет о надлежащем исполнении предписаний' },
];
export default function MainPage() {
  return (
    <div className={style.main}>
      <h1>Отчеты</h1>
      <div className={style.container}>
        {reports?.map((el) => (
          <Link key={el.id} to={`/${el.id}`} className={style.card}>
            <OneCard key={el.id} report={el} />
          </Link>
        ))}
      </div>
    </div>
  );
}
