# test_reports

## Описание задачи

1. ### Необходимо добавить раздел Отчеты и новую страницу, на которой будут расположены отчеты для руководителей.

[Figma](https://www.figma.com/file/NVcXxJRLGnGWz5K33oTbmN/%D0%A2%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%B5-%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5-%D0%90%D0%B1%D1%81%D0%BE%D0%BB%D1%8E%D1%82?type=design&amp;node-id=0%3A1&amp;mode=design&amp;t=w6R3fXFfhyQYbzXo-1)

2. ### Необходимо разработать отчет: О надлежащем исполнении предписаний

Отчет формируется по данным предписаниям (документ) по проектам и руководителям
проектов за указанный период времени по определенным показателям.

Пользователь выбирает:
- контрагент (выбор одного контрагента, поле не обязательное для заполнения)
- период (указывать обязательно), опция 'за все время' также доступна
- проект (выбор одного и несколько проектов, поле необязательное для заполнения, реализовать возможность выбора всех проектов сразу)
По кнопке **Сформировать** формируется отчет на фронте.
По копке **Легенда** открывается описание отчета.

## Решение

1. Для отображения страницы со списком отчетов использовались статичные данные. При клике на один из них происходит переход на страницу отчета.
2. Для имитации бэкенда использовался axios-mock-adapter.
3. На странице отчета отображается форма, в форму можно ввести данные в соответствии с заданием. Пользователь может ввести:
- контрагента (опциональное поле)
- период (по умолчанию отражается опция 'за все время')
- проект (один, несколько или все сразу)
4. При клике на кнопку 'Сформировать' данные с формы отправятся на бэкенд. В ответ будут получены данные для отрисовки таблицы. 

## Запуск
установка node.modules: **npm install**
запуск проекта: **npm run dev**

## Дальнейшие шаги
1. Доработать стилизацию элементов в соответствии с макетом, добавить адаптивную верстку
2. Сделать рефакторинг страницы отчета, вынести некоторые из элементов в отдельные файлы
3. Для страницы со списком отчетов получать данные динамически.


