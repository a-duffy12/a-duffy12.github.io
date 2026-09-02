import { Content } from '../content';
import styles from '../../wedding.module.css';
import { Button } from '../button';
import { Bar } from '../bar';
import { webUploaderLink } from '../../constants';

export const GalleryTab = () => {
        const openWebUploader = () => {
            window.open(webUploaderLink, '_blank');
        };
    
        const inlineStyles = {
            width: '128px'
        };

       return (
        <>
            <Content>
                <h3 className={styles.contentText}>
                    {'Gallery'}
                </h3>
                <Bar/>
                <p className={styles.contentText}>
                    {'The link below will take you to our gallery where you are able to upload any photos you took at our wedding.'}
                </p>
                <p className={styles.contentText}>
                    {'We will add our professional photographs there once we have access to them.'}
                </p>
                <br/>
                <Button inlineStyle={inlineStyles} label={'View Gallery'} onClick={openWebUploader}/>
                <br/>
                <p className={styles.contentText}>
                    {'All photos can be viewed and downloaded to your personal devices.'}
                </p>
            </Content>
        </>
    );
}