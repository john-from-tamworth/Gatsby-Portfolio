import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'John Hands | Dev Portfolio',
  lang: '',
  description: 'My portfolio website',
};

// HERO DATA
export const heroData = {
  title: "Hi, I'm ",
  name: 'John,',
  subtitle: 'A Web Developer based in the Midlands.',
  cta: 'Learn More',
};

// ABOUT DATA
export const aboutData = {
  img: 'cropped.png',
  paragraphOne: 'I have been an Insurance Fraud Investigator for 10 years.',
  paragraphTwo:
    "I know what you're thinking...what has that got to do with Web Development?  The answer is....more than you think.  You need an eye for details, an open mind, be a keen problem solver and enjoy constantlty learning to be a good investigator.  The same applies to be a good developer.  ",
  paragraphThree:
    'I have been in Web Dev since 2018 and I am confident in HTML, CSS, Javascript and JS framworks such as React.',
  resume: '',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'Covid-19 Dashboard.png',
    title: 'Covid-19 Dashboard',
    info:
      'This is a Covid 19 Tracker web app. Data is pulled from disease.sh and their API. Users can filter via Country from the dropdown menu at the top of the page. The app uses several libraries to render the data in Tables, Charts and a Map.  As a country is selected from the dropdown, their stats are displayed and the dashboard updates.',
    info2: '',
    url: 'https://master.d3dy8c8069b990.amplifyapp.com/',
    repo: 'https://github.com/john-from-tamworth/Covid-19-Tracker-App',
  },
  {
    id: nanoid(),
    img: 'Kanban Board.png',
    title: 'Kanban Board',
    info:
      'With my first experience with pair programming, we decided to make a Trello / Kanban board style app.  This is built in React, styled with Material UI and uses React beautiful dnd.',
    info2: '',
    url: 'https://master.d1xjf6c288fwed.amplifyapp.com/',
    repo: 'https://github.com/john-from-tamworth/Trello-Clone',
  },
  {
    id: nanoid(),
    img: 'youtube.png',
    title: 'Video Browser',
    info:
      'This is a simple Youtube clone that takes in user search terms, runs it through the Youtube API, returns and displays the results on screen',
    info2: '',
    url: 'https://master.dj459d2swuxx7.amplifyapp.com/',
    repo: 'https://github.com/john-from-tamworth/video-browser',
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Im always working on new projects, so please contact me for more information',
  btn: 'Email me',
  email: 'john.w.hands@gmail.com',
};

// FOOTER DATA
/* export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://codepen.io/john-from-tamworth',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/john-hands-6330461ba/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/john-from-tamworth',
    },
  ],
}; */

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
