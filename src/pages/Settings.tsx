// Dependencies
import { FunctionComponent as FC } from 'react';
// import axios from 'axios'
// Components
import AddReport from '../components/AddReport';
import AddRiver from '../components/AddRiver';
import EditRiver from '../components/EditRiver';
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
                </Grid>
            </Grid>

            <Typography className="" variant="h5">
                River Settings
            </Typography>
            <Grid container spacing={3}>
                <Grid item sm={6}>
                    <EditRiver />
                </Grid>
                <Grid item sm={6} color="primary">
                    <AddRiver />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Settings;
