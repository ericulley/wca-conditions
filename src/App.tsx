// Dependencies
import { FunctionComponent as FC, useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { Route, Routes } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
// Components
import NavBar from './components/navigation/NavBar';
import Rivers from './pages/Rivers';
import Home from './pages/Home';
import Settings from './pages/Settings';
import { AppContext } from './contexts/ConditionsContext';
import { TGeneralReport } from './types/TGeneralReport';
import { TRiver } from './types/TRiver';
import { TLake } from './types/TLake';
// Config & Styles
import { config } from './config/config';
import { ThemeProvider } from '@mui/material';
import { theme } from './styles';

const App: FC<{}> = (props) => {
    // States
    const [generalReport, setGeneralReport] = useState<TGeneralReport>();
    const [rivers, setRivers] = useState<TRiver[]>([]);

    // Auth
    const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();

    // App Functions
    const getGeneralReport = async (): Promise<void> => {
        const { data } = await axios.get(`http://localhost:5050/general/reports/latest`);
        setGeneralReport(data);
    };

    const getRivers = async (): Promise<void> => {
        const { data } = await axios.get('http://localhost:5050/rivers');
        addCFS(data);
    };

    const fetchUSGSData = async (riversP: TRiver[]) => {
        let stationIdString: string = '';
        riversP.forEach((river) => {
            stationIdString = stationIdString + river.stationId + ',';
        });
        const stationIdSubstring: string = stationIdString.substring(0, stationIdString.length - 1);
        const baseURL = 'https://waterservices.usgs.gov/nwis/iv/';
        const staticParams = '&format=json&parameterCd=00060&siteStatus=all';
        const rawUSGSData: AxiosResponse = await axios.get(
            `${baseURL}?sites=${stationIdSubstring}${staticParams}`
        );
        return rawUSGSData.data.value.timeSeries as [];
    };

    const addCFS = async (riversP: TRiver[]): Promise<void> => {
        const timeSeriesData = await fetchUSGSData(riversP);

        timeSeriesData.forEach((data: any) => {
            const siteCode = data.sourceInfo.siteCode[0].value;
            const CFS = data.values[0].value[0].value;
            riversP.forEach((river) => {
                if (river.stationId === siteCode) river.cfs = CFS;
            });
        });
        setRivers(riversP);
    };

    useEffect(() => {
        getGeneralReport();
        getRivers();
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <AppContext.Provider
                value={{
                    generalReport: generalReport,
                    getGeneralReport: getGeneralReport,
                    setGeneralReport: setGeneralReport,
                    rivers: rivers,
                    getRivers: getRivers,
                    setRivers: setRivers,
                }}
            >
                <div className="App">
                    {/* Components */}
                    <NavBar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/rivers" element={<Rivers />} />
                        <Route path="/settings" element={<Settings />} />
                    </Routes>
                </div>
            </AppContext.Provider>
        </ThemeProvider>
    );
};

export default App;
