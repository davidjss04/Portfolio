const skillsList = [
    { title: 'React' },
    { title: 'Material UI' },
    { title: 'Redux' },
    { title: 'React-Router' },
    { title: 'Styled components' },
    { title: 'Express JS ' },
    { title: 'Firebase' },
    { title: 'Node JS ' },
    { title: 'MySQL' },
    { title: 'PostgreSQL' },
    { title: 'Sequelize' },
    { title: 'Figma' },
];
const projectList = [
    {
        id: 1,
        title: 'App Food',
        technologies: [
            'React JS',
            'Node JS',
            'MariaDB',
            'Express JS',
            'CSS Pure',
            'Sequelize',
        ],
        backgroundImage:
            'https://cdn.cbeditz.com/cbeditz/preview/black-red-gradient-background-wallpaper-74-11614352798fbqrv1wpuv.jpg',
        frontImage: 'appfood',
        links: {
            github: 'https://github.com/davidjss04/PI_Food',
        },
    },
    {
        id: 2,
        title: 'Game Script',
        technologies: [
            'React JS',
            'Node JS',
            'PostgreSQL',
            'Express JS',
            'CSS Pure',
            'Sequelize',
            'Firebase',
            'Material UI',
        ],
        backgroundImage:
            'https://img.freepik.com/free-vector/dark-gradient-background-with-copy-space_53876-99548.jpg?size=626&ext=jpg&ga=GA1.2.2102900112.1628985600',
        frontImage: 'gamescript',
        links: {
            github: 'https://github.com/LeandroLagreca/proyecto-final',
            url: 'https://game-script.vercel.app/',
        },
    },
    {
        id: 3,
        title: 'Portfolio',
        technologies: ['React JS', 'Node JS', 'Material UI', 'React-Router'],
        backgroundImage:
            'https://media.istockphoto.com/vectors/abstract-purple-vector-background-with-stripes-vector-id972475894?k=6&m=972475894&s=612x612&w=0&h=99AirGMOb64N2-1ZSMYRjEBp2USrAdzXUGzQMh5o6Js=',
        frontImage: 'portfolio',
        links: {
            github: 'https://github.com/davidjss04/web_portfolio',
            url: 'https://davidjss.com',
        },
    },
];

const experienceList = [
    {
        id: 0,
        company: 'Henry',
        links: {
            instagram: 'https://www.instagram.com/soyhenry_ok/',
            facebook: 'https://www.facebook.com/soyhenryok',
            website: 'https://www.soyhenry.com/',
        },
    },
    {
        id: 1,
        company: 'M.P.T',
        links: {
            website: 'https://www.gob.pe/munitambopata',
            facebook: 'https://www.facebook.com/profile.php?id=100067182301571',
        },
    },
    {
        id: 2,
        company: 'Babas.devel',
        links: {
            website: 'https://facturadorbabas.com/facturacion/login',
            facebook: 'https://www.facebook.com/Babas.devel',
        },
    },
];

export { skillsList, projectList, experienceList };
