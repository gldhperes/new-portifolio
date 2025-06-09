import desenvolvimentoImg from '../../assets/desenvolvimento.png';
import adaImg from '../../assets/ada.png';
import shopUIToolkitImg from '../../assets/shop_uitoolkit.png';
import kmeansImg from '../../assets/kmeans.png';
import buscaHeuristicaImg from '../../assets/Busca Heuristica.png';
import goGymImg from '../../assets/GoGym.png';
import gnomeBusterImg from '../../assets/GnomeBuster.png';

const games = [
  {
    title: 'Gnome Buster',
    description: 'Jogo de GameJam top-down view em que você deve identificar e capturar gnomos.',
    image: gnomeBusterImg,
    technologies: ['Unity', 'C#', 'UIToolkit'],
    site: 'https://gldhperes.itch.io/gnome-buster',
    github: '',
  },
  {
    title: 'Jogo Online 2D RPG Tycoon',
    description: 'Jogo online multiplayer 2D estilo Tycoon e RPG.',
    image: goGymImg,
    technologies: ['Unity', 'NodeJS', 'Prisma' , 'PostgreSQL'],
    site: '',
    github: '',
  },
  {
    title: 'A Dauntless Adventure',
    description: 'Jogo de Shot\'em Up feito em Unity e C#.',
    image: adaImg,
    technologies: ['Unity', 'C#'],
    site: 'https://gldhperes.itch.io/a-dauntless-adventure-v2',
    github: '',
  },
  {
    title: 'Shop UI Toolkit',
    description: 'Demonstração de uma tela de loja feita com UIToolkit no Unity.',
    image: shopUIToolkitImg,
    technologies: ['Unity', 'UIToolkit', 'C#'],
    site: 'https://gldhperes.itch.io/shop-ui-toolkit',
    github: '',
  },
  {
    title: 'K-Means',
    description: 'Algoritmo de IA K-Means implementado em Unity com C#.',
    image: kmeansImg,
    technologies: ['Unity', 'C#', 'IA'],
    site: '',
    github: 'https://github.com/gldhperes/k-means',
  },
  {
    title: 'Busca Heurística',
    description: 'Algoritmo de IA de busca heurística em Unity com C#.',
    image: buscaHeuristicaImg,
    technologies: ['Unity', 'C#', 'IA'],
    site: '',
    github: 'https://github.com/gldhperes/Busca-Heuristica',
  },
];

export default games;
