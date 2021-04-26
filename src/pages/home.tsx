import React, { useEffect, useState } from 'react'
import axios from 'axios'
import AddReport from '../components/AddReport'

const Home: React.FunctionComponent = (props) => {


    const [editReport, setEditReport] = useState({
        editReport: '',
    })
    const [allReports, setAllReports] = useState([])

    const fetchGenReports = () => {
        axios.get('http://localhost:3001/reports')
            .then((res) => {
                setAllReports(res.data)
            })
    }

    const handleEditChange = (event: any) => {
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

    const deleteGenReport = (event: any) => {
        axios.delete('http://localhost:3001/reports/' + event.target.id)
            .then((res) => {
                fetchGenReports()
            })
    }

    useEffect(() => {
        fetchGenReports()
    }, [])

    return (
        <div>
            <h1>Welcome to Current Conditions</h1>
            
            <AddReport fetchGenReports={fetchGenReports} />
            <h1>Reports</h1>
            <div id="gen-reports-cont">
                {allReports.map((rep: any) => {
                    return (
                        <div className="gen-report-item" key={rep.post_id}>
                            <p>{rep.report}</p>
                           
                            <details>
                                <summary>Edit</summary>
                                <form id={rep.post_id} onSubmit={updateGenReport}>
                                    <label htmlFor="report-edit-input">Edit Report</label>
                                    <input id="report-edit-input" type="text" onChange={handleEditChange}/>
                                    <button type="submit">Update</button>
                                </form>
                            </details>

                            <button id={rep.post_id} onClick={deleteGenReport}>
                                Delete
                            </button>

                        </div>
                    )
                })}
            </div>
            
        </div>
    )
}

export default Home