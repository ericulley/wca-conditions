// Dependencies
import { FunctionComponent as FC, useContext, useEffect } from 'react';
import { useAuth0, User, withAuthenticationRequired } from '@auth0/auth0-react';
import { Container, Typography, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
// Components & Context
import AddReport from '../components/reports/AddReport';
import EditReport from '../components/reports/EditReport';
import AddRiver from '../components/rivers/AddRiver';
import EditRiver from '../components/rivers/EditRiver';
import AppContext from '../contexts/app-context';
// Types & Interfaces
import TPage from '../types/TPage';

const Settings: FC = () => {
    const { setPage } = useContext(AppContext);

    useEffect(() => {
        setPage(TPage.Settings);
    }, []);

    return (
        <Container maxWidth="xl">
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
