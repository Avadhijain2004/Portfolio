import project1 from '../assets/projects/project-1.png'
import project2 from '../assets/projects/project-2.png'
import project3 from '../assets/projects/project-3.png'
import project4 from '../assets/projects/project-4.png'
import project5 from '../assets/projects/project-5.png'
import project6 from '../assets/projects/project-6.png'

export const HERO_CONTENT = ` Final-year Computer Science with Business Systems student and TCS Digital intern with a strong foundation in Python, ReactJS, and Generative AI. Experienced in building full-stack web apps, AI chatbots, and automation tools with a focus on user experience and business impact. Passionate about leveraging AI and modern tech to drive innovative, scalable solutions.`;

export const EXPERIENCES = [
  {
    duration: "20/01/2025 - 30/04/2025",
    role: "AI Cloud Intern",
    company: "Tata Consultancy Services",
    description: `Completed web-based training in Agile, DevOps, Design Thinking, Digital AI, and AWS Cloud, with hands-on experience in modern development practices. Built a PDF parser using Python and an AI-powered chatbot using HuggingFace LLMs, LangChain, and RAG. Gained proficiency in Prompt Engineering, OpenAI APIs, and tools like Postman.`,
    technologies: ["Langchain", "Generative AI","HuggingFace LLMs"],
  },
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
    title: "AI powered Student Assistant",
    image: project6,
    description:
      "Class 12th Physics and Chemistry Student Assistant is a chatbot built using Botpress to help Class 12 students understand Physics and Chemistry concepts. Users can ask questions and get instant assistance through a simple chat interface.",
    technologies: ["Artificial Intelligence", "NLP", "RAG"],
    code: "https://cdn.botpress.cloud/webchat/v2.3/shareable.html?configUrl=https://files.bpcontent.cloud/2025/02/12/01/20250212015801-VTMBJSB3.json",
  },
  {
    title: "Medicare (An Online Doctors Clinic)",
    image: project5,
    description:
      "Developed the frontend of an online doctor's clinic using ReactJS, with integrated payment gateway, as part of a MERN stack project. ",
    technologies: ["MERN Stack", "Tailwind CSS", "Javascript", "Stripe"],
    code: "https://medicaredoctorsclinic.vercel.app/",
  },
  {
    title: "Tweet Craft",
    image: project4,
    description:
      "A dynamic tweet app where you can create, update or delete your tweets and can read tweets of others also.",
    technologies: ["HTML", "Bootstrap CSS", "Django", "Javascript"],
    code: "https://github.com/Avadhijain2004/Tweet-app-Django",
  },
  {
    title: "KnowMeds",
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
  
];

export const CONTACT = {
  address: "Indore, Madhya Pradesh",
  phoneNo: "+91 70006-19650",
  email: "avadhijain2004@gmail.com",
};