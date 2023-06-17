import { z } from 'zod';
import { TGeneralReport, ZGeneralReport } from './TGeneralReport';
import { TLake, ZLake } from './TLake';
import TPage from './TPage';
import { TRiver, ZRiver } from './TRiver';

export type TAppContext = {
    generalReport?: TGeneralReport;
    getGeneralReport?: () => Promise<void>;
    setGeneralReport?: React.Dispatch<React.SetStateAction<TGeneralReport | undefined>>;
    rivers?: TRiver[];
    getRivers?: () => Promise<void>;
    setRivers?: React.Dispatch<React.SetStateAction<TRiver[]>> | undefined;
    lake?: TLake | null;
    setLake?: React.Dispatch<React.SetStateAction<TLake | undefined>> | undefined;
    page?: TPage;
    setPage?: React.Dispatch<React.SetStateAction<TPage>>;
};
