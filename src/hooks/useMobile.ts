import { useEffect, useMemo, useState } from 'react'

export const useMobile = () => {
    const [ windowWidth, setWindowWidth ] = useState(window.innerWidth);
    
    useEffect(() => {
        let timeoutId: ReturnType<typeof setTimeout>;
        
        const resize = () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                setWindowWidth(window.innerWidth);
            }, 225);
        };

        window.addEventListener('resize', resize);

        return () => {
            clearTimeout(timeoutId);
            window.removeEventListener('resize', resize);
        };
    }, []);
    
    const isMobile = useMemo(() => {
        return windowWidth <= 920;
    }, [ windowWidth ]);

    return {
        isMobile
    };
}