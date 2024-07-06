import React from 'react'
import { EXPERIENCES } from '../constants'

function Experience() {
    return (
        <div className='border-b border-purple-950 pb-24'>
            <h1 className='my-20 text-center text-4xl'>Experience</h1>
            <div className='lg:p-0 p-4'>
                {EXPERIENCES.map((experience,index)=>(
                    <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                        <div className='w-full lg:w-1/4'>
                        <p className='mb-2 text-sm text-neutral-400'>{experience.duration}</p>
                        </div>
                        <div className="w-full max-w-xl lg:w-3/4">
                        <h6 className="mb-2 font-semibold">{experience.role} - <span className='text-sm text-pink-300'>{experience.company}</span></h6>
                        <p className='mb-4 text-neutral-400'>{experience.description}</p>
                        {experience.technologies.map((tech,index)=>(
                            <span key={index} className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm text-pink-300 font-light'>{tech}</span>
                        ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Experience