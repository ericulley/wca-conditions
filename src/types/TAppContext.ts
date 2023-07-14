import { TGeneralReport } from './TGeneralReport';
import { TRiver } from './TRiver';
import { TLake } from './TLake';
import TPage from './TPage';

export type TAppContext = {
    generalReport?: TGeneralReport;
    getGeneralReport?: () => Promise<void>;
    setGeneralReport: React.Dispatch<React.SetStateAction<TGeneralReport | undefined>>;
    rivers?: TRiver[];
    getRivers: () => Promise<void>;
    setRivers: React.Dispatch<React.SetStateAction<TRiver[]>> | undefined;
    lake?: TLake | null;
    setLake?: React.Dispatch<React.SetStateAction<TLake | undefined>> | undefined;
    page?: TPage;
    setPage: React.Dispatch<React.SetStateAction<TPage>>;
};
