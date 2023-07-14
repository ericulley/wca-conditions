import { Container, Grid, ImageListItem, Typography } from '@mui/material';
import { useContext, useEffect } from 'react';
import Footer from '../components/navigation/Footer';
import { AppContext } from '../contexts/app-context';
import TPage from '../types/TPage';

const Landing = () => {
    /*
     * Contexts
     */
    const { setPage } = useContext(AppContext);

    useEffect(() => {
        setPage(TPage.Landing);
    }, []);

    return (
        <Container maxWidth="xl" sx={{ height: '100v' }} id="landing-container">
            <Grid>
                <ImageListItem sx={{ width: 450, margin: '3rem auto' }} cols={1}>
                    <img src={'wca_logo_250.png'} alt={'world-cast-anglers-logo'} />
                </ImageListItem>
                <Typography variant="h2" align="center">
                    Current Conditions
                </Typography>
                <Typography variant="body1" align="center">
                    Login to get the latest.
                </Typography>
            </Grid>
            <Footer />
        </Container>
    );
};

export default Landing;
