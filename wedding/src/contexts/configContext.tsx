import { createContext, ReactNode, useContext, useState } from 'react';
import { configInitialState } from '../constants';
import { Config } from '../types';
import { useRsvp } from '../hooks/useRSVP';

interface ConfigContextType {
    config: Config,
    rsvpSubmitted: () => boolean,
    setRsvpSubmitted: (rsvpStatus: boolean) => void
}

const ConfigContext = createContext<ConfigContextType>({
    config: configInitialState,
    rsvpSubmitted: () => false,
    setRsvpSubmitted: (rsvpStatus: boolean) => {}
});

interface ConfigProviderProps {
    children: ReactNode
}

export const ConfigProvider = ({ children }: ConfigProviderProps) => {
    const config = configInitialState;
    const { rsvp, setRsvp } = useRsvp();

    const rsvpSubmitted = () => {
        return rsvp;
    }

    const setRsvpSubmitted = (rsvpStatus: boolean) => {
        setRsvp(rsvpStatus);
    }

    return (
        <ConfigContext.Provider value={{ config, rsvpSubmitted, setRsvpSubmitted }}>
            {children}
        </ConfigContext.Provider>
    );
}

export const useConfig = () => useContext(ConfigContext);