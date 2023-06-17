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
        MuiGridContainer: {
            defaultProps: {
                sx: { borderRadius: 2, p: 2, minWidth: 300 },
            },
        },
    },
};

export const theme = createTheme(defaultStyles);
