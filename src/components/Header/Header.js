import Container from '../Container/Container';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.wrapper}>
      <Container className={styles.container}>
        <h1 className={styles.logo}>TODO</h1>
        <h2 className={styles.summary}>3 items</h2>
      </Container>
    </header>
  );
}
