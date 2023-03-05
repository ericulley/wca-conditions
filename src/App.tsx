// Dependencies
import { FunctionComponent as FC, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material';
import { useAuth0 } from '@auth0/auth0-react';
import { blueGrey, grey } from '@mui/material/colors';
// Components
import NavBar from './components/NavBar';
import Rivers from './pages/Rivers';
import Home from './pages/Home';
import Settings from './pages/Settings';

// Material UI Styles
const theme = createTheme({
    palette: {
        primary: blueGrey,
        secondary: grey,
    },
    components: {
        MuiCardContent: {
            styleOverrides: {
                root: {
                    paddingTop: '0',
                },
            },
        },
        MuiCardHeader: {
            styleOverrides: {
                title: {
                    fontSize: '1.2em',
                },
                avatar: {
                    marginRight: 8,
                },
            },
        },
    },
});

const App: FC<{}> = (props) => {
    const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();

    const [userData, setUserData] = useState();

    const fetchUserData = () => {
        if (user && user.sub) {
            getAccessTokenSilently()
                .then((token: any) => {
                    axios
                        .get(`http://localhost:3001/userdata/${user.sub}`, {
                            headers: {
                                authorization: `Bearer ${token}`,
                            },
                        })
                        .then((res: AxiosResponse) => {
                            console.log(res.data);
                            setUserData(res.data);
                        })
                        .catch((err: any) => {
                            console.error(err.message);
                        });
                })
                .catch((err: any) => {
                    console.error(err.message);
                });
        }
    };

    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <Router>
                    <NavBar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/rivers" element={<Rivers />} />
                        <Route path="/settings" element={<Settings />} />
                    </Routes>
                </Router>
            </div>
        </ThemeProvider>
    );
};

export default App;
