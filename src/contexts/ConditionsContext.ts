import { createContext } from 'react';
import { TConditionsContext } from '../types/TConditions';

export const ConditionsContext = createContext<TConditionsContext>({
    generalReport: undefined,
    setGeneralReport: undefined,
    fetchAllRivers: undefined,
    river: undefined,
    setRiver: undefined,
    lake: undefined,
    setLake: undefined,
});
