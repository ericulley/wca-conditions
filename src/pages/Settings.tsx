// Dependencies
import { FunctionComponent as FC, useContext, useEffect } from 'react';
import { withAuthenticationRequired } from '@auth0/auth0-react';
// import axios from 'axios'
// Components
import AddReport from '../components/reports/AddReport';
import EditReport from '../components/reports/EditReport';
import AddRiver from '../components/rivers/AddRiver';
import EditRiver from '../components/rivers/EditRiver';
import { Container, Typography, Grid } from '@mui/material';
import { AppContext } from '../contexts/app-context';
import TPage from '../types/TPage';

const Settings: FC = () => {
    /*
     * Contexts
     */
    const { setPage } = useContext(AppContext);

    useEffect(() => {
        setPage(TPage.Settings);
    }, []);

    return (
        <Container>
            <Typography variant="h2">Settings</Typography>
            <Typography className="" variant="h5">
                Fishing Report
            </Typography>
            <Grid container>
                <Grid item sm={12} color="primary">
                    <AddReport />
                    {/* Update Props */}
                </Grid>
                <Grid item sm={12} color="primary">
                    <EditReport fetchFishingReport={() => {}} postId={123} />
                </Grid>
            </Grid>

            <Typography className="" variant="h5">
                Rivers
            </Typography>
            <Grid container>
                <Grid item sm={6} color="primary">
                    <AddRiver />
                </Grid>
                <Grid item sm={6}>
                    <EditRiver />
                </Grid>
            </Grid>
            <Typography className="" variant="h5">
                Lakes
            </Typography>
        </Container>
    );
};

export default withAuthenticationRequired(Settings);
