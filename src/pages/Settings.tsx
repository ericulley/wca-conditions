// Dependencies
import { FunctionComponent, useEffect } from 'react'
import axios from 'axios'
// Components
import AddRiver from '../components/AddRiver'
import EditRiver from '../components/EditRiver'
import { Container, Typography, Grid } from '@material-ui/core'

const Settings: FunctionComponent = () => {

    return (
        <Container>
            <Typography variant="h2">Settings</Typography>
            <Grid container spacing={3}>
                <Grid item sm={6} color="primary">
                    <AddRiver />
                </Grid>
                <Grid item sm={6}>
                    <EditRiver/>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Settings