import { createTheme, ThemeOptions } from '@mui/material';
import { blueGrey, grey } from '@mui/material/colors';

export const defaultStyles: ThemeOptions = {
    palette: {
        primary: blueGrey,
        secondary: grey,
    },
    components: {
        MuiButton: {
            defaultProps: {
                sx: { marginTop: 1 },
            },
        },
        MuiInput: {
            defaultProps: {
                sx: { marginTop: 1 },
            },
        },
        MuiLink: {
            defaultProps: {
                sx: { textDecoration: 'none' },
            },
        },
        MuiTextField: {
            defaultProps: {
                sx: { marginTop: 1 },
            },
        },
        MuiCardContent: {
            defaultProps: {
                sx: { marginTop: 0, paddingTop: 0 },
            },
        },
        MuiCardHeader: {
            styleOverrides: {
                title: {
                    fontSize: '1.2em',
                },
            },
        },
    },
};

export const theme = createTheme(defaultStyles);
