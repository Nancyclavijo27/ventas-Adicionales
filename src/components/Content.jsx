import styles from './Content.module.css';

const Content = () => {
  return (
    <div className={styles.containera}>
      <div className={styles.top}>
        <div className={styles.title}>
          Wait! Your order is in progress.
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing
        </div>
      </div>
    </div>
  );
}

export default Content;
