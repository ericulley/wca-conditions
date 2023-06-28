import { FunctionComponent, useContext } from 'react';
import { Container, Typography, Grid, Card, CardHeader, CardContent } from '@mui/material';
import { AppContext } from '../contexts/ConditionsContext';

const Home: FunctionComponent = () => {
    const { generalReport, rivers } = useContext(AppContext);

    return (
        <Container maxWidth="xl">
            <Grid container spacing={2}>
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
                            <Grid
                                container
                                sx={{
                                    p: 2,
                                    minWidth: 300,
                                    fontWeight: 'bold',
                                    textDecoration: 'underline',
                                }}
                            >
                                <Grid item sm={2}>
                                    Name @ Location
                                </Grid>
                                <Grid item sm={1}>
                                    CFS
                                </Grid>
                                <Grid item sm={7}>
                                    Report
                                </Grid>
                                <Grid item sm={2}>
                                    Hatches
                                </Grid>
                            </Grid>
                            {rivers ? (
                                rivers.map((river) => {
                                    return (
                                        <Grid
                                            container
                                            key={river._id}
                                            sx={{
                                                bgcolor: 'background.paper',
                                                boxShadow: 1,
                                                borderRadius: 2,
                                                p: 2,
                                                minWidth: 300,
                                            }}
                                        >
                                            <Grid item xs={2}>
                                                {river.name}
                                            </Grid>
                                            <Grid item xs={1}>
                                                {river.cfs}
                                            </Grid>
                                            <Grid item xs={7}>
                                                {river.report}
                                            </Grid>
                                            <Grid item xs={2}>
                                                {river.hatches}
                                            </Grid>
                                        </Grid>
                                    );
                                })
                            ) : (
                                <p>No river available</p>
                            )}
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