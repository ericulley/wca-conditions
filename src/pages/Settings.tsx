import { FunctionComponent, useEffect, useState } from 'react'
import axios from 'axios'
import AddRiver from '../components/AddRiver'

const Settings: FunctionComponent = () => {
    return (
        <div>
            <h1>Settings</h1>
            <AddRiver />
        </div>
    )
}

export default Settings