import { z } from 'zod';
import { TGeneralReport, ZGeneralReport } from './TGeneralReport';
import { TLake, ZLake } from './TLake';
import { TRiver, ZRiver } from './TRiver';

export type TAppContext = {
    fetchAllRivers?: () => {};
    generalReport?: TGeneralReport;
    setGeneralReport?: React.Dispatch<React.SetStateAction<TGeneralReport | undefined>>;
    rivers?: TRiver[];
    setRivers?: React.Dispatch<React.SetStateAction<TRiver[]>> | undefined;
    lake?: TLake | null;
    setLake?: React.Dispatch<React.SetStateAction<TLake | undefined>> | undefined;
};
