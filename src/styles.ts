import { createTheme } from '@mui/material';
import { blueGrey, grey } from '@mui/material/colors';

export const defaultStyles = {
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
        MuiTextField: {
            defaultProps: {
                sx: { marginTop: 1 },
            },
        },
        MuiCardContent: {},
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
