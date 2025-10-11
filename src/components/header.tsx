import styles from '../wedding.module.css';
import bannerImage from '../assets/images/banner.png';
import { Button } from './button';

export const Header = () => {


    return (
        <>
            <div className={styles.weddingHeader} >
                <div className={styles.headerTitle}>
                    <h1>
                        {'Brooklyn Wright '}
                    </h1>
                    <h1>
                        {' & '}
                    </h1>
                    <h1>
                        {' Aiden Duffy'}
                    </h1>
                </div>
            </div>
        </>
    )
}