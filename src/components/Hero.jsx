import React from 'react'
import { HERO_CONTENT } from '../constants'
import profilePic from '../assets/profile-pic.webp'


function Hero() {
    return (
        <div className='border-b border-purple-950 pb-4 lg:mb-36'>
            <div className="flex flex-wrap ">
                <div className='w-full lg:w-1/2'>
                    <div className='flex flex-col items-center lg:items-start ml-2 lg:ml-20'>
                        <h1 className='pb-16 text-5xl font-thin tracking-tight lg:mt-16 lg:text-8xl'>Avadhi Jain</h1>
                        <span className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent'>Front-end Developer</span>
                        <p className='my-2 max-w-xl py-6 font-light tracking-tighter'>{HERO_CONTENT}</p>
                    </div>
                </div>
                <div className='w-full lg:w-1/2 lg:p-20 flex justify-end items-center pl-6 pr-6'>
                    <img src={profilePic} alt="profile" className='h-auto max-h-full w-auto max-w-full lg:h-[400px] lg:w-auto' />
                </div>
            </div>
        </div>
    )
}

export default Hero
