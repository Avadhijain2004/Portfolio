import React from 'react'
import { RiReactjsFill } from 'react-icons/ri'
import { RiHtml5Fill } from 'react-icons/ri'
import { FaGithub } from 'react-icons/fa'
import { RiTailwindCssFill } from 'react-icons/ri'
import { RiJavascriptLine } from 'react-icons/ri'
import { SiPython } from 'react-icons/si'
import { motion } from "framer-motion"
import { SiLangchain } from "react-icons/si";

import { FaAws } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";

const iconVariants =(duration) =>({
    initial:{y:-10},
    animate:{
        y:[10,-10],
        transition:{
            duration:duration,
            ease:"linear",
            repeat:Infinity,
            repeatType:"reverse",
        }
    }
})

function Technologies() {
    return (
        <div className='border-b border-purple-950 pb-24'>
            <motion.h1 
            whileInView={{opacity:1,y:0}}
            initial={{opacity:0,y:-100}}
            transition={{duration:1.5}}
            className='my-20 text-center text-4xl'>Technologies</motion.h1>
            <motion.div 
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:-100}}
            transition={{duration:1.5}}
            className='flex flex-wrap items-center justify-center gap-4'>

                <motion.div 
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
                className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <RiReactjsFill className='text-7xl text-cyan-400' title='React JS' />
                </motion.div>
                <motion.div 
                variants={iconVariants(3)}
                initial="initial"
                animate="animate"
                className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <RiNextjsFill className='text-7xl text-white bg-black' title='HTML5' />
                </motion.div>
                
                <motion.div 
                variants={iconVariants(5)}
                initial="initial"
                animate="animate"
                className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <RiTailwindCssFill className='text-7xl text-cyan-600' title='Tailwind CSS' />
                </motion.div>

                <motion.div 
                variants={iconVariants(2)}
                initial="initial"
                animate="animate"
                className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <RiJavascriptLine className='text-7xl text-yellow-400' title='JavaScript' />
                </motion.div>
                
                <motion.div 
                variants={iconVariants(6)}
                initial="initial"
                animate="animate"
                className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <div className="relative">
                        <SiPython className="text-blue-500 text-7xl" title='Python' />
                        <SiPython className="absolute top-0 text-yellow-500 text-7xl" style={{ clipPath: 'polygon(0 50%, 100% 50%, 100% 100%, 0% 100%)' }} />
                    </div>
                </motion.div>

                <motion.div 
                variants={iconVariants(4)}
                initial="initial"
                animate="animate"
                className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <FaGithub className='text-7xl text-white'  title='Github'/>
                </motion.div>
                <motion.div 
                variants={iconVariants(4)}
                initial="initial"
                animate="animate"
                className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiLangchain className='text-7xl text-white'  title='LangChain'/>
                </motion.div>
                <motion.div 
                variants={iconVariants(4)}
                initial="initial"
                animate="animate"
                className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <FaAws className='text-7xl text-white'  title='AWS'/>
                </motion.div>
                
            </motion.div>
        </div>
    )
}

export default Technologies
