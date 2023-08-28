// Dependencies
import { FunctionComponent, useContext, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { AppBar, Toolbar, Box, Button, ToggleButton, ToggleButtonGroup } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
// Components & Contexts
import AppContext from '../../contexts/app-context';
// Types & Interfaces
import TPage from '../../types/TPage';

const NavBar: FunctionComponent = () => {
    const { loginWithRedirect, logout, user, isAuthenticated, isLoading } = useAuth0();
    const { page, setPage } = useContext(AppContext);
    console.log(page);

    useEffect(() => {
        if (user) {
            console.log('User: ', user);
        }
    }, [user]);

    return (
        <AppBar position="sticky">
            <Toolbar>
                <Box style={{ width: '100%' }} display="flex" justifyContent="space-between">
                    <ToggleButtonGroup style={{ width: '33%' }} color="secondary">
                        <Box
                            style={{ width: '100%' }}
                            display="flex"
                            justifyContent="space-around"
                            alignItems="center"
                        >
                            {/* Home Link  */}
                            <NavLink to={'/reports'}>
                                <ToggleButton
                                    value="cc"
                                    color="secondary"
                                    selected={page === 1}
                                    onClick={() => {
                                        if (setPage) setPage(TPage.Home);
                                    }}
                                >
                                    Current Conditions
                                </ToggleButton>
                            </NavLink>

                            {/* Rivers Link  */}
                            <NavLink to={'/rivers'}>
                                <ToggleButton
                                    value="rivers"
                                    color="secondary"
                                    selected={page === 2}
                                    onClick={() => {
                                        if (setPage) setPage(TPage.Rivers);
                                    }}
                                >
                                    Rivers
                                </ToggleButton>
                            </NavLink>

                            {/* Lakes Link  */}
                            <NavLink to={'/lakes'}>
                                <ToggleButton
                                    value="lakes"
                                    color="secondary"
                                    selected={page === 3}
                                    onClick={() => {
                                        if (setPage) setPage(TPage.Lakes);
                                    }}
                                >
                                    Lakes
                                </ToggleButton>
                            </NavLink>
                        </Box>
                    </ToggleButtonGroup>
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
                                        loginWithRedirect({ appState: { returnTo: '/reports' } });
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
