import { createContext } from 'react';
import { TAppContext } from '../types/TConditions';

export const AppContext = createContext<TAppContext>({
    generalReport: undefined,
    setGeneralReport: undefined,
    fetchAllRivers: undefined,
    rivers: undefined,
    setRivers: undefined,
    lake: undefined,
    setLake: undefined,
});
