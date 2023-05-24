import { FunctionComponent, useContext } from 'react';
import axios from 'axios';
import AddReport from '../components/reports/AddReport';
import EditReport from '../components/reports/EditReport';
import { Container, Typography, Grid, Card, CardHeader, CardContent } from '@mui/material';
import { AppContext } from '../contexts/ConditionsContext';

const Home: FunctionComponent = () => {
    const { generalReport, rivers } = useContext(AppContext);

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
                <Grid item xs={12}>
                    <Card>
                        <CardHeader title="Rivers" />
                        <CardContent>
                            {rivers &&
                                rivers.map((river) => {
                                    return (
                                        <div key={river._id}>
                                            {river.name}, {river.report}, {river.hatches}
                                        </div>
                                    );
                                })}
                        </CardContent>
                    </Card>
                </Grid>
                {/* <Grid item xs={12} md={6}>
                    <Card>
                        <CardHeader title="Lakes" />
                        <CardContent></CardContent>
                    </Card>
                </Grid> */}
            </Grid>
        </Container>
    );
};

export default Home;
