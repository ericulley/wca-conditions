import { createContext } from 'react';
import { TAppContext } from '../types/TAppContext';

const AppContext = createContext<TAppContext>({
    generalReport: undefined,
    getGeneralReport: undefined,
    setGeneralReport: async () => {},
    rivers: undefined,
    getRivers: async () => {},
    setRivers: undefined,
    lake: undefined,
    setLake: undefined,
    page: undefined,
    setPage: async () => {},
});

export default AppContext;
