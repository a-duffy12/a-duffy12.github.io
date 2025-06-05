import { useConfig } from '../contexts/configContext';
import styles from '../wedding.module.css';
import { IconType, } from 'react-icons';

interface TabButtonProps {
    label: string;
    active: boolean;
    icon: IconType | null;
    onClick: () => void;
}

export const TabButton = ({ label, active, icon: Icon, onClick }: TabButtonProps) => {
    const { isMobile } = useConfig();

    return (
        <div className={`${styles.tabButton} ${active ? styles.tabButtonActive : ''}`} onClick={onClick} role='button'>
            <div className={styles.tabButtonIcon}>
                {Icon && <Icon size={24} color="#dbc848"/>}
            </div>
            {!isMobile && 
            <div className={styles.tabButtonLabel}>
                {label}
            </div>}
        </div>
    )
}