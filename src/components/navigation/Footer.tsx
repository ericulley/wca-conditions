import { Box, Link, Paper, Typography } from '@mui/material';
import CopyrightIcon from '@mui/icons-material/Copyright';

const Footer = () => {
    return (
        <Paper
            component={'footer'}
            elevation={0}
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
                <Link
                    href="https://ericulley.github.io/portfolio"
                    target="_blank"
                    sx={{ display: 'flex', alignItems: 'center' }}
                >
                    <CopyrightIcon sx={{ height: '20px' }} />
                    <Typography variant="body2">Ephemera Digital</Typography>
                </Link>
            </Box>
        </Paper>
    );
};

export default Footer;
