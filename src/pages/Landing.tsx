import {
    BottomNavigation,
    BottomNavigationAction,
    Container,
    Grid,
    ImageList,
    ImageListItem,
    Paper,
    TableFooter,
    Typography,
    Link,
} from '@mui/material';
import CopyrightIcon from '@mui/icons-material/Copyright';
import { Box, flexbox } from '@mui/system';

const Landing = () => {
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
            <Paper
                component={'footer'}
                elevation={3}
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'fixed',
                    bottom: 0,
                    left: 0,
                    height: 'auto',
                    width: '100%',
                    padding: '.5rem',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <CopyrightIcon sx={{ height: '20px' }} />
                        <Typography variant="body2">Ephemera Digital</Typography>
                    </Box>
                    <Link href="https://ericulley.github.io/portfolio" variant="body2">
                        ericulley.github.io/portfolio
                    </Link>
                </Box>
            </Paper>
        </Container>
    );
};

export default Landing;
