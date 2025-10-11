import { createContext, ReactNode, useContext } from 'react';
import { configInitialState } from '../constants';
import { Config } from '../types';
import { useRsvp } from '../hooks/useRSVP';
import { useMobile } from '../hooks/useMobile';

interface ConfigContextType {
    config: Config,
    rsvpSubmitted: boolean,
    setRsvpSubmitted: (rsvpStatus: boolean) => void,
    isMobile: boolean
}

const ConfigContext = createContext<ConfigContextType>({
    config: configInitialState,
    rsvpSubmitted: localStorage.getItem('rsvp') === 'true',
    setRsvpSubmitted: (rsvpStatus: boolean) => {},
    isMobile: window.innerWidth <= 768
});

interface ConfigProviderProps {
    children: ReactNode
}

export const ConfigProvider = ({ children }: ConfigProviderProps) => {
    const config = configInitialState;
    const { rsvpSubmitted, setRsvpSubmitted } = useRsvp();
    const { isMobile } = useMobile();

    return (
        <ConfigContext.Provider value={{ config, rsvpSubmitted, setRsvpSubmitted, isMobile }}>
            {children}
        </ConfigContext.Provider>
    );
}

export const useConfig = () => useContext(ConfigContext);