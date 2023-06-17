import { FunctionComponent, useContext, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { AppBar, Toolbar, Box, Button } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import { AppContext } from '../../contexts/ConditionsContext';
import TPage from '../../types/TPage';

const NavBar: FunctionComponent = () => {
    const { loginWithRedirect, logout, user, isAuthenticated, isLoading } = useAuth0();
    const { page, setPage } = useContext(AppContext);

    useEffect(() => {
        if (user) {
            console.log('User: ', user);
        }
    }, [user]);

    return (
        <AppBar position="sticky">
            <Toolbar>
                <Box style={{ width: '100%' }} display="flex" justifyContent="space-between">
                    <Box
                        display="flex"
                        justifyContent="space-around"
                        alignItems="center"
                        style={{ width: '33%' }}
                    >
                        {/* Home Link  */}
                        <NavLink to={'/'}>
                            <Button
                                color="secondary"
                                onClick={() => {
                                    if (setPage) setPage(TPage.Home);
                                }}
                            >
                                Current Conditions
                            </Button>
                        </NavLink>

                        {/* Rivers Link  */}
                        <NavLink to={'/rivers'}>
                            <Button
                                color="secondary"
                                onClick={() => {
                                    if (setPage) setPage(TPage.Rivers);
                                }}
                            >
                                Rivers
                            </Button>
                        </NavLink>

                        {/* Lakes Link  */}
                        <NavLink to={'/lakes'}>
                            <Button
                                color="secondary"
                                onClick={() => {
                                    if (setPage) setPage(TPage.Lakes);
                                }}
                            >
                                Lakes
                            </Button>
                        </NavLink>
                    </Box>
                    <Box
                        display="flex"
                        justifyContent="space-around"
                        alignItems="center"
                        style={{ width: '15%' }}
                    >
                        {/* Settings Link  */}
                        {isAuthenticated &&
                            user!['http://current-conditions.com/roles'].includes('Admin') && (
                                <NavLink to={'/settings'}>
                                    <SettingsIcon
                                        color="action"
                                        style={{ padding: '20% 0 0 0' }}
                                        onClick={() => {
                                            if (setPage) setPage(TPage.Settings);
                                        }}
                                    />
                                </NavLink>
                            )}

                        {/* Log In Link  */}
                        {!user && !isLoading && (
                            <NavLink to={'/'}>
                                <Button
                                    variant="outlined"
                                    color="secondary"
                                    onClick={() => {
                                        loginWithRedirect();
                                    }}
                                >
                                    Log In
                                </Button>
                            </NavLink>
                        )}

                        {/* Log Out Link  */}
                        {user && isAuthenticated && !isLoading && (
                            <NavLink to={'/'}>
                                <Button
                                    variant="outlined"
                                    color="secondary"
                                    onClick={() => {
                                        logout();
                                    }}
                                >
                                    Log Out
                                </Button>
                            </NavLink>
                        )}
                    </Box>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;
