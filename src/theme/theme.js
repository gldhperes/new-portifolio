import { orange, red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const darkTheme = {
    darker: "#1E2124",
    dark: "#2E3136",
    main: "#36393E",
    light: "#424549",
    lighter: "#4A4C51",
}

const textTheme = {
    white: "#FFFFFF",
    grey: "#B9BBBE",
    orange: "#F8AF0A",
}


const theme = createTheme({
    palette: {
        primary: {
            light: darkTheme.light,
            main: darkTheme.main,
            dark: darkTheme.dark,
            contrastText: textTheme.white,
        },

        secondary: {
            light: darkTheme.lighter,
            main: darkTheme.main,
            dark: darkTheme.darker,
            contrastText: textTheme.orange,
        },

        text: {
            primary: textTheme.white,
            secondary: textTheme.grey,
        },
    },

    components: {
        MuiDivider: {
            styleOverrides: {
                root: {
                    width: '100%',
                    height: '1px',
                    backgroundColor: darkTheme.lighter,
                },

                'page-divider': {
                    margin: '25px 0',

                },
            },
        },

        MuiButton: {
            variants: [
                {
                    props: { variant: 'drawerButton' },
                    style: {
                        fontSize: '1em',
                        color: textTheme.secondary,
                        backgroundColor: darkTheme.main,
                        transition: 'all 0.3s ease',
                        position: 'relative',
                        overflow: 'hidden',
                        // Animação para span underline azul
                        '& span > *': {
                            position: 'relative',
                            zIndex: 1,
                            transition: 'all 0.3s ease',
                        },
                        '& span::before': {
                            content: '""',
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            height: '100%',
                            color: `linear-gradient(45deg, ${textTheme.orange} 100% 0)`,

                            zIndex: 0,
                            transformOrigin: 'left',

                            borderRadius: 2,
                        },
                        '&:hover span::before': {
                            transform: 'scaleX(1)',
                        },

                        '&:hover span': {
                            color: textTheme.orange,
                        },
                    },
                },

                {
                    props: { variant: 'projectButton' },
                    style: {
                        backgroundColor: darkTheme.light,
                        borderRadius: '8px',
                        fontWeight: 600,

                        ':hover': {
                            color: '#f8af0a',
                            backgroundColor: darkTheme.light,
                        },
                    },
                },


            ],
        },

        MuiTypography: {

            styleOverrides: {
                root: {
                    transition: 'all 0.3s ease',
                },
            },
            variants: [
                {
                    props: { variant: 'avatarText' },
                    style: {

                        width: '100%',
                        color: 'primary.contrastText',

                        textAlign: 'center',
                        textTransform: 'uppercase',

                        overflowWrap: "break-word",
                        wordWrap: "break-word",
                        whiteSpace: "normal",
                    },
                },
            ],
        },

    },
});

export default theme;
