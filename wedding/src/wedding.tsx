import { Header } from './components/header';
import { Tabs } from './components/tabs';
import styles from './wedding.module.css';

export const Wedding = () => {
  
  return (
    <div className={styles.wedding}>
      <Header />
      <Tabs />
    </div>
  );
}
