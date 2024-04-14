import React from 'react';
import style from './style.module.scss';
import reportIcon from '../../../../../public/reportIcon.svg';

export default function OneCard({ report }) {
  return (
    <div className={style.card}>
      <img src={reportIcon} alt="Report Icon" className={style.img} />
      <p className={style.title}>{report.title}</p>
    </div>
  );
}
