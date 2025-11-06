import { Bar } from '../bar';
import { Content } from '../content';
import styles from '../../wedding.module.css';
import { QnA } from '../qna';

export const FaqTab = () => {
    return (
        <Content>
            <h3 className={styles.contentText}>
                {'Frequently Asked Questions'}
            </h3>
            <Bar/>
            <QnA 
                question={'What is the dress code?'} 
                answer={'Formal.'} 
            />
            <QnA 
                question={'Will the wedding be indoors or outdoors?'} 
                answer={'The ceremony will be outdoors. Cocktail hour is split between an indoor space and an outdoor patio. Dinner and reception are indoors, with the outdoor patio remaining open. In the event of rain, the ceremony will be held indoors.'} 
            />
            <QnA 
                question={'What if I have dietary restrictions?'} 
                answer={'You will be able to make your meal selection on RRSVP. Vegan and vegetarian options will be available.'} 
            />
            <QnA 
                question={'Can I bring a plus one?'} 
                answer={'Invitations will explictly list all invited guests and plus ones.'} 
            />
            <QnA 
                question={'Is everything at the same location?'} 
                answer={'Yes. The ceremony, cocktail hour, dinner, and reception are all at the Listowel Golf Club.'} 
            />
            <QnA 
                question={'Is there parking at the venue?'} 
                answer={'There is parking. Guests can also leave vehicles parked overnight.'} 
            />
            <QnA 
                question={'Is there any form of public transit?'} 
                answer={'There are not reliable Ubers, taxis, or buses in Listowel. Instead, transporation is being provided. See the \'Transportation\' tab for more details.'} 
            />
            <QnA 
                question={'I have a question not covered here, how can I ask it?'} 
                answer={'Email us at brooklynaiden2026@gmail.com.'} 
            />
        </Content>
    );
}