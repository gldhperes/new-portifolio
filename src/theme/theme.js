import { createTheme } from '@mui/material/styles';
import { color } from 'framer-motion';

// --- Paleta inspirada na HUD de Star Wars Battlefront II (2017) ---
// Tons principais: azul neon, branco, cinza escuro, vermelho alerta, amarelo energia
const swbf2Theme = {
    black: "#0a0d12", // fundo quase preto
    dark: "#181c22", // fundo menus
    main: "#232a34f0", // cards, painéis
    blueSoft: "#3fd7ff", // azul claro
    white: "#ffffff",
    grey: "#758085",
    orange: "#ffb50a", // energia, destaque
}

const swbf2Text = {
    primary: swbf2Theme.white,
    secondary: swbf2Theme.grey,
    energy: swbf2Theme.orange,
}


// --- Palette inspirada em Star Wars Battlefront II ---
const theme = createTheme({
    typography: {
        fontFamily: 'Exo, Arial, sans-serif',
    },
    palette: {
        primary: {
            light: swbf2Theme.blueSoft,
            main: swbf2Theme.dark + "f0",
            dark: swbf2Theme.dark,
            contrastText: swbf2Theme.white,
        },
        secondary: {
            light: swbf2Theme.yellow,
            main: swbf2Theme.white,
            dark: swbf2Theme.black,
            contrastText: swbf2Theme.white,
        },
        background: {
            paper: swbf2Theme.main,
            default: swbf2Theme.main + "f0",
        },
        text: {
            primary: swbf2Text.primary,
            secondary: swbf2Text.secondary,
        },
        warning: {
            main: swbf2Theme.orange,
        },

    },

    components: {
        MuiDivider: {
            styleOverrides: {
                root: {
                    width: '100%',
                    height: '1px',
                    // backgroundColor: darkTheme.lighter,
                    backgroundColor: swbf2Text.secondary,
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
                        color: swbf2Text.secondary,
                        backgroundColor: swbf2Theme.dark,
                        textShadow: '0 0 5px #758085',
                        transition: 'all 0.3s ease',
                        position: 'relative',
                        overflow: 'hidden',


                        // IMPORTANTE: Mantenha o layout em coluna como base
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        // padding: '12px 0', // Ajuste o padding vertical se necessário


                        // Estilo do ícone
                        '& .MuiButton-startIcon': {
                            margin: 0, // Remove a margem padrão do ícone
                            transition: 'transform 2.3s ease-in-out', // Adiciona transição ao ícone também
                        },


                        // Estilo do span (label)
                        '& span': {
                            display: 'block',
                            marginTop: '8px', // Espaço entre o ícone e o texto quando fechado
                            transition: 'transform 2.3s ease-in-out, opacity 0.3s ease-in-out', // ANIMAÇÃO AQUI
                            transform: 'translateY(0)', // Posição inicial (drawer fechado)
                            opacity: 1,
                        },

                        // --- LÓGICA DA ANIMAÇÃO ---
                        // Quando o drawer estiver ABERTO
                        '&[data-drawer-open="true"]': {
                            flexDirection: 'row', // Volta a ser linha
                            justifyContent: 'flex-start', // Alinha à esquerda
                            padding: '8px 16px', // Padding horizontal para o botão aberto

                            '& .MuiButton-startIcon': {
                                marginRight: '8px', // Espaço entre ícone e texto
                            },

                            '& span': {
                                marginTop: 0,
                                // Move o span para o lado, mas como o flex-direction mudou,
                                // não precisamos mais de transform. A transição no flex-direction
                                // não é suave, então vamos manter a lógica de transform.
                                // Para isso, o flex-direction não deve mudar.

                                // CORREÇÃO DA ABORDAGEM:
                                // Vamos manter flex-direction: column e usar transform.
                            },
                        },





                        // ANIMAÇÔES DE HOVER E SELECIONADO
                        // Deixe o texto e ícone laranjas quando selecionado
                        '&[aria-selected="true"], &[data-selected="true"], &.Mui-selected': {
                            // color: '#fff',
                            '& .MuiButton-startIcon, & .MuiButton-endIcon': {
                                color: swbf2Text.energy,
                                textShadow: '0 0 10px #ffb50a',
                            },

                            '& span': {
                                color: swbf2Text.energy,
                                textShadow: '0 0 10px #ffb50a',
                            },

                        },

                        //  Animação no hover
                        '&:hover': {
                            'span, .MuiButton-startIcon': {
                                // color: textTheme.orange,
                                color: swbf2Text.energy,
                                textShadow: '0 0 10px #ffb50a',
                            },

                            // Animação do start icon
                            '& .MuiButton-startIcon': {
                                textShadow: '0 0 10px #ffb50a',
                                transition: 'all 0.3s ease',
                                // scale: 1.05,
                                // rotate: '-15deg',
                            },
                        },



                        // Adiciona efeito underline animado  dentro do botão projectButton
                        '::before': {
                            content: "''",
                            // width: '50%',
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            height: '1px',
                            backgroundColor: swbf2Theme.orange,

                            boxShadow: '0 0 10px #ffb50a',
                            transform: 'scaleX(0)',
                            transition: 'transform 0.7s ease',
                        },
                        '&:hover::before': {
                            transformOrigin: 'bottom left',
                            transform: 'scaleX(1)',
                        },

                    },
                },

                {
                    props: { variant: 'projectButton' },
                    style: {
                        // backgroundColor: darkTheme.light,
                        borderRadius: '8px',
                        fontWeight: 600,

                        backgroundColor: 'primary.dark',
                        borderColor: 'primary.main',
                        border: '1px solid',

                        "&.is-mobile": {
                            color: swbf2Theme.blueSoft,
                            boxShadow: '0 0 5px #3fd7ff',

                            // backgroundColor: darkTheme.light,
                            backgroundColor: 'primary.dark',
                        },

                        '&:hover': {
                            color: swbf2Theme.blueSoft,
                            boxShadow: '0 0 5px #3fd7ff',

                            // backgroundColor: darkTheme.light,
                            backgroundColor: 'primary.dark',
                        },


                    },
                },


            ],
        },

        MuiTypography: {
            styleOverrides: {
                root: {
                    fontFamily: 'Exo, Arial, sans-serif',
                    transition: 'all 0.3s ease',
                },
            },
            variants: [
                {
                    props: { variant: 'avatarText' },
                    style: {

                        width: '100%',
                        // color: 'primary.contrastText',

                        textAlign: 'center',
                        textTransform: 'uppercase',

                        overflowWrap: "break-word",
                        wordWrap: "break-word",
                        whiteSpace: "normal",
                    },
                },

                {
                    props: { variant: 'techChip' },
                    style: {

                        color: swbf2Theme.blueSoft,
                        backgroundColor: swbf2Theme.dark,

                        borderRadius: '8px',
                        padding: '2px 10px',
                        fontSize: '0.85rem',
                        fontWeight: 500,
                        letterSpacing: 0.2,
                    },
                },
            ],
        },

    },
});

export default theme;
