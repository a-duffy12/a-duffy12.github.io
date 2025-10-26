import { registryLink } from '../../constants';
import { Button } from '../button';
import { Content } from '../content';
import styles from '../../wedding.module.css';
import { Bar } from '../bar';

export const RegistryTab = () => {
    const openRegistry = () => {
        window.open(registryLink, '_blank');
    };

    const inlineStyles = {
        width: '128px'
    };
    
    return (
        <Content>
            <h3 className={styles.contentText}>
                {'Wedding Registry'}
            </h3>
            <Bar/>
            <p className={styles.contentText}>
                {'We have assembled a collection of suggested wedding gifts.'}
            </p>
            <p className={styles.contentText}>
                {'For our mutual convenience, all items on this registry can be shipped directly to our home address rather than gifted at the venue.'}
            </p>
            <br/>
            <Button inlineStyle={inlineStyles} label={'View Registry'} onClick={openRegistry}/>
            <br/>
            <p className={styles.contentText}>
                {'We appreciate your generousity, whether that be a gift from the registry, a present of your choosing, a monetary donation, or simply your presence on our special day!'}
            </p>
        </Content>
    );
}