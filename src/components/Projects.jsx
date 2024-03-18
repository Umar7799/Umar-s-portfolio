import React, { useState } from 'react'
import '../components/Main.css'
import { GetInfo } from '../Contexts/Context'
import { AiOutlineGithub } from 'react-icons/ai'
import { FiExternalLink, FiFolder } from 'react-icons/fi'
import { motion } from 'framer-motion'


// IMAGES
import WheatherApp from '../picss/Wheather-App1.png'
import ExpenceTracker from '../picss/ExpenseTracker-App1.png'
import Levis from '../picss/levis.png'
import AnimatedSquares from '../picss/animatedSquares.png'
import MountainParallax from '../picss/mountainParallax.png'
import SigninSignUp from '../picss/signinSignup.png'
import RockPaperScissor from '../picss/rockPaperScissor.png'
import Profile from '../picss/profile.png'
import MoonLight from '../picss/moonLight.png'
import Clock from '../picss/clock.png'
import Starbucks from '../picss/starbucks.png'
import ToDoApp from '../picss/ToDo-App1.png'
import FlippingCard from '../picss/flippingCard.png'
import EasyGo from '../picss/easyGo.png'
import FoodMenuPro from '../picss/FoodMenuPro-App1.png'
import DreamClouds from '../picss/DreamClouds.png'
import Eat from '../picss/eat.png'
import Login from '../picss/login.png'
import FoodMenu from '../picss/FoodMenu-App1.png'
import DragAndDrop from '../picss/dragAndDrop.png'
import SignupForm from '../picss/signupForm.png'
import Championship from '../picss/Championship.png'






