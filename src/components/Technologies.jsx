import React from 'react'
import { RiReactjsFill } from 'react-icons/ri'
import { RiHtml5Fill } from 'react-icons/ri'
import { FaGithub } from 'react-icons/fa'
import { RiTailwindCssFill } from 'react-icons/ri'
import { RiJavascriptLine } from 'react-icons/ri'
import { SiPython } from 'react-icons/si'


function Technologies() {
    return (
        <div className='border-b border-purple-950 pb-24'>
            <h1 className='my-20 text-center text-4xl'>Technologies</h1>
            <div className='flex flex-wrap items-center justify-center gap-4'>
                <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <RiReactjsFill className='text-7xl text-cyan-400' />
                </div>
                <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <RiHtml5Fill className='text-7xl text-white bg-orange-600' />
                </div>
                
                <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <RiTailwindCssFill className='text-7xl text-cyan-600' />
                </div>
                <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <RiJavascriptLine className='text-7xl text-yellow-400' />
                </div>
                
                <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <div className="relative">
                        <SiPython className="text-blue-500 text-7xl" />
                        <SiPython className="absolute top-0 text-yellow-500 text-7xl" style={{ clipPath: 'polygon(0 50%, 100% 50%, 100% 100%, 0% 100%)' }} />
                    </div>
                </div>
                <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <FaGithub className='text-7xl text-white' />
                </div>
            </div>
        </div>
    )
}

export default Technologies
