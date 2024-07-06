import React from 'react'
import logo from '../assets/logo_aj.png'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'



function Navbar() {

    function handleIconClick(iconName) {
        if (iconName === 'LinkedIn') {
          window.open('//www.linkedin.com/in/avadhi-jain-659411223/', '_blank');
        } 
        if (iconName === 'GitHub') {
            window.open('//github.com/Avadhijain2004', '_blank');
        } 
      }

    return (
        <nav className='mb-5 flex items-center justify-between py-6'>
            <div className='flex flex-shrink-0 items-center w-20 h-10 ml-4 lg:ml-20'>
                <img src={logo} alt="logo" />
            </div>
            <div className='m-8 flex items-center justify-center gap-4 text-2xl mr-4 lg:mr-20'>
                <FaLinkedin onClick={() => handleIconClick('LinkedIn')}/>
                <FaGithub onClick={() => handleIconClick('GitHub')} />
            </div>
        </nav>
    )
}

export default Navbar