const Projects = () => {
    const { sidebarVal } = GetInfo()

    const [isOpen, setIsOpen] = useState(false)



    return (
        <div id='work' className={sidebarVal ? 'duration-300 blur-sm py-24' : 'py-24'}>

            <div className='text-white text-center pb-12'>
                <h1 className='text-3xl  font-mono font-semibold'>Other Projects</h1>
                <h1 className='text-lg font-semibold'>view the archive</h1>
            </div>

            <div className="grid text-center grid-cols-1  lg:grid-cols-3 sm:grid-cols-2 gap-3 gap-y-2 mx-14 sm:mx-12 md:mx-32">

                {/* LAST ADDED */}
                <div
                    style={{
                        backgroundImage: `url(${Championship}) `,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',

                    }}
                    class="relative projects rounded text-white my-2 hover:mt-0 hover:mb-4 duration-300">
                    <div className='rounded h-full w-full backdrop-blur-[3px] grid content-between'>
                        <div className='flex justify-between p-4'>
                            <h1 className='text-3xl cursor-pointer hover:text-4xl hover:mt-[-2px] duration-300'><FiFolder /></h1>
                            <div className='flex space-x-3 pt-1 text-2xl'>
                                <h1 target="_blank" rel="noreferrer" href='' className='cursor-pointer hover:text-3xl hover:mt-[-4px] duration-300'><AiOutlineGithub /></h1>
                                <a target="_blank" rel="noreferrer" href='https://championshipping.netlify.app/' className='cursor-pointer hover:text-3xl hover:mt-[-4px] duration-300'><FiExternalLink /></a>
                            </div>
                        </div>
                        <div className='pb-8 sm:pb-12 pt-2 transition-all duration-300'>
                            <h1 className='text-2xl font-semibold'>Championship App</h1>
                            <p className='font-semibold pt-2 px-6'>If you have multiple team or people to play a game you can simply random the teams or people like soccer football championship</p>
                        </div>
                        <ul className='techText pl-4 py-4 text-sm flex space-x-3 text-gray-200'>
                            <li>Javascript</li>
                            <li>bootstrap</li>
                            <li>css</li>
                        </ul>
                    </div>
                </div>
                {/* CARD 1 */}
                <div
                    style={{
                        backgroundImage: `url(${WheatherApp}) `,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',

                    }}
                    class="relative projects rounded text-white my-2 hover:mt-0 hover:mb-4 duration-300">
                    <div className='rounded h-full w-full backdrop-blur-[3px] grid content-between'>
                        <div className='flex justify-between p-4'>
                            <h1 className='text-3xl cursor-pointer hover:text-4xl hover:mt-[-2px] duration-300'><FiFolder /></h1>
                            <div className='flex space-x-3 pt-1 text-2xl'>
                                <a target="_blank" rel="noreferrer" href='https://github.com/Umar7799/Wheather-app.git' className='cursor-pointer hover:text-3xl hover:mt-[-4px] duration-300'><AiOutlineGithub /></a>
                                <a target="_blank" rel="noreferrer" href='https://dapper-madeleine-e57ef9.netlify.app' className='cursor-pointer hover:text-3xl hover:mt-[-4px] duration-300'><FiExternalLink /></a>
                            </div>
                        </div>
                        <div className='pb-8 sm:pb-12 pt-2 transition-all duration-300'>
                            <h1 className='text-2xl font-semibold'>Wheather App</h1>
                            <p className='font-semibold pt-2 px-6'>A simple wheather app. Showing wheather of cities around the world. Fetching data from server</p>
                        </div>
                        <ul className='techText pl-4 py-4 text-sm flex space-x-3 text-gray-200'>
                            <li>React</li>
                            <li>Javascript</li>
                            <li>css</li>
                        </ul>
                    </div>
                </div>

                {/* CARD 2 */}
                <div
                    style={{
                        backgroundImage: `url(${AnimatedSquares}) `,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',

                    }}
                    class="relative projects rounded text-white my-2 hover:mt-0 hover:mb-4 duration-300">
                    <div className='rounded h-full w-full backdrop-blur-[3px] grid content-between'>
                        <div className='flex justify-between p-4'>
                            <h1 className='text-3xl cursor-pointer hover:text-4xl hover:mt-[-2px] duration-300'><FiFolder /></h1>
                            <div className='flex space-x-3 pt-1 text-2xl'>
                                <a target="_blank" rel="noreferrer" href='https://github.com/Umar7799/Animating-cubes.git' className='cursor-pointer hover:text-3xl hover:mt-[-4px] duration-300'><AiOutlineGithub /></a>
                                <a target="_blank" rel="noreferrer" href='https://b0f3095d.animating-squares.pages.dev' className='cursor-pointer hover:text-3xl hover:mt-[-4px] duration-300'><FiExternalLink /></a>
                            </div>
                        </div>
                        <div className='pb-8 sm:pb-12 pt-2 transition-all duration-300'>
                            <h1 className='text-2xl font-semibold'>Animated Squares</h1>
                            <p className='font-semibold pt-2 px-6'>Animated Squares. Click any of them to make them show different animations</p>
                        </div>
                        <ul className='techText pl-4 py-4 text-sm flex space-x-3 text-gray-200'>
                            <li>html</li>
                            <li>css</li>
                            <li>Javascript</li>
                        </ul>
                    </div>
                </div>

                {/* CARD 3*/}
                <div
                    style={{
                        backgroundImage: `url(${Levis}) `,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',

                    }}
                    className="relative projects rounded my-2 hover:mt-0 text-white hover:mb-4 duration-300">
                    <div className='rounded h-full w-full backdrop-blur-[3px] grid content-between'>
                        <div className='flex justify-between p-4'>
                            <h1 className='text-3xl cursor-pointer hover:text-4xl hover:mt-[-2px] duration-300'><FiFolder /></h1>
                            <div className='flex space-x-3 pt-1 text-2xl'>
                                <a target="_blank" rel="noreferrer" href='https://github.com/Umar7799/levis-magazine.git' className='cursor-pointer hover:text-3xl hover:mt-[-4px] duration-300'><AiOutlineGithub /></a>
                                <a target="_blank" rel="noreferrer" href='https://6a932b94.levis-3x8.pages.dev' className='cursor-pointer hover:text-3xl hover:mt-[-4px] duration-300'><FiExternalLink /></a>
                            </div>
                        </div>
                        <div className='pb-8 sm:pb-12 pt-2 transition-all duration-300'>
                            <h1 className='text-2xl font-semibold'>Levi's T-shirt</h1>
                            <p className='font-semibold pt-2 px-6'>Levi's T-shirt web page. Fully responsive, animating elements with delay</p>
                        </div>
                        <ul className='techText pl-4 py-4 text-sm flex space-x-3 text-gray-200'>
                            <li>html</li>
                            <li>css</li>
                            <li>Javascript</li>
                            <li>gsap</li>
                        </ul>
                    </div>
                </div>

                {/* CARD 4 */}
                <div
                    style={{
                        backgroundImage: `url(${MountainParallax}) `,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',

                    }}
                    className="relative projects rounded text-white my-2 hover:mt-0 hover:mb-4 duration-300 lg:h-auto min-h-[270px]">
                    <div className='rounded h-full w-full backdrop-blur-[3px] grid content-between'>
                        <div className='flex justify-between p-4'>
                            <h1 className='text-3xl cursor-pointer hover:text-4xl hover:mt-[-2px] duration-300'><FiFolder /></h1>
                            <div className='flex space-x-3 pt-1 text-2xl'>
                                <a target="_blank" rel="noreferrer" href='https://github.com/Umar7799/Mountain-Parallax.git' className='cursor-pointer hover:text-3xl hover:mt-[-4px] duration-300'><AiOutlineGithub /></a>
                                <a target="_blank" rel="noreferrer" href='https://05f94261.mountain-parallax.pages.dev' className='cursor-pointer hover:text-3xl hover:mt-[-4px] duration-300'><FiExternalLink /></a>
                            </div>
                        </div>
                        <div className='pb-8 sm:pb-12 pt-2 transition-all duration-300'>
                            <h1 className='text-2xl font-semibold'>Mountain Parallax</h1>
                            <p className='font-semibold pt-2 px-6'>Mountain parallax effect. Simple moving elements on scroll</p>
                        </div>
                        <ul className='techText pl-4 py-4 text-sm flex space-x-3 text-gray-200'>
                            <li>html</li>
                            <li>css</li>
                            <li>Javascript</li>
                        </ul>
                    </div>
                </div>

                {/* CARD 5*/}
                <div
                    style={{
                        backgroundImage: `url(${ExpenceTracker}) `,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',

                    }}
                    className="relative projects rounded text-white my-2 hover:mt-0 hover:mb-4 duration-300 lg:h-auto min-h-[270px]">
                    <div className='rounded h-full w-full backdrop-blur-[3px] grid content-between'>
                        <div className='flex justify-between p-4'>
                            <h1 className='text-3xl cursor-pointer hover:text-4xl hover:mt-[-2px] duration-300'><FiFolder /></h1>
                            <div className='flex space-x-3 pt-1 text-2xl'>
                                <a target="_blank" rel="noreferrer" href='https://github.com/Umar7799/expence-tracker.git' className='cursor-pointer hover:text-3xl hover:mt-[-4px] duration-300'><AiOutlineGithub /></a>
                                <a target="_blank" rel="noreferrer" href='https://dashing-heliotrope-fbd5f5.netlify.app' className='cursor-pointer hover:text-3xl hover:mt-[-4px] duration-300'><FiExternalLink /></a>
                            </div>
                        </div>
                        <div className='pb-8 sm:pb-12 pt-2 transition-all duration-300'>
                            <h1 className='text-2xl font-semibold'>Expense Tracker</h1>
                            <p className='font-semibold pt-2 px-6'>Expence tracker application. Adding, removing, calculating and more</p>
                        </div>
                        <ul className='techText pl-4 py-4 text-sm flex space-x-3 text-gray-200'>
                            <li>React</li>
                            <li>Javascript</li>
                            <li>css</li>
                        </ul>
                    </div>
                </div>


            </div>
            <motion.div
                transition={{ layout: { duration: 0.6, type: "spring" } }}
                layout
            >
                <div className={!isOpen ? 'flex justify-center my-5' : 'hidden'}>
                    <motion.h2 onClick={() => { setIsOpen(!isOpen) }} layout="position" className='buttons text-white border border-[#c0bebe] py-3 px-5 rounded-md font-semibold'>Show more</motion.h2>
                </div>
                {isOpen &&
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}>

                        <div className="grid text-center grid-cols-1  lg:grid-cols-3 sm:grid-cols-2 gap-3 gap-y-2 mx-14 sm:mx-12 md:mx-32">
                            {/* UNDER THE "SHOW MORE" BUTTON */}


                            {/* CARD 6*/}
                            <div
                                style={{
                                    backgroundImage: `url(${SigninSignUp}) `,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',

                                }}
                                class="relative projects rounded text-white my-2 hover:mt-0 hover:mb-4 duration-300 lg:h-auto min-h-[270px]">
                                <div className='absolute rounded top-0 h-full w-full backdrop-blur-[3px]'>
                                    <div className='flex justify-between p-4'>
                                        <h1 className='text-3xl cursor-pointer hover:text-4xl hover:mt-[-2px] duration-300'><FiFolder /></h1>
                                        <div className='flex space-x-3 pt-1 text-2xl'>
                                            <a target="_blank" rel="noreferrer" href='https://github.com/Umar7799/Signin-SignUp.git' className='cursor-pointer hover:text-3xl hover:mt-[-4px] duration-300'><AiOutlineGithub /></a>
                                            <a target="_blank" rel="noreferrer" href='https://0b604fe0.signin-signup.pages.dev' className='cursor-pointer hover:text-3xl hover:mt-[-4px] duration-300'><FiExternalLink /></a>
                                        </div>
                                    </div>
                                    <div className='pt-3 pb-4'>
                                        <h1 className='text-2xl font-semibold'>Sign in and Sign up</h1>
                                        <p className='font-semibold pt-2 px-6'>A Signing in and signing up page. Accurate form, moving blue element to get the another side of the page</p>
                                    </div>
                                    <div>
                                        <ul className='techText absolute bottom-4 left-2 pt-2 px-4 text-sm flex space-x-3 text-gray-200'>
                                            <li>html</li>
                                            <li>css</li>
                                            <li>Javascript</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* CARD 7*/}
                            <div
                                style={{
                                    backgroundImage: `url(${RockPaperScissor}) `,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',

                                }}
                                class="relative projects rounded my-2 hover:mt-0 hover:mb-4 duration-300 lg:h-auto min-h-[270px] text-white">
                                <div className='absolute rounded top-0 h-full w-full backdrop-blur-[3px]'>
                                    <div className='flex justify-between p-4'>
                                        <h1 className='text-3xl cursor-pointer hover:text-4xl hover:mt-[-2px] duration-300'><FiFolder /></h1>
                                        <div className='flex space-x-3 pt-1 text-2xl'>
                                            <a target="_blank" rel="noreferrer" href='https://github.com/Umar7799/Rock-Paper-Scissors.git' className='cursor-pointer hover:text-3xl hover:mt-[-4px] duration-300'><AiOutlineGithub /></a>
                                            <a target="_blank" rel="noreferrer" href='https://0d632f24.rockpaperscissor-1sh.pages.dev' className='cursor-pointer hover:text-3xl hover:mt-[-4px] duration-300'><FiExternalLink /></a>
                                        </div>
                                    </div>
                                    <div className='pt-3 pb-4 duration-500'>
                                        <h1 className='text-2xl font-semibold'>Rock Paper Scissor</h1>
                                        <p className='font-semibold pt-2 px-6'>Rock paper scissor game. Ispired by youtube tutorials</p>
                                    </div>
                                    <div>
                                        <ul className='techText absolute bottom-4 left-2 pt-2 px-4 text-sm flex space-x-3 text-gray-200'>
                                            <li>html</li>
                                            <li>css</li>
                                            <li>Javascript</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>



                            {/* CARD 8*/}
                            <div
                                style={{
                                    backgroundImage: `url(${Profile}) `,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',

                                }}
                                class="relative projects rounded text-white my-2 hover:mt-0 hover:mb-4 duration-300 lg:h-auto min-h-[270px]">
                                <div className='absolute rounded top-0 h-full w-full backdrop-blur-[3px]'>
                                    <div className='flex justify-between p-4'>
                                        <h1 className='text-3xl cursor-pointer hover:text-4xl hover:mt-[-2px] duration-300'><FiFolder /></h1>
                                        <div className='flex space-x-3 pt-1 text-2xl'>
                                            <a target="_blank" rel="noreferrer" href='https://github.com/Umar7799/Profile-Card.git' className='cursor-pointer hover:text-3xl hover:mt-[-4px] duration-300'><AiOutlineGithub /></a>
                                            <a target="_blank" rel="noreferrer" href='https://875f28e4.profile-page-b8u.pages.dev' className='cursor-pointer hover:text-3xl hover:mt-[-4px] duration-300'><FiExternalLink /></a>
                                        </div>
                                    </div>
                                    <div className='pt-3 pb-4'>
                                        <h1 className='text-2xl font-semibold'>Profile Page</h1>
                                        <p className='font-semibold pt-2 px-6'>A simple profile page. Showing profile elements in cool colors with a few hovering effects</p>
                                    </div>
                                    <div>
                                        <ul className='techText absolute bottom-4 left-2 pt-2 px-4 text-sm flex space-x-3 text-gray-200'>
                                            <li>html</li>
                                            <li>css</li>
                                            <li>Javascript</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>



                            {/* CARD 9*/}
                            <div
                                style={{
                                    backgroundImage: `url(${MoonLight}) `,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',

                                }}
                                class="relative projects  rounded my-2 hover:mt-0 hover:mb-4 duration-300 lg:h-auto min-h-[270px] text-white">
                                <div className='absolute rounded top-0 h-full w-full backdrop-blur-[3px]'>
                                    <div className='flex justify-between p-4'>
                                        <h1 className='text-3xl cursor-pointer hover:text-4xl hover:mt-[-2px] duration-300'><FiFolder /></h1>
                                        <div className='flex space-x-3 pt-1 text-2xl'>
                                            <a target="_blank" rel="noreferrer" href='https://github.com/Umar7799/Moon-and-Road.git' className='cursor-pointer hover:text-3xl hover:mt-[-4px] duration-300'><AiOutlineGithub /></a>
                                            <a target="_blank" rel="noreferrer" href='https://18ab74e7.moon-road.pages.dev' className='cursor-pointer hover:text-3xl hover:mt-[-4px] duration-300'><FiExternalLink /></a>
                                        </div>
                                    </div>
                                    <div className='pt-3 pb-4 duration-500'>
                                        <h1 className='text-2xl font-semibold'>Moon and Road</h1>
                                        <p className='font-semibold  pt-2 px-6'>Moon and Road moving page. Some of the elements move on scroll</p>
                                    </div>
                                    <div>
                                        <ul className='techText absolute bottom-4 left-2 pt-2 px-4 text-sm flex space-x-3 text-gray-200'>
                                            <li>html</li>
                                            <li>css</li>
                                            <li>Javascript</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>


                            {/* CARD 10 */}
                            <div
                                style={{
                                    backgroundImage: `url(${Clock}) `,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',

                                }}
                                class="relative projects  rounded my-2 hover:mt-0 hover:mb-4 duration-300 lg:h-auto min-h-[270px] text-white">
                                <div className='absolute rounded top-0 h-full w-full backdrop-blur-[3px]'>
                                    <div className='flex justify-between p-4'>
                                        <h1 className='text-3xl cursor-pointer hover:text-4xl hover:mt-[-2px] duration-300'><FiFolder /></h1>
                                        <div className='flex space-x-3 pt-1 text-2xl'>
                                            <a target="_blank" rel="noreferrer" href='https://github.com/Umar7799/Clock.git' className='cursor-pointer hover:text-3xl hover:mt-[-4px] duration-300'><AiOutlineGithub /></a>
                                            <a target="_blank" rel="noreferrer" href='https://8ba39a5a.clock-916.pages.dev' className='cursor-pointer hover:text-3xl hover:mt-[-4px] duration-300'><FiExternalLink /></a>
                                        </div>
                                    </div>
                                    <div className='pt-3 pb-4 duration-500'>
                                        <h1 className='text-2xl font-semibold'>Circle Clock</h1>
                                        <p className='font-semibold  pt-2 px-6'>A clock app. Showing time with good looking box-shadows</p>
                                    </div>
                                    <div>
                                        <ul className='techText absolute bottom-4 left-2 pt-2 px-4 text-sm flex space-x-3 text-gray-200'>
                                            <li>html</li>
                                            <li>css</li>
                                            <li>Javascript</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* CARD 11 */}
                            <div
                                style={{
                                    backgroundImage: `url(${Starbucks}) `,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',

                                }}
                                class="relative projects  rounded my-2 hover:mt-0 hover:mb-4 duration-300 lg:h-auto min-h-[270px] text-white">
                                <div className='absolute rounded top-0 h-full w-full backdrop-blur-[3px]'>
                                    <div className='flex justify-between p-4'>
                                        <h1 className='text-3xl cursor-pointer hover:text-4xl hover:mt-[-2px] duration-300'><FiFolder /></h1>
                                        <div className='flex space-x-3 pt-1 text-2xl'>
                                            <a target="_blank" rel="noreferrer" href='https://github.com/Umar7799/starbucks.git' className='cursor-pointer hover:text-3xl hover:mt-[-4px] duration-300'><AiOutlineGithub /></a>
                                            <a target="_blank" rel="noreferrer" href='https://starbucks-code-m4zu00d45-umarinakov.vercel.app/' className='cursor-pointer hover:text-3xl hover:mt-[-4px] duration-300'><FiExternalLink /></a>
                                        </div>
                                    </div>
                                    <div className='pt-3 pb-4 duration-500'>
                                        <h1 className='text-2xl font-semibold'>Starbucks Page</h1>
                                        <p className='font-semibold  pt-2 px-6'>A simple starbucks page. With 3 color to choose with clicking any of the drinks</p>
                                    </div>
                                    <div>
                                        <ul className='techText absolute bottom-4 left-2 pt-2 px-4 text-sm flex space-x-3 text-gray-200'>
                                            <li>html</li>
                                            <li>css</li>
                                            <li>Javascript</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* CARD 12 */}
                            <div
                                style={{
                                    backgroundImage: `url(${ToDoApp}) `,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',

                                }}
                                class="relative projects  rounded my-2 hover:mt-0 hover:mb-4 duration-300 lg:h-auto min-h-[270px] text-white">
                                <div className='absolute rounded top-0 h-full w-full backdrop-blur-[3px]'>
                                    <div className='flex justify-between p-4'>
                                        <h1 className='text-3xl cursor-pointer hover:text-4xl hover:mt-[-2px] duration-300'><FiFolder /></h1>
                                        <div className='flex space-x-3 pt-1 text-2xl'>
                                            <a target="_blank" rel="noreferrer" href='https://github.com/Umar7799/react-todo-app.git' className='cursor-pointer hover:text-3xl hover:mt-[-4px] duration-300'><AiOutlineGithub /></a>
                                            <a target="_blank" rel="noreferrer" href='https://incandescent-platypus-0b5f9e.netlify.app' className='cursor-pointer hover:text-3xl hover:mt-[-4px] duration-300'><FiExternalLink /></a>
                                        </div>
                                    </div>
                                    <div className='pt-3 pb-4 duration-500'>
                                        <h1 className='text-2xl font-semibold'>To-Do App</h1>
                                        <p className='font-semibold  pt-2 px-6'>A To-Do app. Adding new items, removing, marking done</p>
                                    </div>
                                    <div>
                                        <ul className='techText absolute bottom-4 left-2 pt-2 px-4 text-sm flex space-x-3 text-gray-200'>
                                            <li>React</li>
                                            <li>html</li>
                                            <li>css</li>
                                            <li>Javascript</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* CARD 13 */}
                            <div
                                style={{
                                    backgroundImage: `url(${FlippingCard}) `,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',

                                }}
                                class="relative projects rounded my-2 hover:mt-0 hover:mb-4 duration-300 lg:h-auto min-h-[270px] text-white">
                                <div className='absolute rounded top-0 h-full w-full backdrop-blur-[3px]'>
                                    <div className='flex justify-between p-4'>
                                        <h1 className='text-3xl cursor-pointer hover:text-4xl hover:mt-[-2px] duration-300'><FiFolder /></h1>
                                        <div className='flex space-x-3 pt-1 text-2xl'>
                                            <a target="_blank" rel="noreferrer" href='https://github.com/Umar7799/Flipping-Card.git' className='cursor-pointer hover:text-3xl hover:mt-[-4px] duration-300'><AiOutlineGithub /></a>
                                            <a target="_blank" rel="noreferrer" href='https://2ef68f44.flipping-card.pages.dev' className='cursor-pointer hover:text-3xl hover:mt-[-4px] duration-300'><FiExternalLink /></a>
                                        </div>
                                    </div>
                                    <div className='pt-3 pb-4 duration-500'>
                                        <h1 className='text-2xl font-semibold'>Flipping Card</h1>
                                        <p className='font-semibold  pt-2 px-6'>A flipping card on hover. Inspired by youtube tutorials</p>
                                    </div>
                                    <div>
                                        <ul className='techText absolute bottom-4 left-2 pt-2 px-4 text-sm flex space-x-3 text-gray-200'>
                                            <li>html</li>
                                            <li>css</li>
                                            <li>Javascript</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* CARD 14 */}
                            <div
                                style={{
                                    backgroundImage: `url(${EasyGo}) `,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',

                                }}
                                class="relative projects rounded my-2 hover:mt-0 hover:mb-4 duration-300 lg:h-auto min-h-[270px] text-white">
                                <div className='absolute rounded top-0 h-full w-full backdrop-blur-[3px]'>
                                    <div className='flex justify-between p-4'>
                                        <h1 className='text-3xl cursor-pointer hover:text-4xl hover:mt-[-2px] duration-300'><FiFolder /></h1>
                                        <div className='flex space-x-3 pt-1 text-2xl'>
                                            <a target="_blank" rel="noreferrer" href='https://github.com/Umar7799/easyGo.git' className='cursor-pointer hover:text-3xl hover:mt-[-4px] duration-300'><AiOutlineGithub /></a>
                                            <a target="_blank" rel="noreferrer" href='https://b76e44a1.easygo.pages.dev' className='cursor-pointer hover:text-3xl hover:mt-[-4px] duration-300'><FiExternalLink /></a>
                                        </div>
                                    </div>
                                    <div className='pt-3 pb-4 duration-500'>
                                        <h1 className='text-2xl font-semibold'>EasyGo App</h1>
                                        <p className='font-semibold  pt-2 px-6'>A simple EasyGo web page. Showing car commutes from cities to cities, intended to use in Uzbekistan, similar to blablacar in europe</p>
                                    </div>
                                    <div>
                                        <ul className='techText absolute bottom-4 left-2 pt-2 px-4 text-sm flex space-x-3 text-gray-200'>
                                            <li>html</li>
                                            <li>css</li>
                                            <li>Bootstrap</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* CARD 15 */}
                            <div
                                style={{
                                    backgroundImage: `url(${FoodMenuPro}) `,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',

                                }}
                                class="relative projects  rounded my-2 hover:mt-0 hover:mb-4 duration-300 lg:h-auto min-h-[270px] text-white">
                                <div className='absolute rounded top-0 h-full w-full backdrop-blur-[3px]'>
                                    <div className='flex justify-between p-4'>
                                        <h1 className='text-3xl cursor-pointer hover:text-4xl hover:mt-[-2px] duration-300'><FiFolder /></h1>
                                        <div className='flex space-x-3 pt-1 text-2xl'>
                                            <a target="_blank" rel="noreferrer" href='https://github.com/Umar7799/Food-menu2.git' className='cursor-pointer hover:text-3xl hover:mt-[-4px] duration-300'><AiOutlineGithub /></a>
                                            <a target="_blank" rel="noreferrer" href='https://luminous-pastelito-234ad8.netlify.app' className='cursor-pointer hover:text-3xl hover:mt-[-4px] duration-300'><FiExternalLink /></a>
                                        </div>
                                    </div>
                                    <div className='pt-3 pb-4 duration-500'>
                                        <h1 className='text-2xl font-semibold'>Food Menu App</h1>
                                        <p className='font-semibold  pt-2 px-6'>Food menu app. For the ones who struggles to choose what to eat ). Clicking button to choose random food</p>
                                    </div>
                                    <div>
                                        <ul className='techText absolute bottom-4 left-2 pt-2 px-4 text-sm flex space-x-3 text-gray-200'>
                                            <li>React</li>
                                            <li>html</li>
                                            <li>css</li>
                                            <li>Javascript</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* CARD 16 */}
                            <div
                                style={{
                                    backgroundImage: `url(${DreamClouds}) `,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',

                                }}
                                class="relative projects  rounded my-2 hover:mt-0 hover:mb-4 duration-300 lg:h-auto min-h-[270px] text-white">
                                <div className='absolute rounded top-0 h-full w-full backdrop-blur-[3px]'>
                                    <div className='flex justify-between p-4'>
                                        <h1 className='text-3xl cursor-pointer hover:text-4xl hover:mt-[-2px] duration-300'><FiFolder /></h1>
                                        <div className='flex space-x-3 pt-1 text-2xl'>
                                            <a target="_blank" rel="noreferrer" href='https://github.com/Umar7799/DreamClouds.git' className='cursor-pointer hover:text-3xl hover:mt-[-4px] duration-300'><AiOutlineGithub /></a>
                                            <a target="_blank" rel="noreferrer" href='https://5f3753a0.dream-clouds.pages.dev' className='cursor-pointer hover:text-3xl hover:mt-[-4px] duration-300'><FiExternalLink /></a>
                                        </div>
                                    </div>
                                    <div className='pt-3 pb-4 duration-500'>
                                        <h1 className='text-2xl font-semibold'>Dream Clouds</h1>
                                        <p className='font-semibold  pt-2 px-6'>Dream clouds page. moving clouds, moving text on scroll</p>
                                    </div>
                                    <div>
                                        <ul className='techText absolute bottom-4 left-2 pt-2 px-4 text-sm flex space-x-3 text-gray-200'>
                                            <li>html</li>
                                            <li>css</li>
                                            <li>Javascript</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* CARD 17 */}
                            <div
                                style={{
                                    backgroundImage: `url(${FoodMenu}) `,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',

                                }}
                                class="relative projects  rounded my-2 hover:mt-0 hover:mb-4 duration-300 lg:h-auto min-h-[270px] text-white">
                                <div className='absolute rounded top-0 h-full w-full backdrop-blur-[3px]'>
                                    <div className='flex justify-between p-4'>
                                        <h1 className='text-3xl cursor-pointer hover:text-4xl hover:mt-[-2px] duration-300'><FiFolder /></h1>
                                        <div className='flex space-x-3 pt-1 text-2xl'>
                                            <a target="_blank" rel="noreferrer" href='https://github.com/Umar7799/Food-Menu1.git' className='cursor-pointer hover:text-3xl hover:mt-[-4px] duration-300'><AiOutlineGithub /></a>
                                            <a target="_blank" rel="noreferrer" href='https://comforting-pegasus-806918.netlify.app' className='cursor-pointer hover:text-3xl hover:mt-[-4px] duration-300'><FiExternalLink /></a>
                                        </div>
                                    </div>
                                    <div className='pt-3 pb-4 duration-500'>
                                        <h1 className='text-2xl font-semibold'>Food Menu App</h1>
                                        <p className='font-semibold  pt-2 px-6'>Food menu app. For the ones who struggles to choose what to eat ). Clicking button to choose random food</p>
                                    </div>
                                    <div>
                                        <ul className='techText absolute bottom-4 left-2 pt-2 px-4 text-sm flex space-x-3 text-gray-200'>
                                            <li>React</li>
                                            <li>html</li>
                                            <li>css</li>
                                            <li>Javascript</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* CARD 18 */}
                            <div
                                style={{
                                    backgroundImage: `url(${Eat}) `,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',

                                }}
                                class="relative projects  rounded my-2 hover:mt-0 hover:mb-4 duration-300 lg:h-auto min-h-[270px] text-white">
                                <div className='absolute rounded top-0 h-full w-full backdrop-blur-[3px]'>
                                    <div className='flex justify-between p-4'>
                                        <h1 className='text-3xl cursor-pointer hover:text-4xl hover:mt-[-2px] duration-300'><FiFolder /></h1>
                                        <div className='flex space-x-3 pt-1 text-2xl'>
                                            <a target="_blank" rel="noreferrer" href='https://github.com/Umar7799/OrderToEat.git' className='cursor-pointer hover:text-3xl hover:mt-[-4px] duration-300'><AiOutlineGithub /></a>
                                            <a target="_blank" rel="noreferrer" href='https://b9992b48.eatit.pages.dev' className='cursor-pointer hover:text-3xl hover:mt-[-4px] duration-300'><FiExternalLink /></a>
                                        </div>
                                    </div>
                                    <div className='pt-3 pb-4 duration-500'>
                                        <h1 className='text-2xl font-semibold'>Order To Eat</h1>
                                        <p className='font-semibold  pt-2 px-6'>A simple Ordering food page. Little bit of css animation and flex system with cards</p>
                                    </div>
                                    <div>
                                        <ul className='techText absolute bottom-4 left-2 pt-2 px-4 text-sm flex space-x-3 text-gray-200'>
                                            <li>html</li>
                                            <li>css</li>
                                            <li>Javascript</li>
                                            <li>Bootstrap</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* CARD 19 */}
                            <div
                                style={{
                                    backgroundImage: `url(${Login}) `,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',

                                }}
                                class="relative projects  rounded my-2 hover:mt-0 hover:mb-4 duration-300 lg:h-auto min-h-[270px] text-white">
                                <div className='absolute rounded top-0 h-full w-full backdrop-blur-[3px]'>
                                    <div className='flex justify-between p-4'>
                                        <h1 className='text-3xl cursor-pointer hover:text-4xl hover:mt-[-2px] duration-300'><FiFolder /></h1>
                                        <div className='flex space-x-3 pt-1 text-2xl'>
                                            <a target="_blank" rel="noreferrer" href='https://github.com/Umar7799/Login-Page.git' className='cursor-pointer hover:text-3xl hover:mt-[-4px] duration-300'><AiOutlineGithub /></a>
                                            <a target="_blank" rel="noreferrer" href='https://95299b0e.login-8k2.pages.dev' className='cursor-pointer hover:text-3xl hover:mt-[-4px] duration-300'><FiExternalLink /></a>
                                        </div>
                                    </div>
                                    <div className='pt-3 pb-4 duration-500'>
                                        <h1 className='text-2xl font-semibold'>Login</h1>
                                        <p className='font-semibold  pt-2 px-6'>Login page. with icon and png image good looking green color, fully responsive</p>
                                    </div>
                                    <div>
                                        <ul className='techText absolute bottom-4 left-2 pt-2 px-4 text-sm flex space-x-3 text-gray-200'>
                                            <li>html</li>
                                            <li>css</li>
                                            <li>Javascript</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* CARD 20 */}
                            <div
                                style={{
                                    backgroundImage: `url(${DragAndDrop}) `,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',

                                }}
                                class="relative projects  rounded my-2 hover:mt-0 hover:mb-4 duration-300 lg:h-auto min-h-[270px] text-white">
                                <div className='absolute rounded top-0 h-full w-full backdrop-blur-[3px]'>
                                    <div className='flex justify-between p-4'>
                                        <h1 className='text-3xl cursor-pointer hover:text-4xl hover:mt-[-2px] duration-300'><FiFolder /></h1>
                                        <div className='flex space-x-3 pt-1 text-2xl'>
                                            <a target="_blank" rel="noreferrer" href='https://github.com/Umar7799/DragAndDrop.git' className='cursor-pointer hover:text-3xl hover:mt-[-4px] duration-300'><AiOutlineGithub /></a>
                                            <a target="_blank" rel="noreferrer" href='https://bddba257.drag-drop.pages.dev' className='cursor-pointer hover:text-3xl hover:mt-[-4px] duration-300'><FiExternalLink /></a>
                                        </div>
                                    </div>
                                    <div className='pt-3 pb-4 duration-500'>
                                        <h1 className='text-2xl font-semibold'>Drag and Drop App</h1>
                                        <p className='font-semibold  pt-2 px-6'>A simple drag and drop application</p>
                                    </div>
                                    <div>
                                        <ul className='techText absolute bottom-4 left-2 pt-2 px-4 text-sm flex space-x-3 text-gray-200'>
                                            <li>html</li>
                                            <li>css</li>
                                            <li>Javascript</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* CARD 21 */}
                            <div
                                style={{
                                    backgroundImage: `url(${SignupForm}) `,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',

                                }}
                                class="relative projects  rounded my-2 hover:mt-0 hover:mb-4 duration-300 lg:h-auto min-h-[270px] text-white">
                                <div className='absolute rounded top-0 h-full w-full backdrop-blur-[3px]'>
                                    <div className='flex justify-between p-4'>
                                        <h1 className='text-3xl cursor-pointer hover:text-4xl hover:mt-[-2px] duration-300'><FiFolder /></h1>
                                        <div className='flex space-x-3 pt-1 text-2xl'>
                                            <a target="_blank" rel="noreferrer" href='https://github.com/Umar7799/DragAndDrop.git' className='cursor-pointer hover:text-3xl hover:mt-[-4px] duration-300'><AiOutlineGithub /></a>
                                            <a target="_blank" rel="noreferrer" href='https://bddba257.drag-drop.pages.dev' className='cursor-pointer hover:text-3xl hover:mt-[-4px] duration-300'><FiExternalLink /></a>
                                        </div>
                                    </div>
                                    <div className='pt-3 pb-4 duration-500'>
                                        <h1 className='text-2xl font-semibold'>Sign up Form</h1>
                                        <p className='font-semibold  pt-2 px-6'>Sign up form step by step</p>
                                    </div>
                                    <div>
                                        <ul className='techText absolute bottom-4 left-2 pt-2 px-4 text-sm flex space-x-3 text-gray-200'>
                                            <li>html</li>
                                            <li>css</li>
                                            <li>Javascript</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </motion.div>
                }
            </motion.div>
            <div className='flex justify-center my-5'>
                <motion.h2 onClick={() => { setIsOpen(!isOpen) }} layout="position" className={isOpen ? 'buttons text-white border border-[#c0bebe] py-3 px-5 rounded-md font-semibold' : 'hidden'}>Show less</motion.h2>
            </div>



        </div>
    )
}

export default Projects