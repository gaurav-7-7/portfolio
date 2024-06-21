import resume from '../assets/gaurav_singh_resume.pdf';
import resumeImg from '../assets/resume_gaurav_singh.jpg'
import jsonPlayground from '../assets/json-playground.png';
import pokemonfinder from '../assets/pokemons.png'
import todoApp from '../assets/todo-app.png'



const config = {
    serviceId: 'service_kttihwm',
    templateId: 'template_5w91rji', 
    userId: 'Ow0pXWthtK1VeiCr-',
    resumeImg: resumeImg,
    projectAssest: {
        JSON: {
            jsonPlayground: jsonPlayground,
            liveLink:'https://json-playground.vercel.app/',
            repoLink:'https://github.com/gaurav-7-7/json-playground'
        },
        POKEDEX: {
            pokemonfinder: pokemonfinder,
            liveLink:'https://json-playground.vercel.app/',
            repoLink:'https://github.com/gaurav-7-7/json-playground'
        },
        TODO: {
            todoApp: todoApp,
            liveLink:'https://json-playground.vercel.app/',
            repoLink:'https://github.com/gaurav-7-7/json-playground'
        }
    },
    resume: resume
};
  
export default config;
