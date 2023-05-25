import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser';
import '../components/Main.css'
import { motion } from 'framer-motion'
import { GetInfo } from '../Contexts/Context'


const Email = () => {
    const [isOpen, setIsOpen] = useState(false)
    const { getisOpenEmail } = GetInfo()
    getisOpenEmail(isOpen)


    const formm = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_17w7ymo', 'template_rtdt9qs', formm.current, 'BQ8cRAijla1d663h0')
            .then((result) => {
                console.log(result.text);
                e.target.reset()
                console.log('message sent!')

            }, (error) => {
                console.log(error.text);
            });
    };


    return (
        <div>
            <motion.div
                transition={{ layout: { duration: 1, type: "spring" } }}
                layout
                className='card border border-[#c0bebe] rounded-lg'
            >
                <motion.h2 onClick={() => { setIsOpen(!isOpen) }} layout="position" className={isOpen ? 'text-white font-semibold cursor-pointer underline' : 'text-white font-semibold cursor-pointer'}>Say Hello</motion.h2>
                {isOpen &&
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className='expand'>

                        <form ref={formm} onSubmit={sendEmail}>
                            <div className='mt-10'>
                                <div className='sm:flex sm:space-x-6'>
                                    <div className='input-container relative'>
                                        <input className='min-w-[220px]' type="text" name='user_name' placeholder='Enter your name' required/>
                                        <label className='absolute text-gray-300 text-xs left-0 top-[-20px]' htmlFor="name">Your Name</label>
                                    </div>
                                    <div className='input-container relative mt-12 sm:mt-0'>
                                        <input className='min-w-[220px]' type="text" name='user_email' placeholder='Enter your email address' required/>
                                        <label className='absolute text-gray-300 text-xs left-0 top-[-20px]' htmlFor="email">Email Address</label>
                                    </div>
                                </div>

                                <div className='input-container relative pt-14 sm:mt-0'>
                                    <input className='min-w-[220px]' type="text" name='message' placeholder='Enter your message' required/>
                                    <label className='absolute text-gray-300 text-xs left-0 top-[36px]' htmlFor="email">Your Message</label>
                                </div>
                                <div className='flex justify-center mt-5'>
                                    <input className='border border-[#c0bebe] rounded-lg py-2 px-4 hover:border-white duration-300' type="submit" value="Send" />
                                </div>
                            </div>
                        </form>

                    </motion.div>
                }
            </motion.div>
        </div>
    )
}

export default Email