import { Header } from './components/header';
import { Tabs } from './components/tabs';
import styles from './wedding.module.css';
import whiteFloralsBackgroundImage from '../src/assets/images/white_florals.jpg';

export const Wedding = () => {
  
  return (
    <div className={styles.wedding} style={{
        backgroundImage: `url(${whiteFloralsBackgroundImage})`
    }}>
      <Header />
      <Tabs />
    </div>
  );
}
