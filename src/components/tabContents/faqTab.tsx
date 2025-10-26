import { Bar } from '../bar';
import { Content } from '../content';
import styles from '../../wedding.module.css';

export const FaqTab = () => {
    return (
        <Content>
            <h3 className={styles.contentText}>
                {'Frequently Asked Questions'}
            </h3>
            <Bar/>
        </Content>
    );
}