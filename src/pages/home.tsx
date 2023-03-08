import { FunctionComponent, useContext } from 'react';
import axios from 'axios';
import AddReport from '../components/reports/AddReport';
import EditReport from '../components/reports/EditReport';
import { Container, Typography, Grid, Card, CardHeader, CardContent } from '@mui/material';
import { ConditionsContext } from '../contexts/ConditionsContext';

const Home: FunctionComponent = () => {
    const { generalReport } = useContext(ConditionsContext);

    // const deleteGenReport = (event: any) => {
    //     console.log(event.target.id);
    //     axios.delete('http://localhost:5050/general/reports/' + event.target.id).then(() => {
    //         getGenReport();
    //     });
    // };

    return (
        <Container>
            <Typography variant="h2" align="center" color="textPrimary">
                Welcome to Current Conditions
            </Typography>
            <Grid container>
                <Grid item xs={12}>
                    <Card>
                        <CardHeader title="Fishing Report" />
                        <CardContent>
                            <div>
                                {generalReport ? (
                                    <p>{generalReport.report}</p>
                                ) : (
                                    <p>No report available</p>
                                )}
                            </div>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardHeader title="Rivers" />
                        <CardContent></CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardHeader title="Lakes" />
                        <CardContent></CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Home;
