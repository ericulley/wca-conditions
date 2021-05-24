import { AppBar, Toolbar, Button, makeStyles } from '@material-ui/core'
import SettingsIcon from '@material-ui/icons/Settings'
import { FunctionComponent } from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth0 } from '../contexts/auth0-context'

const useStyles = makeStyles({
    btn: {
        fontSize: 14,
    }
})

const NavBar: FunctionComponent = () => {

    const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0()

    const ui = useStyles()

    return (
        <AppBar position="static">
            <Toolbar>
                <div id="nav-bar-left">
                    <NavLink to={'/'}><Button>Current Conditions</Button></NavLink>
                    <NavLink to={'/rivers'}><Button>Rivers</Button></NavLink>
                </div>
                <div id="nav-bar-right">
                    <NavLink to={'/settings'}><SettingsIcon color="action"/></NavLink>
                    <NavLink to={'/'}>
                        <Button variant="outlined" onClick={() => {loginWithRedirect()}}>Log In</Button>
                    </NavLink>
                </div>
            </Toolbar>
        </AppBar>
    )

}

export default NavBar