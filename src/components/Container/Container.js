import clsx from 'clsx';
import styles from './Container.module.css';
export default function Container({ children, className }) {
  return <div className={clsx(styles.wrapper, className)}>{children}</div>;
}
