import { useMemo, useState } from 'react';
import { useConfig } from '../contexts/configContext';
import { Tab } from '../types';
import styles from '../wedding.module.css';
import { TabButton } from './tabButton';
import { FaBed, FaCalendarCheck, FaCamera, FaEnvelope, FaGift, FaHome, FaQuestionCircle, FaUserTie } from 'react-icons/fa';

export const Tabs = () => {
    const { config, isMobile } = useConfig();
    const [ activeTab, setActiveTab ] = useState<string>('save-the-date');

    const tabs: Tab[] = [
        {
            id: 'home',
            label: 'Home',
            icon: FaHome,
            enabled: config.savetheDateEnabled
        },
        {
            id: 'rsvp',
            label: 'RSVP',
            icon: FaCalendarCheck,
            enabled: config.rsvpEnabled
        },
        {
            id: 'transportation-and-lodging',
            label: 'Accomodations',
            icon: FaBed,
            enabled: config.transportationEnabled || config.lodgingEnabled
        },
        {
            id: 'registry',
            label: 'Registry',
            icon: FaGift,
            enabled: config.registryEnabled
        },
        {
            id: 'wedding-party',
            label: 'Party',
            icon: FaUserTie,
            enabled: config.weddingPartyEnabled
        },
        {
            id: 'gallery',
            label: 'Gallery',
            icon: FaCamera,
            enabled: config.photoGalleryEnabled
        },
        {
            id: 'faq',
            label: 'FAQ',
            icon: FaQuestionCircle,
            enabled: config.faqEnabled
        },
        {
            id: 'contact-us',
            label: 'Contact',
            icon: FaEnvelope,
            enabled: config.contactUsEnabled
        }
    ];

    const page = useMemo(() => {
        switch (activeTab) {
            case 'save-the-date':
                return <>save the date</>
            case 'contact-us':
                <>{'contact us'}</>
            case 'faq':
                <div>FAQ</div>
            default: 
                return <></>
        }
    }, [ activeTab ]);


    return (
        <div>
            <div className={styles.tabs}>
                {tabs.filter(tab => tab.enabled).map(tab => (
                    <TabButton key={tab.id} label={tab.label} active={activeTab === tab.id} icon={tab.icon} onClick={() => setActiveTab(tab.id)} />
                ))}
            </div>
            {page}
        </div>
    );
}