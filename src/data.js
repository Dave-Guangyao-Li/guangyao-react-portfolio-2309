import tour1 from './images/tour-1.jpeg';
import tour2 from './images/tour-2.jpeg';
import tour3 from './images/tour-3.jpeg';
import tour4 from './images/tour-4.jpeg';

import MSCIProject from './images/projects/MSCI-poster.png'

export const aboutInfo = [
  `My name is Guangyao Li. I'm a passionate front-end developer with expertise in Web development technologies like HTML, CSS, JavaScript, SQL, and React. I've successfully completed Web projects using frameworks such as NextJS, Django and Java SSM, showcasing my ability to deliver robust and dynamic applications.`,
  `In addition to my proficiency in front-end development, I have a strong foundation in Python programming and experience in data engineering tasks. I'm well-versed in Python's scientific computing libraries like Numpy, Pandas, Matplotlib, Seaborn, and Scikit-learn, enabling me to handle complex data analysis and visualization tasks effectively.`, `Currently, I'm dedicated to expanding my knowledge in full-stack development. My goal is to become a developer who excels not only in solid programming skills but also in analytical thinking, enabling me to create immersive and user-centric experiences.`, `If you're seeking a front-end developer who is committed to crafting seamless user interfaces, leveraging data insights, and keeping up with the latest technologies, I'd love to connect and explore how I can contribute to your team's success.`]

export const pageLinks = [
  { id: 1, href: '#home', text: 'home' },
  { id: 2, href: '#about', text: 'about' },
  { id: 3, href: '#resume', text: 'resume' },
  { id: 4, href: '#projects', text: 'projects' },
];
// export const socialLinks = [
//   { id: 1, href: 'https://www.twitter.com', icon: 'fab fa-facebook' },
//   { id: 2, href: 'https://www.twitter.com', icon: 'fab fa-twitter' },
//   { id: 3, href: 'https://www.twitter.com', icon: 'fab fa-squarespace' },
// ];
export const socialLinks = [
  { id: 1, href: 'https://www.linkedin.com/in/dave-guangyao-li/', icon: 'fab fa-linkedin', text: '' },
  { id: 2, href: 'https://github.com/Dave-Guangyao-Li', icon: 'fab fa-github', text: '' },
  { id: 3, href: 'https://twitter.com/Dave_GY_Li', icon: 'fab fa-twitter', text: '' },
  { id: 4, href: 'tel:+1 3417669659', icon: 'fas fa-phone', text: '' },
  { id: 5, href: 'mailto:dave_guangyao_li@outlook.com', icon: 'fas fa-envelope', text: '' },
];


export const services = [
  {
    id: 1,
    icon: 'fas fa-wallet fa-fw',
    title: 'saving money',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.',
  },
  {
    id: 2,
    icon: 'fas fa-tree fa-fw',
    title: 'endless hiking',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.',
  },
  {
    id: 3,
    icon: 'fas fa-socks fa-fw',
    title: 'amazing comfort',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.',
  },
];

export const tours = [
  {
    id: 1,
    image: tour1,
    date: 'august 26th, 2020',
    title: 'Tibet Adventure',
    info: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
    location: 'china',
    duration: 6,
    cost: 2100,
  },
  {
    id: 2,
    image: tour2,
    date: 'october 1th, 2020',
    title: 'best of java',
    info: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
    location: 'indonesia',
    duration: 11,
    cost: 1400,
  },
  {
    id: 3,
    image: tour3,
    date: 'september 15th, 2020',
    title: 'explore hong kong',
    info: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
    location: 'hong kong',
    duration: 8,
    cost: 5000,
  },
  {
    id: 4,
    image: tour4,
    date: 'december 5th, 2019',
    title: 'kenya highlights',
    info: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
    location: 'kenya',
    duration: 20,
    cost: 3300,
  },
];


