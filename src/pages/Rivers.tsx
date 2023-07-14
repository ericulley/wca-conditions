// Dependencies
import { FunctionComponent, useContext, useEffect } from 'react';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import { Container, Typography, Grid, Card, CardHeader, CardContent } from '@mui/material';
// Components & Context
import Footer from '../components/navigation/Footer';
import AppContext from '../contexts/app-context';
// Types & Interfaces
import TPage from '../types/TPage';

const Rivers: FunctionComponent = () => {
    /*
     * Contexts
     */
    const { setPage, rivers, setRivers } = useContext(AppContext);

    useEffect(() => {
        setPage(TPage.Rivers);
    }, []);

    return (
        <Container id="rivers-container" maxWidth="xl">
            <Card>
                <CardHeader title="Rivers" />
                <CardContent>
                    <Grid
                        container
                        sx={{
                            borderRadius: 2,
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
            <Footer />
        </Container>
    );
};

export default withAuthenticationRequired(Rivers);
