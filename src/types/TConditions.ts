import { z } from 'zod';
import { TGeneralReport, ZGeneralReport } from './TGeneralReport';
import { TLake, ZLake } from './TLake';
import { TRiver, ZRiver } from './TRiver';

export type TConditionsContext = {
    generalReport?: TGeneralReport;
    setGeneralReport?: React.Dispatch<React.SetStateAction<TGeneralReport | undefined>>;
    river?: TRiver | null;
    setRiver?: React.Dispatch<React.SetStateAction<TRiver | undefined>> | undefined;
    lake?: TLake | null;
    setLake?: React.Dispatch<React.SetStateAction<TLake | undefined>> | undefined;
};
