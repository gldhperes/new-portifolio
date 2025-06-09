

// Unity/games removidos para gamesConfigs.js
import gpComputersImg from '../../assets/GP-Computers.png';
import escolaGPImg from '../../assets/EscolaGP.png';
import catalogadorImg from '../../assets/catalogador.png';
import programacaoImg from '../../assets/programacao.png';
import cssFXImg from '../../assets/cssFX.png';
import ytCloneImg from '../../assets/yt_clone.png';
import eventHorizonImg from '../../assets/event_horizon.png';
import modosGregosImg from '../../assets/modos_gregos.png';
import pokeRouletteImg from '../../assets/poke-roulette.png';

const projects = [
    {
        title: 'CSS-FX',
        description: 'Projeto MERN para armazenar códigos, usando MongoDB, Express, React e NodeJS.',
        image: cssFXImg,
        technologies: ['MongoDB', 'Express', 'React', 'NodeJS'],
        site: 'https://css-fx.netlify.app/',
        github: '',
    },
    {
        title: 'YouTube Clone',
        description: 'Clone do YouTube feito em React, usando TailwindCSS e Rapid API.',
        image: ytCloneImg,
        technologies: ['React', 'TailwindCSS', 'Javascript'],
        site: 'https://yut-clone.netlify.app/',
        github: '',
    },
    {
        title: 'Event Horizon',
        description: 'Site de astronomia feito com HTML, CSS e Javascript.',
        image: eventHorizonImg,
        technologies: ['HTML', 'CSS', 'Javascript'],
        site: 'https://gldhperes.github.io/event-horizon/',
        github: '',
    },
    {
        title: 'Modos Gregos',
        description: 'Seletor de Modos Gregos para auxiliar músicos.',
        image: modosGregosImg,
        technologies: ['HTML', 'CSS', 'Javascript'],
        site: 'https://gldhperes.github.io/modos-gregos/',
        github: '',
    },
    {
        title: 'Roleta Pokemon',
        description: 'Jogo de roletar o seu pokemon favorito, feito em React.',
        image: pokeRouletteImg,
        technologies: ['React', 'HTML', 'CSS', 'Javascript'],
        site: 'https://gldhperes.github.io/Pokemon-Roulette/',
        github: '',
    },
    {
        title: 'GP-Computers',
        description: 'Simples e-commerce de computadores usando Angular e Typescript.',
        image: gpComputersImg,
        technologies: ['Angular', 'HTML', 'CSS', 'Typescript'],
        site: 'https://gldhperes.github.io/GP-Computers/',
        github: '',
    },
    {
        title: 'Escola G/P',
        description: 'CRUD de notas de alunos em uma escola, feito com Angular.',
        image: escolaGPImg,
        technologies: ['Angular', 'HTML', 'CSS', 'Typescript'],
        site: 'https://gldhperes.github.io/Escola-GP/',
        github: '',
    },
    {
        title: 'Catalogador de Estratégias',
        description: 'App para listar estratégias de velas, feito em Python, QT Designer e PHP.',
        image: catalogadorImg,
        technologies: ['Python', 'QT Designer', 'PHP', 'MySQL'],
        site: 'https://gldhperes.github.io/catalogador-de-estrategias-IQoptions/',
        github: '',
    },
    {
        title: 'DevOps RabbitMQ Application',
        description: 'Deploy de 2 aplicações comunicando e escaláveis com Docker, Kubernetes, ArgoCD, GithubActions e RabbitMQ.',
        image: programacaoImg,
        technologies: ['Docker', 'Kubernetes', 'ArgoCD'],
        site: '',
        github: 'https://github.com/gldhperes/ms-app',
    },
];

export default projects;