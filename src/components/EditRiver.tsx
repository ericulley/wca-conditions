// Dependencies
import { FunctionComponent, useEffect, useState } from 'react'
import axios from 'axios'
// Interfaces
import River from '../interfaces/River'

interface Props {
    thisRiver: River;
    fetchAllRivers: () => void;
    riverID: number;
}

const EditRiver: FunctionComponent<Props> = ({ riverID, thisRiver, fetchAllRivers }) => {

    const [editRiver, setEditRiver] = useState<River>(thisRiver)

    const handleChange = (event: any) => {
        setEditRiver({
            ...editRiver,
            [event.target.name]: event.target.value,
        })
    }

    const catchEmptyInputs = () => {
        let k: keyof typeof editRiver
        for (k in editRiver) {
            if (editRiver[k] === '') {
                setEditRiver({
                    ...editRiver,
                    [k]: thisRiver[k],
                })
            }
        }
    }

    const updateRiver = async (event: any) => {
        event.preventDefault()
        catchEmptyInputs()
        axios.put('http://localhost:3001/rivers/' + event.target.id, editRiver)
            .then((res) => {
                console.log(editRiver)
                fetchAllRivers()
            })
        event.target.reset() 
    }

    const deleteRiver = (event: any) => {
        axios.delete('http://localhost:3001/rivers/' + event.target.id)
        .then(() => {
            fetchAllRivers()
        })
    }

    return (
        <details className="river-edit-container">
            <summary>Edit</summary>
            <form className="edit-input-container" id={riverID + ''} onSubmit={updateRiver}>
                <label htmlFor="edit-river-name">River Name</label>
                <input id="edit-river-name" name="river_name" type="text" onChange={handleChange}/>

                <label htmlFor="edit-river-report">Report</label>
                <input id="edit-river-report" name="river_report" type="text" onChange={handleChange}/>

                <label htmlFor="edit-river-flies">Flies</label>
                <input id="edit-river-flies" name="flies" type="text" onChange={handleChange}/>

                <button type="submit">Update River</button>
                <button id={riverID + ''} onClick={deleteRiver}>Delete River</button>
            </form>
        </details>
    )
}

export default EditRiver