import React, { useEffect, useState } from 'react'
import axios from 'axios'

interface Props {
    fetchGenReports: () => void;
}

const AddReport: React.FunctionComponent<Props> = ({fetchGenReports}) => {

    const [genReport, setGenReport] = useState({
        genReport: '',
    })

    const handleInputChange = (event: any) => {
        setGenReport({
            genReport: event.target.value,
        })
    }

    const submitGenReport = (event: any) => {
        event.preventDefault()
        axios.post('http://localhost:3001/reports', genReport)
            .then((res) => {
                fetchGenReports()
            }) 
        event.target.reset()    
    }

    return (
        <form id="new-report-form" onSubmit={submitGenReport}>
            <h3>Add New Fishing Report</h3>
            <label htmlFor="gen-report-input">Report</label>
            <input id="gen-report-input" type="text" onChange={handleInputChange}/>
            <button type="submit">ADD</button>             
        </form>
    )
}

export default AddReport