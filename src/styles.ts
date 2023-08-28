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
                sx: {
                    marginTop: 1,
                },
            },
        },
        MuiToggleButton: {
            defaultProps: {
                sx: {
                    color: 'secondary',
                    marginTop: 1,
                    border: 'none',
                },
            },
            styleOverrides: {
                root: {
                    '&.Mui-selected': {
                        backgroundColor: 'rgba(0, 0, 0, 0)',
                    },
                    '&.Mui-selected:hover': {
                        backgroundColor: 'rgba(0, 0, 0, 0)',
                    },
                },
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
                sx: {
                    marginTop: 0,
                    paddingBottom: 0,
                    paddingTop: 0,
                },
            },
        },
        MuiCardHeader: {
            styleOverrides: {
                title: {
                    fontSize: '1.2em',
                },
            },
        },
        MuiGrid: {
            defaultProps: {
                spacing: 2,
                sx: {},
            },
        },
    },
};

export const theme = createTheme(defaultStyles);
