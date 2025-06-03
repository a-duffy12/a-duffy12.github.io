import { useMemo, useState } from 'react';
import { useConfig } from '../contexts/configContext';
import { Tab } from '../types';
import styles from '../wedding.module.css';
import { TabButton } from './TabButton';

export const Tabs = () => {
    const { config, isMobile } = useConfig();
    const [ activeTab, setActiveTab ] = useState<string>('save-the-date');

    const tabs: Tab[] = [
        {
            id: 'save-the-date',
            label: 'Home',
            icon: '',
            enabled: config.savetheDateEnabled
        },
        {
            id: 'contact-us',
            label: 'Contact',
            icon: '',
            enabled: config.contactUsEnabled
        },
        {
            id: 'faq',
            label: 'FAQ',
            icon: '',
            enabled: config.faqEnabled
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
                    <TabButton key={tab.id} label={tab.label} active={activeTab === tab.id} onClick={() => setActiveTab(tab.id)} />
                ))}
            </div>
            {page}
        </div>
    );
}