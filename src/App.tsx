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

    const getGenReport = async () => {
        const { data } = await axios.get(`http://localhost:5050/general/reports/latest`);
        setGeneralReport(data);
    };

    const getRivers = async () => {
        const { data } = await axios.get('http://localhost:5050/rivers');
        setRivers(data);
    };

    useEffect(() => {
        getGenReport();
        getRivers();
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <AppContext.Provider
                value={{
                    generalReport: generalReport,
                    setGeneralReport: setGeneralReport,
                    rivers: rivers,
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
