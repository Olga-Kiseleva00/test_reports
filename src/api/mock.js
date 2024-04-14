export const counterpartiesData = [
  { id: 'id_контрагента_1', name: 'название_контрагента_1' },
  { id: 'id_контрагента_2', name: 'название_контрагента_2' },
];

export const projectsData = [
  { id: 'id_проекта_1', name: 'название_проекта_1' },
  { id: 'id_проекта_2', name: 'название_проекта_2' },
  { id: 'id_проекта_3', name: 'название_проекта_3' },
];

export const mockData = [
  {
    responsible: 'Ответственный_1',
    projects: [
      {
        name: 'Проект_1', // проект
        phase: 1, // фаза
        building: 1, // корпус
        ordinances_count: 1, // колво предписаний
        ordinances_in_progress: 1, // в работе
        ordinances_closed: 0, // устранено
        closed_not_on_time: 0, // устранено не в срок
        expired_not_closed: 0, // просрочено и не устранено
        completion_percentage: 0, // % выполнения
        completion_on_time_percentage: 0, // % выполнения в срок и ранее
      },
      {
        name: 'Проект_2', // проект
        phase: 2, // фаза
        building: 2, // корпус
        ordinances_count: 10, // колво предписаний
        ordinances_in_progress: 5, // в работе
        ordinances_closed: 5, // устранено
        closed_not_on_time: 0, // устранено не в срок
        expired_not_closed: 0, // просрочено и не устранено
        completion_percentage: 50, // % выполнения
        completion_on_time_percentage: 50, // % выполнения в срок и ранее
      },
      {
        name: 'Проект_3', // проект
        phase: 3, // фаза
        building: 3, // корпус
        ordinances_count: 20, // колво предписаний
        ordinances_in_progress: 8, // в работе
        ordinances_closed: 12, // устранено
        closed_not_on_time: 2, // устранено не в срок
        expired_not_closed: 4, // просрочено и не устранено
        completion_percentage: 60, // % выполнения
        completion_on_time_percentage: 50, // % выполнения в срок и ранее
      },
    ],
    // итоги по соответствующим полям
    total_ordinances_count: 31,
    total_ordinances_in_progress: 14,
    total_ordinances_closed: 17,
    total_closed_not_on_time: 2,
  },
  {
    responsible: 'Ответственный_2',
    projects: [
      {
        name: 'Проект_4',
        phase: 1,
        building: 4,
        ordinances_count: 5,
        ordinances_in_progress: 3,
        ordinances_closed: 2,
        closed_not_on_time: 1,
        expired_not_closed: 0,
        completion_percentage: 40,
        completion_on_time_percentage: 20,
      },
      {
        name: 'Проект_5',
        phase: 2,
        building: 5,
        ordinances_count: 15,
        ordinances_in_progress: 7,
        ordinances_closed: 8,
        closed_not_on_time: 2,
        expired_not_closed: 1,
        completion_percentage: 53,
        completion_on_time_percentage: 40,
      },
      {
        name: 'Проект_6',
        phase: 3,
        building: 6,
        ordinances_count: 10,
        ordinances_in_progress: 4,
        ordinances_closed: 6,
        closed_not_on_time: 1,
        expired_not_closed: 1,
        completion_percentage: 60,
        completion_on_time_percentage: 50,
      },
    ],
    total_ordinances_count: 30,
    total_ordinances_in_progress: 14,
    total_ordinances_closed: 16,
    total_closed_not_on_time: 4,
  },
];
