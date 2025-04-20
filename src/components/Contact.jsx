import React from 'react'
import { CONTACT } from '../constants'
import { motion } from "framer-motion"

function Contact() {
    return (
        <div className='border-b border-purple-950 pb-24'>
            <motion.h1 
            whileInView={{opacity:1,y:0}}
            initial={{opacity:0,y:-100}}
            transition={{duration:0.5}}
            className='my-20 text-center text-4xl'>Contact Me</motion.h1>
            <div className="text-center tracking-tighter">
                <motion.p 
                initial={{x:-100,opacity:0}}
                whileInView={{x:0,opacity:1}}
                transition={{duration:1}}
                className="my-4">{CONTACT.address}</motion.p>

                <motion.p 
                initial={{x:100,opacity:0}}
                whileInView={{x:0,opacity:1}}
                transition={{duration:1}}
                className="my-4">{CONTACT.phoneNo}</motion.p>

                <a href="//avadhijain2004@gmail.com" className='border-b' target='_blank'>{CONTACT.email}</a>
            </div>
            <div>
                <p className='text-center m-4 mt-6'>Do you want your website like this? </p>
                
                <div className='flex items-center justify-center'>
                <a href="https://forms.gle/JK6hYxnkvPARJ9r29" target='_blank'>
                
                <button className='bg-purple-950 px-6 py-2 border border-gray-900 hover:bg-purple-800 rounded-xl m-5 hover:font-semibold shadow-md shadow-purple-500'>Fill this Form</button>
                </a>
                </div>
            </div>
        </div>
    )
}

export default Contact
