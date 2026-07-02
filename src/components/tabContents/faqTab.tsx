import { Bar } from '../bar';
import { Content } from '../content';
import styles from '../../wedding.module.css';
import { QnA } from '../qna';
import { useMobile } from '../../hooks/useMobile';

export const FaqTab = () => {
    const {isMobile} = useMobile();

    return (
        <>
        {isMobile ?
            <Content>
                <h3 className={styles.contentText}>
                    {'Frequently Asked Questions'}
                </h3>
                <Bar/>
                <QnA 
                    question={'Where can I RSVP?'} 
                    answers={['Please RSVP on the \'RSVP\' tab. You will need to provide the code on your physical invitation.']} 
                />
                <QnA 
                    question={'What are the wedding colours?'} 
                    answers={[
                        'The wedding colours are juniper and periwinkle.',
                        'The bridesmaids will be wearing juniper (green), and the groomsmen will be wearing gray.'
                    ]} 
                />
                <QnA
                    question={'When should I arrive?'}
                    answers={[
                        'Ceremony - 4pm start - Arrive 20 to 30 minutes prior.',
                        'Dinner - 6pm start - Arrive 10 to 20 minutes prior.',
                        'Reception - 8pm start'
                    ]}
                />
                <QnA 
                    question={'Is everything at the same location?'} 
                    answers={['Yes. The ceremony, cocktail hour, dinner, and reception are all at the Listowel Golf Club.']} 
                />
                <QnA 
                    question={'Are ceremony and dinner guests also invited to the reception?'} 
                    answers={['Yes, all guests are welcome to stay to the end of the night.']} 
                />
                <QnA 
                    question={'Will the wedding be indoors or outdoors?'} 
                    answers={['The ceremony will be outdoors. Cocktail hour is split between an indoor space and an outdoor patio. Dinner and reception are indoors, with the outdoor patio remaining open. In the event of rain, the ceremony will be held indoors.']} 
                />
                <QnA 
                    question={'Will the ceremony be unplugged?'} 
                    answers={['Yes, please!']} 
                />
                <QnA 
                    question={'What is the recommended attire?'} 
                    answers={[
                        'Formal or cocktail wedding attire.', 
                        'Masculine: Jacket preferred, tie optional.', 
                        'Feminine: Dress below the knee, evening fabrics preferred.',
                        'There is no specific colour scheme. Please refrain from wearing white or very light-coloured dresses.'
                    ]} 
                />
                <QnA 
                    question={'Can I bring a plus one?'} 
                    answers={['Invitations explictly list all invited guests and plus ones.']} 
                />
                <QnA
                    question={'Will the wedding be child-free?'}
                    answers={['We are including children and babies in the celebration. All invited members of your family are listed on your invitation.']}
                />
                <QnA 
                    question={'What if I have dietary restrictions?'} 
                    answers={['Guests are able to make meal selections when they RSVP. Vegan and vegetarian options are available. Please contact us directly if you have severe or life-threatening food allergies. We will work with you and the venue to ensure your plated dinner is safe for consumption.']} 
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
        : <Content>
            <h3 className={styles.contentText}>
                {'Frequently Asked Questions'}
            </h3>
            <Bar/>
            <div className={styles.contentTwoColumn}>
                <div className={styles.contentColumn}>
                    <QnA 
                        question={'Where can I RSVP?'} 
                        answers={['Please RSVP on the \'RSVP\' tab. You will need to provide the code on your physical invitation.']} 
                    />
                    <QnA
                        question={'When should I arrive?'}
                        answers={[
                            'Ceremony - 4pm start - Arrive 20 to 30 minutes prior.',
                            'Dinner - 6pm start - Arrive 10 to 20 minutes prior.',
                            'Reception - 8pm start'
                        ]}
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
                        ]} 
                    />
                    <QnA
                        question={'Will the wedding be child-free?'}
                        answers={['We are including children and babies in the celebration. All invited members of your family are listed on your invitation.']}
                    />
                    <QnA 
                        question={'Is there parking at the venue?'} 
                        answers={['There is parking on-site. Guests can also leave vehicles parked overnight.']} 
                    />
                </div>
                <div className={styles.contentColumn}>
                     <QnA 
                        question={'What are the wedding colours?'} 
                        answers={[
                            'The wedding colours are juniper and periwinkle.',
                            'The bridesmaids will be wearing juniper (green), and the groomsmen will be wearing gray.'
                        ]} 
                    />
                    <QnA 
                        question={'Is everything at the same location?'} 
                        answers={['Yes. The ceremony, cocktail hour, dinner, and reception are all at the Listowel Golf Club.']} 
                    />
                    <QnA 
                        question={'Are ceremony and dinner guests also invited to the reception?'} 
                        answers={['Yes, all guests are welcome to stay to the end of the night.']} 
                    />
                    <QnA 
                        question={'Will the ceremony be unplugged?'} 
                        answers={['Yes, please!']} 
                    />
                    <QnA 
                        question={'Can I bring a plus one?'} 
                        answers={['Invitations explictly list all invited guests and plus ones.']} 
                    />
                    <QnA 
                        question={'What if I have dietary restrictions?'} 
                        answers={['Guests are able to make meal selections when they RSVP. Vegan and vegetarian options are available. Please contact us directly if you have severe or life-threatening food allergies. We will work with you and the venue to ensure your plated dinner is safe for consumption.']} 
                    />
                    <QnA 
                        question={'Is there any form of public transit?'} 
                        answers={['There are not reliable Ubers, taxis, or buses in Listowel. Instead, transporation is being provided. See the \'Transportation\' tab for more details.']} 
                    />
                    <QnA 
                        question={'I have a question not covered here, how can I ask it?'} 
                        answers={['Email us at brooklynaiden2026@gmail.com.']} 
                    />
                </div>
            </div>
        </Content>
        }
        </>
    );
}