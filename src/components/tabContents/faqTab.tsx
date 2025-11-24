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
                question={'Is everything at the same location?'} 
                answers={['Yes. The ceremony, cocktail hour, dinner, and reception are all at the Listowel Golf Club.']} 
            />
            <QnA 
                question={'Will the wedding be indoors or outdoors?'} 
                answers={['The ceremony will be outdoors. Cocktail hour is split between an indoor space and an outdoor patio. Dinner and reception are indoors, with the outdoor patio remaining open. In the event of rain, the ceremony will be held indoors.']} 
            />
            <QnA 
                question={'What is the recommended attire?'} 
                answers={[
                    'Formal or cocktail wedding attire.', 
                    'Masculine: Jacket preferred, tie optional.', 
                    'Feminine: Dress below the knee, evening fabrics preferred.',
                    'There is no specific colour scheme. Please refrain from wearing white or very light-coloured dresses.'
                    // add in wedding party colours
                ]} 
            />
            <QnA 
                question={'Can I bring a plus one?'} 
                answers={['Invitations will explictly list all invited guests and plus ones.']} 
            />
            <QnA 
                question={'What if I have dietary restrictions?'} 
                answers={['Guests will be able to make meal selections when they RSVP. Vegan and vegetarian options will be available. Please contact us directly if you have severe or life-threatening food allergies. We will work with you and the venue to ensure your plated dinner is safe for consumption.']} 
            />
            <QnA 
                question={'Is there parking at the venue?'} 
                answers={['There is parking on-site. Guests can also leave vehicles parked overnight.']} 
            />
            <QnA 
                question={'Is there any form of public transit?'} 
                answers={['There are not reliable Ubers, taxis, or buses in Listowel. Instead, transporation is being provided. See the \'Transportation\' tab for more details.']} 
            />
            <QnA 
                question={'I have a question not covered here, how can I ask it?'} 
                answers={['Email us at brooklynaiden2026@gmail.com.']} 
            />
        </Content>
    );
}