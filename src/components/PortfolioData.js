import KB from '../Assets/Images/kanban-board.png';
import BT from '../Assets/Images/budget-tracker.png';
import Get from '../Assets/Images/get.gif';
// import PG from '../Assets/Images/password-generator.png';
import TPG from '../Assets/Images/team-profile-generator.png';
import Vpac from '../Assets/Images/vpac.png';
import WD from '../Assets/Images/weather-dashboard.png';
// import WDS from '../Assets/Images/work-day-scheduler.png';

const projects = [
    {
        name: 'Kanban-Board React App',
        description:
            'A Kanban-Board app for keeping track of things that need to get done. The Kanban-Board app provides a simple and clean interface for a functional and minimal task management application.',
        stack: ['JavaScript', 'React.js', 'Node.js', 'React-Beautifull-dnd'],
        role: 'Sole author',
        image: KB,
        livePreview: 'https://vimukthigunasekara.github.io/kanban-board/',
        sourceCode: 'https://github.com/VimukthiGunasekara/kanban-board',
    },
    {
        name: 'Budget Tracker Web App',
        description:
            'Budget tracking is essential for anyone who wants to manage their finances well. It helps you stay on top of your spending, so you can make sure you have enough money for all your needs.',
        stack: ['HTML-CSS-JavaScript', 'Foundation Framework', 'GoogleFonts', 'Font Awesome', 'AdviceSlip API', 'NBP Web API'],
        role: 'Front-end development',
        image: BT,
        livePreview: 'https://cdennis27.github.io/budgettrackergroup2/',
        sourceCode: 'https://github.com/cdennis27/budgettrackergroup2',
    },
    {
        name: 'E-Commerce Back End',
        description:
            'Developed a back-end for an e-commerce site. Using an Express.js API and a Sequelize database, configure the API so that it interacts with the database using Sequelize.',
        stack: ['Node.js', 'MySQL', 'ORM', 'Sequelize'],
        role: 'Sole author',
        image: Get,
        livePreview: 'https://github.com/VimukthiGunasekara/e-commerce-back-end',
        sourceCode: 'https://github.com/VimukthiGunasekara/e-commerce-back-end',
    },
    {
        name: 'Team Profile Generator',
        description:
            'Team profile generator is an online tool that helps you create a team profile to achieve your desired goals. This app generates a team profile using the Inquirer module from Node.js and displays the information on a newly created HTML page. This app focused on OOP and TDD using jest.',
        stack: ['HTML-CSS-JavaScript', 'Inquirer module', 'Node.js', 'jest-tests', 'TDD'],
        role: 'Sole author',
        image: TPG,
        livePreview: 'https://github.com/VimukthiGunasekara/team-profile-generator',
        sourceCode: 'https://github.com/VimukthiGunasekara/team-profile-generator',
    },
    {
        name: 'Weather Dashboard',
        description:
            'A weather dashboard application that displays current weather and 5-day forecast for a city.',
        stack: ['HTML-CSS-JavaScript', 'Open Weather Map API', 'GeoLocation API', 'Foundation Framework'],
        role: 'Sole author',
        image: WD,
        livePreview: 'https://vimukthigunasekara.github.io/weather-dashboard/',
        sourceCode: 'https://github.com/VimukthiGunasekara/weather-dashboard',
    },
    {
        name: 'VPAC Official Business Website',
        description:
            'AmliquVpac Corrugated (PVT) LTD is a solid company manufacturing quality corrugated boards and boxes for the direct and indirect exporters and local market in Sri Lanka over a decade.am',
        stack: ['WordPress', 'MySQL'],
        role: 'Sole author',
        image: Vpac,
        livePreview: 'https://vpac.lk/',
        sourceCode: 'https://vpac.lk/',
    }
]


export { projects }