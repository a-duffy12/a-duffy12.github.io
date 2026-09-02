import { Bar } from '../bar';
import { Content } from '../content';
import styles from '../../wedding.module.css';
import { QnA } from '../qna';
import { LabelLink } from '../labelLink';

export const VendorsTab = () => {

    return (
        <>
             <Content>
                <h3 className={styles.contentText}>
                    {'Musicians'}
                </h3>
                <Bar/>
                <LabelLink 
                    title={'Sofiia – Ceremony Flautist'}
                    label={'Contact via Gigsalad'}
                    link={'https://www.gigsalad.com/sofiia_saxophone_flute_player_toronto'}
                />
                <LabelLink 
                    title={'Graham Bedard – Cocktail Guitarist'}
                    label={'Contact via Instagram'}
                    link={'https://www.instagram.com/grahambedardmusic/?hl=en'}
                />
            </Content>
            <Content>
                <h3 className={styles.contentText}>
                    {'Ceremony Vendors'}
                </h3>
                <Bar/>
                <QnA 
                    question={'Maggie Speer – Officiant'}
                    answers={['Booked through the Township of North Huron']}
                />
                <LabelLink
                    title={'Tiffany Chantel – Photographer'}
                    label={'Mildmay'}
                    link={'https://tiffanychantelphotography.mypixieset.com/'}
                />
                <LabelLink
                    title={'Elora St. Flowers – Florals'}
                    label={'Harriston'}
                    link={'https://elorastflowers.ca/'}
                />
            </Content>
            <Content>
                <h3 className={styles.contentText}>
                    {'Beauty Vendors'}
                </h3>
                <Bar/>
                <LabelLink 
                    title={'Erin Bolger – Makeup Artist'}
                    label={'Brussels'}
                    link={'https://erinbolgermua.wixsite.com/makeup'}
                />
                <LabelLink 
                    title={'Hair Connection – Hair Stylists'}
                    label={'Kincardine'}
                    link={'https://www.hairconnectionsalon.com/'}
                />
                <LabelLink 
                    title={'G Nails & Spa – Nail Salon'}
                    label={'Goderich'}
                    link={'https://gnailsandspa.ca/'}
                />
            </Content>
            <Content>
                <h3 className={styles.contentText}>
                    {'Style Vendors'}
                </h3>
                <Bar/>
                <LabelLink 
                    title={'Taylor\'s Bridal Boutique – Wedding Dress Shop'}
                    label={'Elmira'}
                    link={'https://www.taylorsbridal.com/'}
                />
                <LabelLink 
                    title={'Endo Jewellers – Jeweller'}
                    label={'London'}
                    link={'https://www.endojewellers.com/'}
                />
            </Content>
        </>
    );
}