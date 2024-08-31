import project1 from '../assets/projects/project-1.png'
import project2 from '../assets/projects/project-2.png'
import project3 from '../assets/projects/project-3.png'
import project4 from '../assets/projects/project-4.png'
import project5 from '../assets/projects/project-5.png'

export const HERO_CONTENT = `Dedicated and Passionate Computer Science student and a Front-end Developer with a strong foundation in software development and web technologies. Skilled
 in C, C++, Python, HTML, CSS, JavaScript, and ReactJS. Seeking opportunities to leverage my skills and knowledge in a dynamic
 team environment`;

export const EXPERIENCES = [
  {
    duration: "01/01/2024 - 01/02/2024",
    role: "Python Developer",
    company: "CodSoft",
    description: ` Developed various Python-based projects including a contact book app, password generator app, and to-do list app and achieved Best Intern of the Month at CodSoft by optimizing code for a key project, reducing runtime by 20% and improving user satisfaction scores by 15%`,
    technologies: ["Python", "Streamlit"],
  },
];

export const PROJECTS = [
  {
    title: "Medicare (An Online Doctors Clinic)",
    image: project5,
    description:
      "Developed the frontend of an online doctor's clinic using ReactJS, with integrated payment gateway, as part of a MERN stack project. ",
    technologies: ["React Js","Node Js","Mongo DB", "Express Js", "Tailwind CSS", "Javascript", "Stripe"],
    code: "https://github.com/Naman-Mishra-3116/industrialTraining",
  },
  {
    title: "Tweet Craft (A Dynamic Tweet App)",
    image: project4,
    description:
      "A dynamic tweet app where you can create, update or delete your tweets and can read tweets of others also.",
    technologies: ["HTML", "Bootstrap CSS", "Django", "Javascript"],
    code: "https://github.com/Avadhijain2004/Tweet-app-Django",
  },
  {
    title: "KnowMeds (A Medicine Recommendation System)",
    image: project1,
    description:
      "A system to provide users with medicine descriptions and alternate recommendations.",
    technologies: ["HTML", "CSS", "Python", "ML", "Streamlit"],
    code: "https://github.com/Avadhijain2004/medicine_recommender_system",
  },
  {
    title: "ShabdKosh (A Dictionary App)",
    image: project2,
    description:
      "A user-friendly application designed to provide quick and accurate definitions for any word you search. With a sleek interface and intuitive navigation, this app ensures that finding word meanings is a seamless experience. Built using HTML, CSS, and JavaScript, it combines modern web technologies to deliver a responsive and interactive dictionary tool for users of all ages",
    technologies: ["HTML", "CSS", "Javascript"],
    code: "https://github.com/Avadhijain2004/Dictionary-app",
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React JS","HTML", "CSS", "Javascript"],
    code: "https://github.com/Avadhijain2004/Portfolio",
  },
];

export const CONTACT = {
  address: "Indore, Madhya Pradesh",
  phoneNo: "+91 70006-19650",
  email: "avadhijain2004@gmail.com",
};