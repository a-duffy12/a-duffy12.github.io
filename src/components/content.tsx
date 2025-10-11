import { useMemo } from 'react';
import { useConfig } from '../contexts/configContext';
import styles from '../wedding.module.css';

interface IContentProps {
    children: React.ReactNode
}

export const Content = ({children}: IContentProps) => {
    const { isMobile } = useConfig();
    const widthStyle = useMemo(() => isMobile ? styles.contentMobile : styles.contentDesktop, [isMobile]);

    return (
        <div className={`${styles.content} ${widthStyle}`}>
            {children}
        </div>
    );
}
