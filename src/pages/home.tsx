import React, { useEffect, useState } from 'react'
import axios from 'axios'
import AddReport from '../components/AddReport'
import EditReport from '../components/EditReport'


const Home: React.FunctionComponent = (props) => {

    const [allReports, setAllReports] = useState([])

    const fetchGenReports = () => {
        axios.get('http://localhost:3001/reports')
            .then((res) => {
                setAllReports(res.data)
            })
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
                           
                            <EditReport postId={rep.post_id} fetchGenReports={fetchGenReports} />

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