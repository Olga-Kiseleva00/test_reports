import React from 'react';
import style from './style.module.scss';

export default function ReportTable({ data }) {
  if (!Array.isArray(data) || data.length === 0) {
    return null;
  }
  return (
    <table>
      <thead>
        <tr>
          <th className={style.columnTitle}>Ответственный</th>
          <th className={style.columnTitle}>Проект</th>
          <th className={style.columnTitle}>Фаза</th>
          <th className={style.columnTitle}>Корпус</th>
          <th className={style.columnTitle}>Количество предписаний</th>
          <th className={style.columnTitle}>В работе</th>
          <th className={style.columnTitle}>Устранено</th>
          <th className={style.columnTitle}>Устранено не в срок</th>
          <th className={style.columnTitle}>Просрочено и не устранено</th>
          <th className={style.columnTitle}>% выполнения</th>
          <th className={style.columnTitle}>% выполнения в срок и ранее</th>
        </tr>
      </thead>
      <tbody>
        {data.map((responsibleData) => (
          <React.Fragment key={responsibleData.responsible}>
            <tr>
              <td>{responsibleData.responsible}</td>
              <td />
              <td />
              <td />
              <td className={style.total}>{responsibleData.total_ordinances_count}</td>
              <td className={style.total}>{responsibleData.total_ordinances_in_progress}</td>
              <td className={style.total}>{responsibleData.total_ordinances_closed}</td>
              <td className={style.total}>{responsibleData.total_closed_not_on_time}</td>
              <td />
              <td />
              <td />
            </tr>
            {responsibleData.projects.map((project) => (
              <tr key={project.name}>
                <td />
                <td>{project.name}</td>
                <td>{project.phase}</td>
                <td>{project.building}</td>
                <td>{project.ordinances_count}</td>
                <td>{project.ordinances_in_progress}</td>
                <td>{project.ordinances_closed}</td>
                <td>{project.closed_not_on_time}</td>
                <td>{project.expired_not_closed}</td>
                <td>{project.completion_percentage}</td>
                <td>{project.completion_on_time_percentage}</td>
              </tr>
            ))}
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
}
