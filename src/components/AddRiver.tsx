import { FunctionComponent, useState } from 'react'
import axios from 'axios'
import River from '../interfaces/River'

interface Props {
   
}

const AddRiver: FunctionComponent<Props> = () => {


    const [newRiver, setNewRiver] = useState<River>({
        riverName: '',
        stationId: 0,
        hatches: '',
        flies: '',
        riverReport: ''
    })

    const handleInputChange = (event: any) => {
        setNewRiver({
            ...newRiver,
            [event.target.name]: event.target.value,
        })
    }

    const submitRiver = (event: any) => {
        event.preventDefault()
        axios.post('http://localhost:3001/rivers', newRiver)
            .then((res) => {
                
            }) 
        event.target.reset()    
    }

    return (
        <form className="form" id="new-river-form" onSubmit={submitRiver}>
            <h3>Add New River</h3>
            <label htmlFor="river-name-input">Name @ Location</label>
            <input id="river-name-input" type="text" name="riverName" onChange={handleInputChange}/>

            <label htmlFor="station-id-input">Station ID</label>
            <input id="station-id-input" type="text" name="stationId" onChange={handleInputChange}/>

            <label htmlFor="hatches-input">Hatches</label>
            <input id="hatches-input" type="text" name="hatches" onChange={handleInputChange}/>

            <label htmlFor="flies-input">Flies</label>
            <input id="flies-input" type="text" name="flies" onChange={handleInputChange}/>

            <label htmlFor="river-report-input">Report</label>
            <input id="river-report-input" type="text" name="riverReport" onChange={handleInputChange}/>

            <button type="submit">ADD</button>             
        </form>
    )
}

export default AddRiver