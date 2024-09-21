import React from 'react'

import { AiOutlineInstagram, AiOutlineGithub, AiOutlineLinkedin, AiOutlineFacebook, AiOutlineTwitter } from 'react-icons/ai'
import '../components/Main.css'
import Email from './Email'
import { GetInfo } from '../Contexts/Context'


const Contact = () => {
    const { sidebarVal, isOpen } = GetInfo()

    return (
        <div id='getInTouch' className={sidebarVal ? 'h-[100vh] blur-sm duration-300 text-white relative' : 'h-[100vh] text-white relative'}>
            <div className={isOpen ? 'text-center mx-8 sm:mx-24 pt-8 md:pt-12 duration-500' : 'text-center mx-8 sm:mx-24 pt-32 duration-500'}>
                <h1 className='text-3xl font-semibold'>Would like to contact ?</h1>
                <p className='text-lg font-semibold text-gray-200 pt-6 lg:px-56 md:px-28px-12'>I’m currently looking for new opportunities, my inbox is always open.
                    Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>
            </div>

            <div className=' justify-center items-center flex mt-4'>
                <Email />
            </div>
            <div className='absolute bottom-4 left-[28%] sm:left-[35%] md:left-[40%]'>
                <div className='md:opacity-0 opacity-1 flex text-2xl space-x-6 justify-center pt-16 duration-500'>
                    <h1 className='opacity-[0.8] hover:opacity-[1] hover:pb-1 hover:shadow-xl duration-300'><AiOutlineInstagram /></h1>
                    <h1 className='opacity-[0.8] hover:opacity-[1] hover:shadow-xl duration-300'><AiOutlineGithub /></h1>
                    <h1 className='opacity-[0.8] hover:opacity-[1] hover:shadow-xl duration-300'><AiOutlineLinkedin /></h1>
                    <h1 className='opacity-[0.8] hover:opacity-[1] hover:shadow-xl duration-300'><AiOutlineFacebook /></h1>
                    <h1 className='opacity-[0.8] hover:opacity-[1] hover:shadow-xl duration-300'><AiOutlineTwitter /></h1>
                </div>
                <div className='flex justify-center pt-2'>
                    <h1 className='text-sm text-gray-300 font-mono font-semibold'>Built by Bekhruz Rakhmonov</h1>
                </div>
            </div>
        </div>
    )
}

export default Contact
