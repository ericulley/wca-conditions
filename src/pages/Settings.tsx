// Dependencies
import { FunctionComponent } from 'react'
// import axios from 'axios'
// Components
import AddReport from '../components/AddReport'
import AddRiver from '../components/AddRiver'
import EditRiver from '../components/EditRiver'
import { Container, Typography, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    h5: {
        padding: '1em 0 .5em 0',
        textDecoration: 'underline'
    }
})

const Settings: FunctionComponent = () => {

    const styles = useStyles()

    return (
        <Container>
            <Typography variant="h2">Settings</Typography>
            <Typography className={styles.h5} variant="h5">Fishing Report</Typography>
            <Grid container spacing={3}>
                <Grid item sm={12} color="primary">
                    <AddReport />
                </Grid>
            </Grid>

            <Typography className={styles.h5} variant="h5">River Settings</Typography>
            <Grid container spacing={3}>
                <Grid item sm={6}>
                    <EditRiver/>
                </Grid>
                <Grid item sm={6} color="primary">
                    <AddRiver />
                </Grid>
            </Grid>
        </Container>
    )
}

export default Settings