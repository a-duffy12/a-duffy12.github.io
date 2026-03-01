import { Content } from '../content';
import styles from '../../wedding.module.css';
import { ContentVariableWidth } from '../contentVariableWidth';
import { Bar } from '../bar';
import { QnA } from '../qna';
import stageAndDoeImage from '../../assets/images/stag_and_doe.gif';

export const StagAndDoeTab = () => {
    return (
        <>
            <Content>
                <img 
                    className={styles.contentImage}
                    src={stageAndDoeImage}
                    alt={'Stag and Doe, June 27, 2026. 7 PM to 12 AM. Donation bar, games and prizes, 50-50 draw, campfire and good. 30 Bristol Terrace, Wingham. Parking available at BIAX international.'}
                />
            </Content>st
            <ContentVariableWidth>
                <h3 className={styles.contentText}>
                    {'Schedule of Events'}
                </h3>
                <Bar/>
                <QnA 
                    question={'Start'}
                    answers={['7:00 PM']}
                />
                <QnA 
                    question={'Human Slots Game'}
                    answers={['8:00, 9:00, 10:00 PM']}
                />
                <QnA 
                    question={'Campfire'}
                    answers={['10:30 PM']}
                />
                <QnA 
                    question={'50/50 Draw Winner'}
                    answers={['11:00 PM']}
                />
                <QnA 
                    question={'Bar Last Call'}
                    answers={['12:00 AM']}
                />
            </ContentVariableWidth>
            <Content>
                <h3 className={styles.contentText}>
                    {'Location'}
                </h3>
                <Bar/>
                <QnA 
                    question={'30 Bristol Terrace, Wingham'}
                    answers={[
                        'Party will be outdoors with canopy tent.'
                    ]}
                />               
                <div className={styles.mapContainer}>
                    <iframe className={styles.mapFrame} src='https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=+(30%20bristol%20terrace)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'/>
                </div>
            </Content>
             <Content>
                <h3 className={styles.contentText}>
                    {'Parking'}
                </h3>
                <Bar/>
                <QnA 
                    question={'Bi-Ax International'}
                    answers={[
                        'Parking is available at this lot at the end of the street.'
                    ]}
                />               
                <div className={styles.mapContainer}>
                    <iframe className={styles.mapFrame} src='https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=+(Bi-ax%20international)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'/>
                </div>
            </Content>
        </>
    );
}