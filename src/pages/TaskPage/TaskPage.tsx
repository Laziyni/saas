import { Button } from 'shared/ui';
import clsx from 'clsx';
import styles from './TaskPage.module.scss';

export const TaskPage = () => {
  return (
    <div className={clsx(styles.TaskPage)}>
      <h1>Заголовок задачи</h1>

      <div className={styles.options}>
        <div>
          Баллы: <span>120</span>
        </div>
        <div>
          Время: <span>120 мин</span>
        </div>
      </div>

      <div className={clsx(styles.taskText)}>
        <p>
          Таким образом постоянный количественный рост и сфера нашей активности
          влечет за собой процесс внедрения и модернизации позиций, занимаемых
          участниками в отношении поставленных задач. Таким образом рамки и
          место обучения кадров способствует подготовки и реализации
          существенных финансовых и административных условий. Таким образом
          постоянный количественный рост и сфера нашей активности требуют от нас
          анализа существенных финансовых и административных условий.
        </p>
        <p>
          Таким образом постоянный количественный рост и сфера нашей активности
          влечет за собой процесс внедрения и модернизации позиций, занимаемых
          участниками в отношении поставленных задач. Таким образом рамки и
          место обучения кадров способствует подготовки и реализации
          существенных финансовых и административных условий. Таким образом
          постоянный количественный рост и сфера нашей активности требуют от нас
          анализа существенных финансовых и административных условий.
        </p>
      </div>
      <Button variant="success">Взять в работу</Button>
    </div>
  );
};