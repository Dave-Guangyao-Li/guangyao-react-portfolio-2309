import { v4 as uuidv4 } from 'uuid';

import tour1 from './images/tour-1.jpeg';
import tour2 from './images/tour-2.jpeg';
import tour3 from './images/tour-3.jpeg';
import tour4 from './images/tour-4.jpeg';


// import all projects pics
import MSCIProject from './images/projects/MSCI-poster.png'
import guangyaoReactPortfolio from './images/projects/guangyao-react-portfolio.png'
import medicalCodingCopilot from './images/projects/mediCodeCopilot.png'
import sentient from "./images/projects/sentient-analysis-page.jpg"
import hexagonApp from "./images/projects/hexagon-app.png"
import ReactTaskManager from "./images/projects/react-task-manager.png"
import moviePitcherOpenAI from "./images/projects/movie-pitcher-openAI.png"
import DALLEClone from "./images/projects/Dall-E-clone.png"
import NextJSExpenseTracker from "./images/projects/NextJS Expense Tracker.png"
import fineTunedChatbot from "./images/projects/fineTunedChatbot.png"
import reactWeatherApp from "./images/projects/react-weather-app.png"
import GithubProfileCard from "./images/projects/github-profile-card.png"
import OnDemandMusicSearch from "./images/projects/music-on-demand-search.png"
import TuringChatBot from "./images/projects/turing-chatbot.png"
import LaggingEffectOfCovidVaccine from "./images/projects/lagging-effect-covid-vaccine.png"
import GamePredictionGSW from "./images/projects/game-prediction-GSW.png"
import CarSalesSite from "./images/projects/car-sales-site.png"
import DataAnalyticsDashboard from "./images/projects/data-analytics-dashboard.png"
import DrLambda from "./images/projects/DrLambda.png"

