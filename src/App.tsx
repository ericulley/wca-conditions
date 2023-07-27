// Dependencies
import { FunctionComponent as FC, useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { Route, Routes } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
// Components
import NavBar from './components/navigation/NavBar';
import Landing from './pages/Landing';
import Home from './pages/Home';
import Rivers from './pages/Rivers';
import Lakes from './pages/Lakes';
import Settings from './pages/Settings';
import Error from './pages/Error';
import AppContext from './contexts/app-context';
// Config & Styles
import { ThemeProvider } from '@mui/material';
import { theme } from './styles';
// Types & Interface
import { TGeneralReport } from './types/TGeneralReport';
import { TRiver } from './types/TRiver';
import { TLake } from './types/TLake';
import TPage from './types/TPage';

const App: FC<{}> = (props) => {
    // States
    const [generalReport, setGeneralReport] = useState<TGeneralReport>();
    const [rivers, setRivers] = useState<TRiver[]>([]);
    const [page, setPage] = useState<TPage>(TPage.Landing);

    // Auth
    const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();

    // App Functions
    const getGeneralReport = async (): Promise<void> => {
        try {
            const { data } = await axios.get(`http://localhost:5050/general/reports/latest`);
            setGeneralReport(data);
        } catch (error) {
            console.error(error);
        }
    };

    const getRivers = async (): Promise<void> => {
        try {
            const { data } = await axios.get('http://localhost:5050/rivers');
            console.log('Get Rivers Data: ', data);
            addCFS(data);
        } catch (error) {
            console.error(error);
        }
    };

    const fetchUSGSData = async (riversP: TRiver[]) => {
        try {
            let stationIdString: string = '';
            riversP.forEach((river) => {
                stationIdString = stationIdString + river.stationId + ',';
            });
            const stationIdSubstring: string = stationIdString.substring(
                0,
                stationIdString.length - 1
            );
            const baseURL = 'https://waterservices.usgs.gov/nwis/iv/';
            const staticParams = '&format=json&parameterCd=00060&siteStatus=all';
            const rawUSGSData: AxiosResponse = await axios.get(
                `${baseURL}?sites=${stationIdSubstring}${staticParams}`
            );
            return rawUSGSData.data.value.timeSeries;
        } catch (error) {
            console.error(error);
        }
    };

    const addCFS = async (rivers: TRiver[]): Promise<void> => {
        try {
            const timeSeriesData = await fetchUSGSData(rivers);
            timeSeriesData.forEach((data: any) => {
                const siteCode = data.sourceInfo.siteCode[0].value;
                const CFS = data.values[0].value[0].value;
                rivers.forEach((river) => {
                    if (river.stationId === siteCode) river.cfs = CFS;
                });
            });
            setRivers(rivers);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getGeneralReport();
    }, []);

    useEffect(() => {
        if (isAuthenticated) getRivers();
    }, [page]);

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
                    page: page,
                    setPage: setPage,
                }}
            >
                <div className="App">
                    {/* Components */}
                    <NavBar />
                    <Routes>
                        <Route path="/" element={<Landing />} />
                        <Route path="/reports" element={<Home />} />
                        <Route path="/rivers" element={<Rivers />} />
                        <Route path="/lakes" element={<Lakes />} />
                        <Route
                            path="/settings"
                            element={
                                user?.['http://current-conditions.com/roles']?.includes('Admin') ? (
                                    <Settings />
                                ) : (
                                    <Error />
                                )
                            }
                        />
                    </Routes>
                </div>
            </AppContext.Provider>
        </ThemeProvider>
    );
};

export default App;
