// Dependencies
import { FunctionComponent, useEffect, useState } from 'react'
import axios from 'axios'
// Interfaces
import River from '../interfaces/River'
// Components
import AddRiver from '../components/AddRiver'
import EditRiver from '../components/EditRiver'

const Settings: FunctionComponent = () => {

    const [allRivers, setAllRivers] = useState<River[]>([])

    const fetchAllRivers = () => {
        axios.get('http://localhost:3001/rivers')
            .then((res) => {
                setAllRivers(res.data)
            })     
    }

    useEffect(() => {
        fetchAllRivers()
    }, [])

    return (
        <div>
            <h1>Settings</h1>
            <AddRiver />
            <h2>Edit River</h2>
            <div id="river-settings-container">
                {allRivers.map((river: any) => {
                    return (
                        <div key={river.id}>
                            <p>{river.river_name}</p>
                            <EditRiver thisRiver={river} riverID={river.id} fetchAllRivers={fetchAllRivers} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Settings