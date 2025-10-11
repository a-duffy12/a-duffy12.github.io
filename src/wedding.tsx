import { Header } from './components/header';
import { Tabs } from './components/tabs';
import styles from './wedding.module.css';
import whiteLeavesBackgroundImage from '../src/assets/images/leaf_background.jpg';

export const Wedding = () => {
  
  return (
    <div className={styles.wedding} style={{
        backgroundImage: `url(${whiteLeavesBackgroundImage})`
    }}>
      <Header />
      <Tabs />
    </div>
  );
}
