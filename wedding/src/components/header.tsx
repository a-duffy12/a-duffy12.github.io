import styles from '../wedding.module.css';
import bannerImage from '../assets/images/banner.png';
import { Button } from './button';

export const Header = () => {

    const vo = () => {

    }

    return (
        <>
            <div className={styles.weddingHeader} >
                <h1>
                    {'Brooklyn Wright & Aiden Duffy'}
                </h1>
            </div>
        </>
    )
}