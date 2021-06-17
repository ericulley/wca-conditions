import { AppBar, Toolbar, Button } from '@material-ui/core'
import SettingsIcon from '@material-ui/icons/Settings'
import { FunctionComponent, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth0 } from '../contexts/auth0-context'

const NavBar: FunctionComponent = () => {

    const { loginWithRedirect, logout, user } = useAuth0()

    //const ui = useStyles()

    useEffect(() => {
        console.log(user)
    }, [user])

    return (
        <AppBar position="sticky">
            <Toolbar>
                <div id="nav-bar-left">
                    <NavLink to={'/'}><Button>Current Conditions</Button></NavLink>
                    <NavLink to={'/rivers'}><Button>Rivers</Button></NavLink>
                </div>
                <div id="nav-bar-right">
                    <NavLink to={'/settings'}>
                        <SettingsIcon color="action"/>
                    </NavLink>
                    <NavLink to={'/'}>
                        <Button variant="outlined" onClick={() => {loginWithRedirect()}}>Log In</Button>
                    </NavLink>
                    <NavLink to={'/'}>
                        <Button variant="outlined" onClick={() => {logout()}}>Log Out</Button>
                    </NavLink>
                </div>
            </Toolbar>
        </AppBar>
    )

}

export default NavBar