import React from 'react';
import style from './style.module.scss';
import selectIcon from '../../../../../public/selectIcon.svg';

function Select({ name, options, onChange }) {
  return (
    <div className={style.selectContainer}>
      <select name={name} id={name} className={style.selectBox} onChange={onChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div className={style.iconContainer}>
        <img src={selectIcon} alt="" />
      </div>
    </div>
  );
}

export default Select;
