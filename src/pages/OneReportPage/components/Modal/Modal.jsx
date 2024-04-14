import style from './style.module.scss';

export default function Modal({ active, setActive }) {
  return (
    <div
      className={`${style.modal} ${active ? style.active : ''}`}
      onClick={() => setActive(false)}
    >
      <div
        className={`${style.modalContent} ${active ? style.modalActive : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        <h1>Справка</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ex quam, convallis non
          pharetra in, posuere sit amet lacus. Donec congue vehicula mollis.
        </p>
        <p>
          Nulla ut gravida sem. Quisque dignissim condimentum aliquet. Sed ornare velit vitae
          vehicula eleifend. Sed a diam euismod, posuere massa sit amet, lobortis nulla. Vivamus
          vulputate orci interdum malesuada gravida. In vel diam ut diam ullamcorper placerat.
        </p>
        <p>
          Etiam eget auctor nisl. Phasellus sit amet molestie justo. Ut dapibus pharetra vehicula.
          Suspendisse porttitor interdum sapien, vitae sodales risus accumsan ut. Integer volutpat
          lobortis augue, a consectetur leo porta quis. Duis quis odio sed ex molestie feugiat.
          Morbi imperdiet ligula id elit luctus rhoncus.
        </p>
        <p>
          Morbi euismod efficitur bibendum. Nullam consectetur pretium neque, ut finibus mi lacinia
          vel. Curabitur gravida non elit nec bibendum. Vivamus ante felis, dictum vitae molestie
          et, varius vel ligula. Suspendisse ligula eros, ultricies ac tempus sodales, consectetur
          sit amet ante. Nam gravida, nisi ut molestie lobortis, velit diam egestas dui, a hendrerit
          nunc mi id nulla. Duis sed pretium massa.
        </p>
        <button onClick={() => setActive(false)} type="button">
          Закрыть
        </button>
      </div>
    </div>
  );
}
