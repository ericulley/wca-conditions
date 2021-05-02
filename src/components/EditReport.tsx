import { FunctionComponent, useState } from 'react'
import axios from 'axios'

interface Props {
    fetchGenReports: () => void;
    postId: number;
}

const EditReport: FunctionComponent<Props> = ({fetchGenReports, postId}) => {

    const [editReport, setEditReport] = useState({
        editReport: '',
    })

    const handleChange = (event: any) => {
        setEditReport({
            editReport: event.target.value,
        })
    }

    const updateGenReport = (event: any) => {
        event.preventDefault()
        console.log(event.target.id)
        axios.put('http://localhost:3001/reports/' + event.target.id, editReport)
            .then((res) => {
                fetchGenReports()
            }) 
        event.target.reset()  
    }

    return (
        <details>
            <summary>Edit</summary>
            <form id={postId + ''} onSubmit={updateGenReport}>
                <label htmlFor="report-edit-input">Edit Report</label>
                <input id="report-edit-input" type="text" onChange={handleChange}/>
                <button type="submit">Update</button>
            </form>
        </details>
    )
}

export default EditReport