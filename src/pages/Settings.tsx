// Dependencies
import { FunctionComponent as FC } from 'react';
// import axios from 'axios'
// Components
import AddReport from '../components/reports/AddReport';
import EditReport from '../components/reports/EditReport';
import AddRiver from '../components/rivers/AddRiver';
import EditRiver from '../components/rivers/EditRiver';
import { Container, Typography, Grid } from '@mui/material';

const Settings: FC = () => {
    // const styles = useStyles()

    return (
        <Container>
            <Typography variant="h2">Settings</Typography>
            <Typography className="" variant="h5">
                Fishing Report
            </Typography>
            <Grid container spacing={3}>
                <Grid item sm={12} color="primary">
                    <AddReport />
                    {/* Update Props */}
                    <EditReport fetchFishingReport={() => {}} postId={123} />
                </Grid>
            </Grid>

            <Typography className="" variant="h5">
                Rivers
            </Typography>
            <Grid container spacing={3}>
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

export default Settings;