export const projects = [
  {
    "id": 1,
    "image": "guangyao-react-portfolio-2309",
    "title": "React Responsive Portfolio Website",
    "info": [
      "Created a responsive portfolio website using React."
    ],
    "keywords": ["React", "Portfolio", "Responsive Design"],
    "link": "https://github.com/Dave-Guangyao-Li/guangyao-react-portfolio-2309"
  },
  {
    "id": 2,
    "image": "medical-coding-copilot",
    "title": "MediCode AI Copilot Chatbot",
    "info": [
      "Developed an AI copilot chatbot for medical coding."
    ],
    "keywords": ["Chatbot", "AI", "Medical Coding"],
    "link": "https://github.com/Dave-Guangyao-Li/medical-coding-copilot"
  },
  {
    "id": 3,
    "image": "Sentient",
    "title": "Sentient Financial Platform",
    "info": [
      "Built a financial platform called Sentient."
    ],
    "keywords": ["Financial", "Platform"],
    "link": "https://github.com/Dave-Guangyao-Li/Sentient"
  },
  {
    "id": 4,
    "image": "Hexagon-App",
    "title": "Hexagon Movies and TV Series Info",
    "info": [
      "Created Hexagon, an app for movies and TV series information."
    ],
    "keywords": ["Movies", "TV Series", "Information"],
    "link": "https://github.com/Dave-Guangyao-Li/Hexagon-App"
  },
  {
    "id": 5,
    "image": "React-task-manager-Dave-Guangyao-Li",
    "title": "React Task Manager App",
    "info": [
      "Developed a task manager app using React."
    ],
    "keywords": ["React", "Task Manager"],
    "link": "https://github.com/Dave-Guangyao-Li/React-task-manager-Dave-Guangyao-Li"
  },
  {
    "id": 6,
    "image": "movie-pitcher-openai",
    "title": "Movie Pitch Generator with ChatGPT and DALL-E",
    "info": [
      "Designed a movie pitch generator using ChatGPT and DALL-E."
    ],
    "keywords": ["Movie Pitch", "ChatGPT", "DALL-E"],
    "link": "https://github.com/Dave-Guangyao-Li/movie-pitcher-openai"
  },
  {
    "id": 7,
    "image": "simple-dalle-clone",
    "title": "DALL-E Clone Website",
    "info": [
      "Created a website that clones DALL-E."
    ],
    "keywords": ["DALL-E", "Website Clone"],
    "link": "https://github.com/Dave-Guangyao-Li/simple-dalle-clone"
  },
  {
    "id": 8,
    "image": "fine-tuned-GPT-chatbot",
    "title": "Fine-Tuned GPT Chatbot",
    "info": [
      "Developed a fine-tuned GPT chatbot."
    ],
    "keywords": ["GPT", "Chatbot"],
    "link": "https://github.com/Dave-Guangyao-Li/fine-tuned-GPT-chatbot"
  },
  {
    "id": 9,
    "image": "expense-tracker-nextjs-firebase-tailwind",
    "title": "NextJS Expense Tracker",
    "info": [
      "Built an expense tracker using NextJS and Firebase Firestore, styled with TailwindCSS."
    ],
    "keywords": ["NextJS", "Expense Tracker", "Firebase", "TailwindCSS"],
    "link": "https://github.com/Dave-Guangyao-Li/expense-tracker-nextjs-firebase-tailwind"
  },
  {
    "id": 10,
    "image": "car-sales-site-scrimba",
    "title": "Cars Sales Website",
    "info": [
      "Developed a car sales website."
    ],
    "keywords": ["Car Sales", "Website"],
    "link": "https://github.com/Dave-Guangyao-Li/car-sales-site-scrimba"
  },
  {
    "id": 11,
    "image": "data-analytics-dashboard",
    "title": "Analytics Dashboard",
    "info": [
      "Created an analytics dashboard."
    ],
    "keywords": ["Analytics", "Dashboard"],
    "link": "https://github.com/Dave-Guangyao-Li/data-analytics-dashboard"
  },
  {
    "id": 12,
    "image": "react-weather-app",
    "title": "React Weather Forecast",
    "info": [
      "Developed a weather forecast app using React."
    ],
    "keywords": ["React", "Weather Forecast"],
    "link": "https://github.com/Dave-Guangyao-Li/react-weather-app"
  },
  {
    "id": 13,
    "image": "GithubProfileCard",
    "title": "GitHub Profile Card",
    "info": [
      "Created a GitHub profile card."
    ],
    "keywords": ["GitHub", "Profile Card"],
    "link": "https://github.com/Dave-Guangyao-Li/GithubProfileCard"
  },
  {
    "id": 14,
    "image": MSCIProject,
    "title": "Enhancing MSCI’s Anomaly Detection Workflow by Integrating Machine Learning into Existing Financial Technology",
    "info": [
      "Anomaly Detection Workflow: Overhauled existing Anomalous Data Detection workflow. Improved overall precision by codebase profiling, incorporating new Data Cleaning methods and Machine Learning algorithms",
      "Customizable ETL Module: Implemented a modularized and cacheable Data Preparation and Loading process module with Python, reducing execution time by 35% and increasing execution stability by 20%",
      "Algorithm Evaluation Pipeline: Developed a solid Algorithms Analysis and Evaluation Pipeline, increasing detection accuracy by 25% with fewer false alerts and lowering the cost of inspecting suspicious data."
    ],
    "keywords": ["Data Analytics", "Python", "Data Engineering", "Machine Learning", "Statistics", "Javascript", "Numpy", "Pandas"],
    "link": "https://drive.google.com/file/d/1aetZ8dsqWVH2tCFoEgzm6eGKeuVxPJ7m/view?usp=sharing"
  },
  {
    "id": 15,
    "image": "The-Lagging-Effect-of-COVID-19-vaccines",
    "title": "The Lagging Effect of COVID-19 Vaccines on the Case-Fatality Rate in California",
    "info": [
      "Analyze the lagging effect of COVID-19 vaccines on the case-fatality rate in California."
    ],
    "keywords": ["COVID-19", "Vaccines", "California", "Analysis"],
    "link": "https://drive.google.com/file/d/10J5_n_VqubL8XDpM2HQ-ljo2LlrsDJdp/view?usp=sharing"
  },
  {
    "id": 16,
    "image": "Game-Prediction-for-Golden-State-Warriors",
    "title": "Game Prediction for the Golden State Warriors in the NBA Regular Season",
    "info": [
      "Predicted game outcomes for the Golden State Warriors in the NBA regular season."
    ],
    "keywords": ["NBA", "Golden State Warriors", "Game Prediction"],
    "link": "https://drive.google.com/file/d/1EGGuWsQZdI6PBZwJL-1pTGq43q-kf37K/view?usp=sharing"
  }
]