export const aboutInfo = [
  `My name is Guangyao Li. I'm a passionate front-end developer with expertise in Web development technologies like HTML, CSS, JavaScript, SQL, and React. I've successfully completed Web projects using frameworks such as NextJS, Django and Java SSM, showcasing my ability to deliver robust and dynamic applications.`,
  `In addition to my proficiency in front-end development, I have a strong foundation in Python programming and experience in data engineering tasks. I'm well-versed in Python's scientific computing libraries like Numpy, Pandas, Matplotlib, Seaborn, and Scikit-learn, enabling me to handle complex data analysis and visualization tasks effectively.`, `Currently, I'm dedicated to expanding my knowledge in full-stack development. My goal is to become a developer who excels not only in solid programming skills but also in analytical thinking, enabling me to create immersive and user-centric experiences.`, `If you're seeking a developer who is committed to crafting seamless user interfaces, leveraging data insights, and keeping up with the latest technologies, I'd love to connect and explore how I can contribute to your team's success.`]

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
    "id": uuidv4(),
    "image": DrLambda,
    "title": "DrLambda Platform",
    "info": [
      "Led front-end development for GenAI tool for transforming documents, images, and links into slides, videos, and social media posts.",
      "Implemented responsive card and list layouts, customizable themes, and a user-friendly chatbot to enhance content creation process.",
      "Focused on intuitive, user-centered design, driving positive feedback and increased platform engagement."
    ],
    "keywords": ["GenAI", "LLM", "React", "Next.JS", "CSS", "TypeScript", "Responsive Design", "Figma", "EdTech", "Startup"],
    "link": "https://drlambda.ai/"
  },
  {
    "id": uuidv4(),
    "image": medicalCodingCopilot,
    "title": "MediCode AI Copilot Chatbot",
    "info": [
      "Developed an AI copilot chatbot for medical coding.",
      "AI copilot for medical coders to minimize errors, maximize efficiency, and boost revenue of healthcare provider office. Helps the healthcare professional determine the most accurate and comprehensive set of codes, so the claim made to the payer is not denied and to boot revenue.",
      "Built with JavaScript, React, TailwindCSS, MaterialUI, integrated with GPT-4 chat completion API empowered with well-designed prompt."
    ],
    "keywords": ["React", "JavaScript", "TailwindCSS", "MaterialUI", "Chat-GPT", "OpenAI", "Chatbot", "AI", "MedicalTech", "Hackathon"],
    "link": "https://github.com/Dave-Guangyao-Li/medical-coding-copilot"
  },
  {
    "id": uuidv4(),
    "image": MSCIProject,
    "title": "Enhancing MSCI’s Anomaly Detection Workflow by Integrating Machine Learning into Existing Financial Technology",
    "info": [
      "Anomaly Detection Workflow: Overhauled existing Anomalous Data Detection workflow. Improved overall precision by codebase profiling, incorporating new Data Cleaning methods and Machine Learning algorithms",
      "Customizable ETL Module: Implemented a modularized and cacheable Data Preparation and Loading process module with Python, reducing execution time by 35% and increasing execution stability by 20%",
      "Algorithm Evaluation Pipeline: Developed a solid Algorithms Analysis and Evaluation Pipeline, increasing detection accuracy by 25% with fewer false alerts and lowering the cost of inspecting suspicious data."
    ],
    "keywords": ["Data Analytics", "Python", "Data Engineering", "Machine Learning", "Statistics", "Javascript", "Numpy", "Pandas", "MSCI", "FinTech"],
    "link": "https://drive.google.com/file/d/1aetZ8dsqWVH2tCFoEgzm6eGKeuVxPJ7m/view?usp=sharing"
  },

  {
    "id": uuidv4(),
    "image": guangyaoReactPortfolio,
    "title": "React Responsive Portfolio Website",
    "info": [
      "Created a portfolio website using React.",
      "Mobile-first and responsive design",
      "Implement pagination without third party library."
    ],
    "keywords": ["React", "HTML", "CSS", "JavaScript", "Responsive Design"],
    "link": "https://github.com/Dave-Guangyao-Li/guangyao-react-portfolio-2309"
  },

  {
    "id": uuidv4(),
    "image": sentient,
    "title": "Sentient - A Financial Report Analysis platform",
    "info": [
      "Led full-stack development of the Web application to present analysis results. Utilized CSS and JavaScript for interactive design of the analysis result page.", "Implemented backend routing and organized Web page templates using Python Flask.Integrated front-end and back-end data through HTTP requests.", "Outcome: Successfully scraped and parsed the 10 - K Financial Reports of publicly traded companies, applied natural language processing techniques for data cleaning and analysis, and presented the analysis results on web pages."
    ],
    "keywords": ["Finance", "JavaScript", "Full-Stack Development", "Flask", "Python", "RESTful WebServices"],
    "link": "https://github.com/Dave-Guangyao-Li/Sentient"
  },
  {
    "id": uuidv4(),
    "image": hexagonApp,
    "title": "Hexagon Movies and TV Series",
    "info": [
      "Led a 5-person team in designing and implementing a mobile-responsive web app using React JS and Material UI for movies and TV shows information search.", "Developed a convenient platform for movie and TV show enthusiasts to discover their favorite titles, including trending titles, browsing basic information, genre-based filtering, searching, and adding titles to a favorite list.", "Integrated The Movie Database (TMDB) API from the Movie Database Project to fetch relevant data for the app.", "Led the team in solving technical challenges and ensuring a seamless user experience. Successfully guided the team to deliver a high-quality app that received a high score during the final presentation."
    ],
    "keywords": ["React.js", "RESTful API", "JavaScript", "LocalStorage", "HTML", "CSS", "Material UI"],
    "link": "https://github.com/Dave-Guangyao-Li/Hexagon-App"
  },

  {
    "id": uuidv4(),
    "image": moviePitcherOpenAI,
    "title": "Movie Pitch Generator with ChatGPT and DALL-E",
    "info": [
      "Use OpenAI's textCompletion API and createImage API to generate movie pitch", "generate movie sysnopsis with user's input of one-sentence movie concept, along with a movie poster, movie title, and cast for characters.", "Customize model request arguments to get better results."
    ],
    "keywords": ["React", "ChatGPT", "DALL-E", "OpenAI", "AI", "JavaScript"],
    "link": "https://github.com/Dave-Guangyao-Li/movie-pitcher-openai"
  },
  {
    "id": uuidv4(),
    "image": ReactTaskManager,
    "title": "React Task Manager App",
    "info": [
      "Developed a task manager app using React. Persist data in the local storage", "Update, add new tasks, delete existing tasks and show finished task count"
    ],
    "keywords": ["React", "HTML", "CSS", "Task Manager", "localStorage"],
    "link": "https://github.com/Dave-Guangyao-Li/React-task-manager-Dave-Guangyao-Li"
  },
  {
    "id": uuidv4(),
    "image": DALLEClone,
    "title": "DALL-E Clone Website",
    "info": [
      "Created a website that can generate Text completion prompt with ChatGPT and create image according to text instruction with DALL-E API", " ave a serverless publicly available website that does not leak API key to the public."
    ],
    "keywords": ["DALL-E", "OpenAI", "ChatGPT", "AI", "JavaScript", "HTML", "CSS", "Serverless"
    ],
    "link": "https://github.com/Dave-Guangyao-Li/simple-dalle-clone"
  },
  {
    "id": uuidv4(),
    "image": fineTunedChatbot,
    "title": "Fine-Tuned GPT Chatbot",
    "info": [
      "Developed a fine-tuned chatbot targeting specific service of a company, integrated with OpenAI's ChatGPT", "Use customized dataset as knowledge database and fine-tune chatbot based on our data to avoid hallucinations"
    ],
    "keywords": ["ChatGPT", "Fine-tuning", "OpenAI", "AI", "Chatbot", "ReactJS", "JavaScript", "HTML", "CSS"],
    "link": "https://github.com/Dave-Guangyao-Li/fine-tuned-GPT-chatbot"
  },
  {
    "id": uuidv4(),
    "image": NextJSExpenseTracker,
    "title": "NextJS Expense Tracker",
    "info": [
      "Built an expense tracker using NextJS and Firebase Firestore, styled with TailwindCSS.",
      "Showing items total prices and can add, update, remove items from the expense tracker. All data would be stored in the firebase data store and dynamically retrieved"
    ],
    "keywords": ["NextJS", "Expense Tracker", "Firebase", "TailwindCSS", "JavaScript", "React", "Database"],
    "link": "https://github.com/Dave-Guangyao-Li/expense-tracker-nextjs-firebase-tailwind"
  },
  {
    "id": uuidv4(),
    "image": CarSalesSite,
    "title": "Cars Sales Website Design",
    "info": [
      "Developed a car sales website.",
      "From figma design to code. Followed mobile-first design. Responsive design that display well on bothe mobile and desktop devices"
    ],
    "keywords": ["Figma", "HTML", "CSS", "Responsive Design"],
    "link": "https://github.com/Dave-Guangyao-Li/car-sales-site-scrimba"
  },
  {
    "id": uuidv4(),
    "image": DataAnalyticsDashboard,
    "title": "Analytics Dashboard Design",
    "info": [
      "Created an analytics dashboard.",
      "From figma design to code. Followed mobile-first design. Responsive design that display well on bothe mobile and desktop devices"
    ],
    "keywords": ["Analytics", "Dashboard", "Figma", "HTML", "CSS", "Responsive Design"],
    "link": "https://github.com/Dave-Guangyao-Li/data-analytics-dashboard"
  },
  {
    "id": uuidv4(),
    "image": reactWeatherApp,
    "title": "React Weather Forecast",
    "info": [
      "Developed a weather forecast app using React.", "Three components: search bar for geographical location; today’s weather forecast component accordion panels (title + collapsible details) to show the weather forecast in the next 5 days when being clicked "
    ],
    "keywords": ["ReactJS", "API", "JavaScript", "HTML", "CSS"],
    "link": "https://github.com/Dave-Guangyao-Li/react-weather-app"
  },
  {
    "id": uuidv4(),
    "image": GithubProfileCard,
    "title": "GitHub Profile Card",
    "info": [
      "Vanilla JS project. Use github api to get users info and display it on card (Profile pic, username, repos, intro, followers, etc.)"
    ],
    "keywords": ["GitHub", "API", "JavaScript", "HTML", "CSS"],
    "link": "https://github.com/Dave-Guangyao-Li/GithubProfileCard"
  },
  {
    "id": uuidv4(),
    "image": LaggingEffectOfCovidVaccine,
    "title": "The Lagging Effect of COVID-19 Vaccines on the Case-Fatality Rate in California",
    "info": [
      "Utilized COVID-19 datasets to analyze the impact of vaccination on the case-fatality rate in California.",
      "Conducted feature engineering to determine the optimal lagging date window for vaccine data, identifying the strongest correlation with the fatality ratio.",
      "Developed accurate regression models using linear models and decision tree models, evaluating performance with metrics such as R2, MSE, and MAE.",
      "Provided valuable insights for government officials and healthcare providers, guiding informed decision- making and resource allocation.",
      "Emphasized the importance of considering regional differences and socio - economic conditions when applying the model to other global areas."
    ],
    "keywords": ["Python", "Data analysis", "Regression modeling", "Feature engineering", "Linear models", "Decision tree models", "Model Performance evaluation"],
    "link": "https://drive.google.com/file/d/10J5_n_VqubL8XDpM2HQ-ljo2LlrsDJdp/view?usp=sharing"
  },
  {
    "id": uuidv4(),
    "image": GamePredictionGSW,
    "title": "Game Prediction for the Golden State Warriors in the NBA Regular Season",
    "info": [
      "Predicted game outcomes for the Golden State Warriors in the NBA regular season.",
      "Conducted web scraping using Python to gather gaming data from the official NBA website.", "Preprocessed and cleaned the data, adding additional features for analysis.",
      "Utilized Numpy, Pandas, and Matplotlib for data analysis and visualization.",
      "Built machine learning models, including logistic regression and decision trees, to analyze and model NBA statistics.", "Presented insights derived from the analysis to demonstrate the application of data analytics in the NBA domain."
    ],
    "keywords": ["Web scraping", "Data preprocessing", "Data cleaning", "Python", "Numpy", "Pandas", "Matplotlib", "Machine learning", "Logistic regression", "Decision trees", "Data analysis", "Data visualization", "Game Prediction"],
    "link": "https://drive.google.com/file/d/1EGGuWsQZdI6PBZwJL-1pTGq43q-kf37K/view?usp=sharing"
  },
  {
    "id": uuidv4(),
    "image": TuringChatBot,
    "title": "Intelligent chatbot",
    "info": [
      "A intelligent chatbot web application with graphical interface. ", "Interact By calling speech-related API. Enabled user authentication and implemented UI using Python’s tkinter package.", "Used BaiduAI’s API for Speech Recognition and Synthesis to enable audio interaction with chatbot"
    ],
    "keywords": ["Python", "AI", "Speech Recognition", "API", "ChatBot"],
    "link": "https://github.com/Dave-Guangyao-Li/Turing_chatting_bot_System"
  },
  {
    "id": uuidv4(),
    "image": OnDemandMusicSearch,
    "title": "On-demand music search website",
    "info": [
      "A music website provides multiple features like songs collection, search, streaming and personalized recommendation.", "Music recommender system Developed with Python", "Django for back-end; MySQL for data persistent storage;  Collaborative Filtering Algorithm for songs recommendation."
    ],
    "keywords": ["Python", "SQL", "Django", "Collaborative Filtering", "Full-stack"],
    "link": "https://github.com/Dave-Guangyao-Li/music"
  }
]
