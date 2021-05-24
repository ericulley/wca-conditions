import { FunctionComponent, useEffect, useState } from 'react'
import axios from 'axios'
import AddReport from '../components/AddReport'
import EditReport from '../components/EditReport'
import { Container, Typography } from '@material-ui/core'


const Home: FunctionComponent = () => {

    const [allReports, setAllReports] = useState([])

    const fetchGenReports = () => {
        axios.get('http://localhost:3001/reports')
            .then((res) => {
                setAllReports(res.data)
            })
    }

    const deleteGenReport = (event: any) => {
        axios.delete('http://localhost:3001/reports/' + event.id)
            .then(() => {
                fetchGenReports()
            })
    }

    useEffect(() => {
        //fetchGenReports()
    }, [])

    return (
        <Container>
            <Typography variant="h2" align="center" color="textPrimary" gutterBottom>Welcome to Current Conditions</Typography>
            
            <AddReport fetchGenReports={fetchGenReports} />

            <h1>Reports</h1>
            {/*<div id="gen-reports-cont">
                {allReports.map((report: any) => {
                    return (
                        <div className="gen-report-item" key={report.id}>
                            <p>{report.report}</p>
                           
                            <EditReport postId={report.id} fetchGenReports={fetchGenReports} />

                            <button id={report.id} onClick={deleteGenReport}>
                                Delete
                            </button>

                        </div>
                    )
                })}
            </div>*/}
            
        </Container>
    )
}

export default Home