import { createContext } from 'react';
import { TConditions } from '../types/TConditions';

export const ConditionsContext = createContext<TConditions>({
    generalReport: null,
    river: null,
    lake: null,
});
