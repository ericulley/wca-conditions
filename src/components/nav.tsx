import React from 'react'

const Nav: React.FunctionComponent = () => {

    return (
        <div id="nav-bar">
            <div id="nav-bar-left">
                <p>Current Conditions</p>
            </div>
            <div id="nav-bar-right">
                <p>Settings</p>
                <p>Log In</p>
            </div>
        </div>
    )

}

export default Nav