import { Bar } from '../bar';
import { Content } from '../content';
import styles from '../../wedding.module.css';
import { QnA } from '../qna';

export const FaqTab = () => {

    return (
        <>
             <Content>
                <h3 className={styles.contentText}>
                    {'Ceremony Flautist'}
                </h3>
            </Content>
            <Content>
                <h3 className={styles.contentText}>
                    {'Cocktail Guitarist'}
                </h3>
            </Content>
            <Content>
                <h3 className={styles.contentText}>
                    {'Photographer'}
                </h3>
            </Content>
            <Content>
                <h3 className={styles.contentText}>
                    {'Officiant'}
                </h3>
            </Content>
            <Content>
                <h3 className={styles.contentText}>
                    {'Florals'}
                </h3>
            </Content>
            <Content>
                <h3 className={styles.contentText}>
                    {'Makeup Artist'}
                </h3>
            </Content>
            <Content>
                <h3 className={styles.contentText}>
                    {'Hair Stylist Studio'}
                </h3>
            </Content>
            <Content>
                <h3 className={styles.contentText}>
                    {'Nails'}
                </h3>
            </Content>
            <Content>
                <h3 className={styles.contentText}>
                    {'Jeweller'}
                </h3>
            </Content>
        </>
    );
}