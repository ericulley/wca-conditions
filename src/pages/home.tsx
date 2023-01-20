import { FunctionComponent, useEffect, useState } from 'react'
import axios from 'axios'
import AddReport from '../components/AddReport'
import EditReport from '../components/EditReport'
import { Container, Typography, Grid, Card, CardHeader, CardContent } from '@mui/material'


const Home: FunctionComponent = () => {

    const [report, setReport] = useState([])

    const fetchFishingReport = () => {
        axios.get('http://localhost:3001/report')
            .then((res) => {
                setReport(res.data)
            })
    }

    const deleteGenReport = (event: any) => {
        console.log(event.target.id)
        axios.delete('http://localhost:3001/reports/' + event.target.id)
            .then(() => {
                fetchFishingReport()
            })
    }

    useEffect(() => {
        fetchFishingReport()
    }, [])

    return (
        <Container>
            <Typography variant="h2" align="center" color="textPrimary">Welcome to Current Conditions</Typography>
            <Grid container>
                <Grid item xs={12}>
                    <Card>
                        <CardHeader title="Fishing Report"/>
                        <CardContent>
                            <div>
                                {report.map((report: any) => {
                                    return (
                                        <div key={report.id}>
                                            <p>{report.report}</p>
                                        </div>
                                    )
                                })}
                            </div>                            
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardHeader title="Rivers"/>
                        <CardContent></CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardHeader title="Lakes"/>
                        <CardContent>
                        </CardContent>                    
                    </Card>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Home