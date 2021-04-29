import React, { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'

const NavBar: FunctionComponent = () => {

    return (
        <div id="nav-bar">
            <div id="nav-bar-left">
                <Link to={'/'}>Current Conditions</Link>
                <Link to={'/rivers'}>Rivers</Link>
            </div>
            <div id="nav-bar-right">
                <Link to={'/settings'}>Settings</Link>
                <Link to={'/'}>Log In</Link>
            </div>
        </div>
    )

}

export default NavBar