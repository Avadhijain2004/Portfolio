import React from 'react'
import { PROJECTS } from '../constants'
import { motion } from "framer-motion"


function Projects() {

    return (
        <div className='border-b border-purple-950 pb-24'>
            <motion.h1 
            whileInView={{opacity:1,y:0}}
            initial={{opacity:0,y:-100}}
            transition={{duration:0.5}}
            className='my-20 text-center text-4xl'>Projects</motion.h1>
            <div className='lg:p-0 p-4'>
                {PROJECTS.map((project,index)=>(
                    <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                        <motion.div 
                        initial={{x:-100,opacity:0}}
                        whileInView={{x:0,opacity:1}}
                        transition={{duration:1}}
                        className='w-full lg:w-1/4'>
                        <img width={200} height={200} src={project.image} className='mb-6 rounded mt-4'/>
                        </motion.div>
                        <motion.div 
                        initial={{x:100,opacity:0}}
                        whileInView={{x:0,opacity:1}}
                        transition={{duration:1}}
                        className="w-full max-w-xl lg:w-3/4">
                        <h6 className="mb-2 font-semibold hover:text-purple-400 text-xl">
                        <a href={project.code} target='_blank'>{project.title}</a>    
                        </h6>
                        <p className='mb-4 text-neutral-400 '>{project.description}</p>
                        {project.technologies.map((tech,index)=>(
                            <span key={index} className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-0.5 text-sm text-pink-300 font-light'>{tech}</span>
                        ))}
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects

