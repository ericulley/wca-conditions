import { createContext } from 'react';
import { TAppContext } from '../types/TAppContext';

export const AppContext = createContext<TAppContext>({
    generalReport: undefined,
    getGeneralReport: undefined,
    setGeneralReport: undefined,
    rivers: undefined,
    getRivers: undefined,
    setRivers: undefined,
    lake: undefined,
    setLake: undefined,
});
