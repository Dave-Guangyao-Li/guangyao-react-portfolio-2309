import tour1 from './images/tour-1.jpeg';
import tour2 from './images/tour-2.jpeg';
import tour3 from './images/tour-3.jpeg';
import tour4 from './images/tour-4.jpeg';

import MSCIProject from './images/projects/MSCI-poster.png'

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
    id: 1,
    image: MSCIProject,
    title: 'Enhancing MSCI’s Anomaly Detection Workflow by Integrating Machine Learning into Existing Financial Technology',
    info: [`Anomaly Detection Workflow: Overhauled existing Anomalous Data Detection workflow.Improved overall precision by codebase profiling, incorporating new Data Cleaning methods and Machine Learning algorithms`, `Customizable ETL Module: Implemented a modularized and cacheable Data Preparation and Loading process module with Python, reducing execution time by 35% and increasing execution stability by 20%`, `Algorithm Evaluation Pipeline: Developed a solid Algorithms Analysis and Evaluation Pipeline, increasing detection zaccuracy by 25% with less false alerts and lowering the cost of inspecting suspicious data.`],
    keywords: ['html', 'javascript', 'css', 'html', 'javascript', 'css', 'html', 'javascript', 'css'],
    link: 'https://drive.google.com/file/d/1aetZ8dsqWVH2tCFoEgzm6eGKeuVxPJ7m/view?usp=sharing'
  },
  {
    id: 2,
    image: MSCIProject,
    title: 'Enhancing MSCI’s Anomaly Detection Workflow by Integrating Machine Learning into Existing Financial Technology',
    info: [`Anomaly Detection Workflow`],
    keywords: ['html', 'javascript'],
    link: 'https://drive.google.com/file/d/1aetZ8dsqWVH2tCFoEgzm6eGKeuVxPJ7m/view?usp=sharing'
  },
  {
    id: 3,
    image: MSCIProject,
    title: 'Enhancing MSCI’s Anomaly Detection Workflow by Integrating Machine Learning into Existing Financial Technology',
    info: [`Anomaly Detection Workflow: Overhauled existing Anomalous Data Detection workflow.Improved overall precision by codebase profiling, incorporating new Data Cleaning methods and Machine Learning algorithms`, `Customizable ETL Module: Implemented a modularized and cacheable Data Preparation and Loading process module with Python, reducing execution time by 35% and increasing execution stability by 20%`, `Algorithm Evaluation Pipeline: Developed a solid Algorithms Analysis and Evaluation Pipeline, increasing detection zaccuracy by 25% with less false alerts and lowering the cost of inspecting suspicious data.`],
    keywords: ['html', 'javascript', 'css', 'html', 'javascript', 'css', 'html', 'javascript', 'css'],
    link: 'https://drive.google.com/file/d/1aetZ8dsqWVH2tCFoEgzm6eGKeuVxPJ7m/view?usp=sharing'
  },
  {
    id: 4,
    image: MSCIProject,
    title: 'Enhancing MSCI’s Anomaly Detection Workflow by Integrating Machine Learning into Existing Financial Technology',
    info: [`Anomaly Detection Workflow: Overhauled existing Anomalous Data Detection workflow.Improved overall precision by codebase profiling, incorporating new Data Cleaning methods and Machine Learning algorithms`, `Customizable ETL Module: Implemented a modularized and cacheable Data Preparation and Loading process module with Python, reducing execution time by 35% and increasing execution stability by 20%`, `Algorithm Evaluation Pipeline: Developed a solid Algorithms Analysis and Evaluation Pipeline, increasing detection zaccuracy by 25% with less false alerts and lowering the cost of inspecting suspicious data.`],
    keywords: ['html', 'javascript', 'css', 'html', 'javascript', 'css', 'html', 'javascript', 'css'],
    link: 'https://drive.google.com/file/d/1aetZ8dsqWVH2tCFoEgzm6eGKeuVxPJ7m/view?usp=sharing'
  },
  {
    id: 5,
    image: MSCIProject,
    title: 'Enhancing MSCI’s Anomaly Detection Workflow by Integrating Machine Learning into Existing Financial Technology',
    info: [`Anomaly Detection Workflow: Overhauled existing Anomalous Data Detection workflow.Improved overall precision by codebase profiling, incorporating new Data Cleaning methods and Machine Learning algorithms`, `Customizable ETL Module: Implemented a modularized and cacheable Data Preparation and Loading process module with Python, reducing execution time by 35% and increasing execution stability by 20%`, `Algorithm Evaluation Pipeline: Developed a solid Algorithms Analysis and Evaluation Pipeline, increasing detection zaccuracy by 25% with less false alerts and lowering the cost of inspecting suspicious data.`],
    keywords: ['html', 'javascript', 'css', 'html', 'javascript', 'css', 'html', 'javascript', 'css'],
    link: 'https://drive.google.com/file/d/1aetZ8dsqWVH2tCFoEgzm6eGKeuVxPJ7m/view?usp=sharing'
  }
];