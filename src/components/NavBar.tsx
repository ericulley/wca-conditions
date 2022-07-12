import { FunctionComponent, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import axios, { AxiosResponse } from 'axios'
import { useAuth0 } from '../contexts/auth0-context'
import { AppBar, Toolbar, Box, Button } from '@material-ui/core'
import SettingsIcon from '@material-ui/icons/Settings'

const NavBar: FunctionComponent = () => {

    const { loginWithRedirect, logout, user, isAuthenticated, isLoading } = useAuth0()

    //const ui = useStyles()

    useEffect(() => {
        console.log(user)
    }, [user])

    return (
        <AppBar position="sticky">
            <Toolbar>
                <Box 
                    style={{width: '100%'}} 
                    display="flex" 
                    justifyContent="space-between">
                    <Box 
                        display="flex" justifyContent="space-around" 
                        alignItems="center"
                        style={{width: '33%'}}>

                        {/* Home Link  */}
                        <NavLink to={'/'}><Button>Current Conditions</Button></NavLink>

                        {/* Rivers Link  */}
                        <NavLink to={'/rivers'}><Button>Rivers</Button></NavLink>

                        {/* Lakes Link  */}
                        <NavLink to={'/lakes'}><Button>Lakes</Button></NavLink>
                    </Box>
                    <Box 
                        display="flex"
                        justifyContent="space-around"
                        alignItems="center"
                        style={{width: '15%'}}>

                        {/* Settings Link  */}
                        {isAuthenticated && user['https://roles'].includes("Admin") && <NavLink to={'/settings'}>
                            <SettingsIcon color="action" style={{padding: '20% 0 0 0'}}/>
                        </NavLink>}

                        {/* Log In Link  */}
                        {!user && !isLoading && <NavLink to={'/'}>
                            <Button variant="outlined" onClick={() => {loginWithRedirect()}}>Log In</Button>
                        </NavLink>}
                        

                        {/* Log Out Link  */}
                        {user && isAuthenticated && !isLoading && <NavLink to={'/'}>
                            <Button variant="outlined" onClick={() => {logout()}}>Log Out</Button>
                        </NavLink>}
                        
                    </Box>
                </Box>
            </Toolbar>
        </AppBar>
    )

}

export default NavBar