import { createContext } from 'react';
import { TAppContext } from '../types/TConditions';

export const AppContext = createContext<TAppContext>({
    fetchAllRivers: undefined,
    generalReport: undefined,
    setGeneralReport: undefined,
    rivers: undefined,
    setRivers: undefined,
    lake: undefined,
    setLake: undefined,
});
