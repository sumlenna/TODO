import Container from '../Container/Container';
import styles from './Actions.module.css';
import clsx from 'clsx';

export default function Actions() {
  return (
    <footer className={styles.wrapper}>
      <Container className={styles.container}>
        <button className={clsx(styles.btn, styles.active)}>All</button>
        <button className={styles.btn}>Completed</button>
        <button className={styles.btn}>New</button>
      </Container>
    </footer>
  );
}
