import React from 'react'
import CrptoCurrency from '../picss/CryptoCurrency.png'
import Dashboard from '../picss/Dashboard.png'
import JsonFormatter from '../picss/JsonFormatter.png'
import HelpToDev from '../picss/HelpToDev.png'
import '../components/Main.css'
import { GetInfo } from '../Contexts/Context'
import { AiOutlineGithub } from 'react-icons/ai'
import { FiExternalLink } from 'react-icons/fi'
import DynamicTable from '../picss/DynamicTable.png'
import Pizzeria from '../picss/Pizzeria.png'
import goFastPic from '../picss/goFastPic.png'

const Work = () => {
    const { sidebarVal } = GetInfo()



    return (
        <div id='recentWork' className={sidebarVal ? 'duration-300 blur-sm relative overflow-hidden bg-[#405855] text-white' : 'relative overflow-hidden bg-[#405855] text-white'}>


            <div className='flex px-5 sm:pl-12 md:pl-24 lg:pl-28 pt-8 sm:pt-16'>
                <h1 className='text-2xl md:text-3xl font-semibold lg:pl-4 md:pl-2'>Some Projects I've built</h1>
                <div className='h-[1px] bg-[#c0bebe] w-[25%] lg:w-[200px] mt-5 sm:ml-5 ml-4'></div>
            </div>

            <div className='hidden md:block'>
                {/* LAST ADDED */}
                <div className='flex px-24 lg:px-32 pb-12 pt-6 duration-500'>
                    <div className='flex relative shadow-xs mt-10 ml-4 lg:ml-0'>
                        <img alt='Project-Pic' src={goFastPic} className='projectImgLeft cursor-pointer mt-6 lg:mt-2 rounded-md w-[60%] blur-[1px] duration-500' />

                        <div class="absolute right-0 h-full bg-opacity-40 duration-500">
                            <div className='text-right'>
                                <h1 class="text-2xl font-semibold text-white cursor-pointer">goFast</h1>
                                <p class="projectCommentRight bg-gradient-to-r from-[#405855]  to-[#447771] p-4 my-4 rounded lg:w-[500px] md:w-[400px]">goFast is very similar project to Blablacar. But the project is built to run in Uzbekistan -'not in EU'-. It has many pages, sticky navbar, and different side menus</p>
                            </div>

                            <div>
                                {/* TECHNOLOGIES */}
                                <ul className='flex space-x-4 justify-end font-semibold'>
                                    <li>React</li>
                                    <li>Tailwindcss</li>
                                    <li>Javascript</li>
                                    <li>Css</li>
                                </ul>
                                {/* ICONS */}
                                <ul className='flex justify-end text-2xl space-x-5 pt-4'>
                                    <li><a target="_blank" rel="noreferrer" href='https://github.com/Umar7799/goFast' className='opacity-[0.8] hover:opacity-[1] duration-300 cursor-pointer'><AiOutlineGithub /></a></li>
                                    <li><a target="_blank" rel="noreferrer" href='https://gofastfirst.netlify.app/' className='opacity-[0.8] hover:opacity-[1] duration-300 cursor-pointer'><FiExternalLink /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex px-24 lg:px-32 pb-12 pt-6 duration-500'>
                    <div className='flex relative shadow-xs mt-10 ml-4 lg:ml-0'>
                        <img alt='Project-Pic' src={Pizzeria} className='projectImgLeft cursor-pointer mt-6 lg:mt-2 rounded-md w-[60%] blur-[1px] duration-500' />

                        <div class="absolute right-0 h-full bg-opacity-40 duration-500">
                            <div className='text-right'>
                                <h1 class="text-2xl font-semibold text-white cursor-pointer">Pizzeria</h1>
                                <p class="projectCommentRight bg-gradient-to-r from-[#405855]  to-[#447771] p-4 my-4 rounded lg:w-[500px] md:w-[400px]">A Beautiful website for Pizzerias. Hover animation, Easy navbar, Shining letters and so on. A wonderful things about this project is the -BESTSELLERS- part and its amazing hover effects and animations</p>
                            </div>

                            <div>
                                {/* TECHNOLOGIES */}
                                <ul className='flex space-x-4 justify-end font-semibold'>
                                    <li>React</li>
                                    <li>Tailwindcss</li>
                                    <li>Javascript</li>
                                    <li>Css</li>
                                </ul>
                                {/* ICONS */}
                                <ul className='flex justify-end text-2xl space-x-5 pt-4'>
                                    <li><a target="_blank" rel="noreferrer" href='https://github.com/Umar7799/Pizzeria.git' className='opacity-[0.8] hover:opacity-[1] duration-300 cursor-pointer'><AiOutlineGithub /></a></li>
                                    <li><a target="_blank" rel="noreferrer" href='https://random-pizzeria.netlify.app' className='opacity-[0.8] hover:opacity-[1] duration-300 cursor-pointer'><FiExternalLink /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex px-24 lg:px-32 lg:py-12 md:py-20 duration-500'>
                    <div className=' flex justify-end relative mt-10'>
                        <img alt='Project-Pic' src={DynamicTable} className='projectImgRight cursor-pointer mt-6 lg:mt-2 rounded-md w-[60%] blur-[1px] duration-500' />

                        <div class="absolute left-0 h-full bg-opacity-40 duration-500 ">
                            <div>
                                <h3 class="text-2xl font-semibold pl-2 py-2 cursor-pointer">Dynamic Table</h3>
                                <p class="projectCommentLeft  bg-gradient-to-r from-[#447771]  to-[#405855] shadow-lg p-4 my-4 rounded lg:w-[500px] md:w-[400px]">Dynamic table. Fetching data from google books api. Find your book with with searching by its name or author. And other books by the same author</p>
                            </div>
                            <div>
                                <ul className='flex space-x-4 break-words font-semibold pl-2'>
                                    <li>Javascript</li>
                                    <li>css</li>
                                    <li>React</li>
                                    <li>Tailwindcss</li>
                                </ul>
                                <ul className='flex text-2xl space-x-5 pl-2 pt-4 '>
                                    <li><a target="_blank" rel="noreferrer" href='https://github.com/Umar7799/dynamic-table' className='opacity-[0.8] hover:opacity-[1] duration-300 cursor-pointer'><AiOutlineGithub /></a></li>
                                    <li><a target="_blank" rel="noreferrer" href='https://dynamic-table-recruitment-task.netlify.app/' className='opacity-[0.8] hover:opacity-[1] duration-300 cursor-pointer'><FiExternalLink /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex px-24 lg:px-32 pb-12 pt-6 duration-500'>
                    <div className='flex relative shadow-xs mt-10 ml-4 lg:ml-0'>
                        <img alt='Project-Pic' src={CrptoCurrency} className='projectImgLeft cursor-pointer mt-6 lg:mt-2 rounded-md w-[60%] blur-[1px] duration-500' />
                        <div class="absolute right-0 h-full bg-opacity-40 duration-500">
                            <div className='text-right'>
                                <h1 class="text-2xl font-semibold text-white cursor-pointer">Crypto Currency</h1>
                                <p class="projectCommentRight bg-gradient-to-r from-[#405855]  to-[#447771] p-4 my-4 rounded lg:w-[500px] md:w-[400px]">Crypto currency react application. With in-depth data about all crypto currencies, crypto markets, exchanges and popular crypto currency news. Fetching data from api, responsive, dark and light modes</p>
                            </div>

                            <div>
                                <ul className='flex space-x-4 justify-end font-semibold'>
                                    <li>React</li>
                                    <li>Tailwindcss</li>
                                    <li>Javascript</li>
                                    <li>Css</li>
                                    <li>Firebase</li>
                                </ul>
                                <ul className='flex justify-end text-2xl space-x-5 pt-4'>
                                    <li><a target="_blank" rel="noreferrer" href='https://github.com/Umar7799/Crypto-currency.git' className='opacity-[0.8] hover:opacity-[1] duration-300 cursor-pointer'><AiOutlineGithub /></a></li>
                                    <li><a target="_blank" rel="noreferrer" href='https://legendary-sunflower-e62bae.netlify.app' className='opacity-[0.8] hover:opacity-[1] duration-300 cursor-pointer'><FiExternalLink /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex px-24 lg:px-32 lg:py-12 md:py-20 duration-500'>
                    <div className=' flex justify-end relative mt-10'>
                        <img alt='Project-Pic' src={HelpToDev} className='projectImgRight cursor-pointer mt-6 lg:mt-2 rounded-md w-[60%] blur-[1px] duration-500' />
                        <div class="absolute left-0 h-full bg-opacity-40 duration-500 ">
                            <div>
                                <h3 class="text-2xl font-semibold pl-2 py-2 cursor-pointer">HelpToDev</h3>
                                <p class="projectCommentLeft  bg-gradient-to-r from-[#447771]  to-[#405855] shadow-lg p-4 my-4 rounded lg:w-[500px] md:w-[400px]">helpToDev. To share software engineering problems and solutions. Software developing Community! Similar to Stackoverflow. Fully responsive and customizable</p>
                            </div>

                            <div>
                                <ul className='flex space-x-4 font-semibold pl-2'>
                                    <li>Javascript</li>
                                    <li>css</li>
                                    <li>React</li>
                                    <li>Tailwindcss</li>
                                </ul>
                                <ul className='flex text-2xl space-x-5 pl-2 pt-4 '>
                                    <li><a target="_blank" rel="noreferrer" href='https://github.com/Umar7799/help-to-dev.git' className='opacity-[0.8] hover:opacity-[1] duration-300 cursor-pointer'><AiOutlineGithub /></a></li>
                                    <li><a target="_blank" rel="noreferrer" href='https://peppy-smakager-545db1.netlify.app' className='opacity-[0.8] hover:opacity-[1] duration-300 cursor-pointer'><FiExternalLink /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex px-24 lg:px-32 pb-12 pt-6 duration-500'>
                    <div className='flex relative shadow-xs mt-10 ml-4 lg:ml-0'>
                        <img alt='Project-Pic' src={JsonFormatter} className='projectImgLeft cursor-pointer mt-6 lg:mt-2 rounded-md w-[60%] blur-[1px] duration-500' />

                        <div class="absolute right-0 h-full bg-opacity-40 duration-500 ">
                            <div className='text-right'>
                                <h1 class="text-2xl font-semibold text-white cursor-pointer">JSON Formatter</h1>
                                <p class="projectCommentRight bg-gradient-to-r from-[#405855]  to-[#447771] p-4 my-4 rounded lg:w-[500px] md:w-[400px]">Simple JSON Formatter application. Formatting to JSON and minifying version of that JSON</p>
                            </div>

                            <div>
                                <ul className='flex space-x-4 justify-end font-semibold'>
                                    <li>Html</li>
                                    <li>Css</li>
                                    <li>Javascript</li>
                                </ul>
                                <ul className='flex justify-end text-2xl space-x-5 pt-4'>
                                    <li><a target="_blank" rel="noreferrer" href='https://github.com/Umar7799/JSON-formatter.git' className='opacity-[0.8] hover:opacity-[1] cursor-pointer duration-300'><AiOutlineGithub /></a></li>
                                    <li><a target="_blank" rel="noreferrer" href='https://json-formatter-9fx.pages.dev/' className='opacity-[0.8] hover:opacity-[1] duration-300 cursor-pointer'><FiExternalLink /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex px-24 lg:px-32 lg:py-12 md:py-24 duration-500'>
                    <div className=' flex justify-end relative mt-10'>
                        <img alt='Project-Pic' src={Dashboard} className='projectImgRight cursor-pointer mt-6 lg:mt-2 rounded-md w-[60%] blur-[1px] duration-500' />

                        <div class="absolute left-0 h-full bg-opacity-40 duration-500 ">
                            <div>
                                <h3 class="text-2xl font-semibold pl-2 py-2 cursor-pointer">Dashboard</h3>
                                <p class="projectCommentLeft bg-gradient-to-r from-[#447771]  to-[#405855] shadow-lg p-4 my-4 rounded lg:w-[500px] md:w-[400px]">React admin dashboard application. Fully mobile responsive and customizable. Six of color themes, toggle between dark and light mode. One dashboard, three pages, four apps and seven fully functional charts</p>
                            </div>

                            <div>
                                <ul className='flex space-x-4 font-semibold pl-2'>
                                    <li>React</li>
                                    <li>Tailwindcss</li>
                                    <li>Javascript</li>
                                    <li>Css</li>
                                </ul>
                                <ul className='flex text-2xl space-x-5 pl-2 pt-4'>
                                    <li><a target="_blank" rel="noreferrer" href='https://github.com/Umar7799/Dashboard-app.git' className='opacity-[0.8] hover:opacity-[1] duration-300 cursor-pointer'><AiOutlineGithub /></a></li>
                                    <li><a target="_blank" rel="noreferrer" href='https://wonderful-marigold-a4fcc1.netlify.app' className='opacity-[0.8] hover:opacity-[1] duration-300 cursor-pointer'><FiExternalLink /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            {/* MEDIUM NI PASIDA */}
            <div className='md:hidden  bg-[#405855] duration-500 pb-20'>

                {/* LAST ADDED */}
                <div
                    style={{
                        backgroundImage: `url(${goFastPic}) `,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                    className='projects min-h-[350px] sm:h-auto relative flex font-semibold justify-center shadow-[#1a1d1d] shadow-xs border border-[#405855] rounded-md mx-12 mt-10 duration-300'>
                    <div class="absolute text-center px-4 py-2 h-full bg-[#282c2c] bg-opacity-30 backdrop-blur-[3px] rounded drop-shadow-lg  hover:bg-opacity-0 hover:backdrop-blur-[2.5px] duration-500">
                        <h1 class="text-2xl sm:px-5 pt-4 sm:pt-6 text-white font-bold cursor-pointer">goFast</h1>
                        <p class="pt-6">goFast is very similar project to Blablacar. But the project is built to run in Uzbekistan -'not in EU'-. It has many pages, sticky navbar, and different side menus</p>
                    </div>
                    <div className='absolute sm:bottom-5 bottom-6 sm:left-8 left-4'>
                        {/* TECHNOLOGIES */}
                        <ul className='pr-4 text-xs'>
                            <p>React &nbsp;Tailwindcss &nbsp;JavaScript &nbsp;Css</p>
                        </ul>
                        {/* ICONS */}
                        <ul className='flex text-2xl space-x-5 pr-8 pt-4'>
                            <li><a target="_blank" rel="noreferrer" href='https://github.com/Umar7799/goFast' className='opacity-[0.8] hover:opacity-[1] cursor-pointer duration-300'><AiOutlineGithub /></a></li>
                            <li><a target="_blank" rel="noreferrer" href='https://gofastfirst.netlify.app/' className='opacity-[0.8] hover:opacity-[1] cursor-pointer duration-300'><FiExternalLink /></a></li>
                        </ul>
                    </div>
                </div>

                <div
                    style={{
                        backgroundImage: `url(${Pizzeria}) `,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                    className='projects min-h-[350px] sm:h-auto relative flex font-semibold justify-center shadow-[#1a1d1d] shadow-xs border border-[#405855] rounded-md mx-12 mt-10 duration-300'>
                    {/* <img src={Pizzeria} alt='Image' className='rounded-md' /> */}
                    <div class="absolute text-center px-4 py-2 h-full bg-[#282c2c] bg-opacity-30 backdrop-blur-[3px] rounded drop-shadow-lg  hover:bg-opacity-0 hover:backdrop-blur-[2.5px] duration-500">
                        <h1 class="text-2xl sm:px-5 pt-4 sm:pt-6 text-white font-bold cursor-pointer">Pizzeria</h1>
                        <p class="pt-6">A Beautiful website for Pizzeria. Animation, Easy navbar, Shining letters and so on. A wonderful things about this project is amazing hover animations</p>
                    </div>
                    <div className='absolute sm:bottom-5 bottom-6 sm:left-8 left-4'>
                        {/* TECHNOLOGIES */}
                        <ul className='pr-4 text-xs'>
                            <p>React &nbsp;Tailwindcss &nbsp;JavaScript &nbsp;Css</p>
                        </ul>
                        {/* ICONS */}
                        <ul className='flex text-2xl space-x-5 pr-8 pt-4'>
                            <li><a target="_blank" rel="noreferrer" href='https://github.com/Umar7799/Pizzeria.git' className='opacity-[0.8] hover:opacity-[1] cursor-pointer duration-300'><AiOutlineGithub /></a></li>
                            <li><a target="_blank" rel="noreferrer" href='https://random-pizzeria.netlify.app' className='opacity-[0.8] hover:opacity-[1] cursor-pointer duration-300'><FiExternalLink /></a></li>
                        </ul>
                    </div>
                </div>


                <div
                    style={{
                        backgroundImage: `url(${DynamicTable}) `,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                    className='projects h-[350px] relative font-semibold flex justify-center shadow-[#1a1d1d] shadow-xs border border-[#405855] rounded-md mx-12 mt-10 duration-300 hover:text-black'>
                    <div class="absolute text-center overflow-hidden px-4 py-2 h-full bg-[#282c2c] bg-opacity-30 backdrop-blur-[3px] rounded drop-shadow-lg  hover:bg-opacity-0  hover:backdrop-blur-[2.5px] duration-500">
                        <h1 class="text-2xl sm:px-5 pt-4 sm:pt-6 break-keep font-bold cursor-pointer">Dynamic Table</h1>
                        <p class="px-5 pt-6">Dynamic table. Fetching data from google books api. Find your book with searching by its name or author. And other books by the same author.</p>
                    </div>
                    <div className='absolute sm:bottom-5 bottom-6 sm:left-8 left-4'>
                        <ul className='pr-4 text-xs'>
                            <p>JavaScript &nbsp;React &nbsp;Css Tailwindcss</p>
                        </ul>
                        <ul className='flex text-2xl space-x-5 pr-8 pt-4'>
                            <li><a href='https://github.com/Umar7799/dynamic-table' target="_blank" rel="noreferrer" className='opacity-[0.8] hover:opacity-[1] cursor-pointer duration-300'><AiOutlineGithub /></a></li>
                            <li><a href='https://dynamic-table-recruitment-task.netlify.app/' target="_blank" rel="noreferrer" className='opacity-[0.8] hover:opacity-[1] cursor-pointer duration-300'><FiExternalLink /></a></li>
                        </ul>
                    </div>
                </div>

                <div
                    style={{
                        backgroundImage: `url(${CrptoCurrency}) `,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                    className='projects h-[350px] relative flex font-semibold justify-center shadow-[#1a1d1d] shadow-xs border border-[#405855] rounded-md mx-12 mt-10 duration-300'>
                    <div class="absolute text-center px-4 py-2 h-full bg-[#282c2c] bg-opacity-30 backdrop-blur-[3px] rounded drop-shadow-lg  hover:bg-opacity-0 hover:backdrop-blur-[2.5px] duration-500">
                        <h1 class="text-2xl sm:px-5 pt-4 sm:pt-6 text-white font-bold cursor-pointer">Crypto Currency</h1>
                        <p class="pt-6">With in-depth data about all crypto currencies, crypto markets, exchanges and popular crypto currency news. Fetching data from api, responsive, dark and light modes</p>
                    </div>
                    <div className='absolute sm:bottom-5 bottom-6 sm:left-8 left-4'>
                        {/* TECHNOLOGIES */}
                        <ul className='pr-4 text-xs'>
                            <p>React &nbsp;Tailwindcss &nbsp;JavaScript &nbsp;Css Firebase</p>
                        </ul>
                        {/* ICONS */}
                        <ul className='flex text-2xl space-x-5 pr-8 pt-4'>
                            <li><a target="_blank" rel="noreferrer" href='https://github.com/Umar7799/Crypto-currency.git' className='opacity-[0.8] hover:opacity-[1] cursor-pointer duration-300'><AiOutlineGithub /></a></li>
                            <li><a target="_blank" rel="noreferrer" href='https://legendary-sunflower-e62bae.netlify.app/' className='opacity-[0.8] hover:opacity-[1] cursor-pointer duration-300'><FiExternalLink /></a></li>
                        </ul>
                    </div>
                </div>

                <div
                    style={{
                        backgroundImage: `url(${HelpToDev}) `,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                    className='projects h-[350px] relative flex font-semibold justify-center shadow-[#1a1d1d] shadow-xs border border-[#405855] rounded-md mx-12 mt-10 duration-300 hover:text-black'>
                    <div class="absolute text-center px-4 py-2 h-full bg-[#282c2c] bg-opacity-30 backdrop-blur-[3px] rounded drop-shadow-lg  hover:bg-opacity-0  hover:backdrop-blur-[2.5px] duration-500">
                        <h1 class="text-2xl sm:px-5 pt-4 sm:pt-6 font-bold cursor-pointer">HelpToDev</h1>
                        <p class="pt-6">helpToDev. To share software engineering problems and solutions. Software developing Community! Similar to Stackoverflow. Fully responsive and customizable</p>
                    </div>
                    <div className='absolute sm:bottom-5 bottom-6 sm:left-8 left-4'>
                        {/* TECHNOLOGIES */}
                        <ul className='pr-4 text-xs'>
                            <p>JavaScript &nbsp;css &nbsp;React Tailwindcss</p>
                        </ul>
                        {/* ICONS */}
                        <ul className='flex text-2xl space-x-5 pr-8 pt-4'>
                            <li><a target="_blank" rel="noreferrer" href='https://github.com/Umar7799/help-to-dev.git' className='opacity-[0.8] hover:opacity-[1] cursor-pointer duration-300'><AiOutlineGithub /></a></li>
                            <li><a target="_blank" rel="noreferrer" href='https://peppy-smakager-545db1.netlify.app' className='opacity-[0.8] hover:opacity-[1] cursor-pointer duration-300'><FiExternalLink /></a></li>
                        </ul>
                    </div>
                </div>

                <div
                    style={{
                        backgroundImage: `url(${JsonFormatter}) `,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',

                    }}
                    className='projects h-[350px] relative flex font-semibold justify-center shadow-[#1a1d1d] shadow-xs border border-[#405855] rounded-md mx-12 mt-10 duration-300'>
                    <div class=" text-center px-4 py-2 h-full bg-[#282c2c] bg-opacity-30 backdrop-blur-[3px] rounded drop-shadow-lg  hover:bg-opacity-0 hover:backdrop-blur-[2.5px] duration-500">
                        <h1 class="text-2xl sm:px-5 pt-4 sm:pt-6 text-white font-bold cursor-pointer">JSON Formatter</h1>
                        <p class="sm:px-5 pt-6">Simple JSON Formatter application. Formatting to JSON and minifying version of that JSON</p>
                    </div>
                    <div className='absolute sm:bottom-5 bottom-6 sm:left-8 left-4'>
                        {/* TECHNOLOGIES */}
                        <ul className='pr-4 text-xs'>
                            <p>React &nbsp;Tailwindcss &nbsp;JavaScript</p>
                        </ul>
                        {/* ICONS */}
                        <ul className='flex text-2xl space-x-5 pr-8 pt-4'>
                            <li><a target="_blank" rel="noreferrer" href='https://github.com/Umar7799/JSON-formatter.git' className='opacity-[0.8] hover:opacity-[1] cursor-pointer duration-300'><AiOutlineGithub /></a></li>
                            <li><a target="_blank" rel="noreferrer" href='https://json-formatter-9fx.pages.dev/' className='opacity-[0.8] hover:opacity-[1] cursor-pointer duration-300'><FiExternalLink /></a></li>
                        </ul>
                    </div>
                </div>

                <div
                    style={{
                        backgroundImage: `url(${Dashboard}) `,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                    className='projects h-[350px] relative font-semibold flex justify-center shadow-[#1a1d1d] shadow-xs border border-[#405855] rounded-md mx-12 mt-10 duration-300 hover:text-black'>
                    <div class="absolute text-center px-4 py-2 h-full bg-[#282c2c] bg-opacity-30 backdrop-blur-[3px] rounded drop-shadow-lg  hover:bg-opacity-0 hover:backdrop-blur-[2.5px] duration-500">
                        <h1 class="text-2xl sm:px-5 pt-4 sm:pt-6 font-bold cursor-pointer">Dashboard</h1>
                        <p class="pt-6">Admin dashboard application. Fully mobile responsive and customizable. Six of color themes, dark and light mode. One dashboard, three pages, four apps and seven fully functional charts</p>
                    </div>
                    <div className='absolute sm:bottom-5 bottom-6 sm:left-8 left-4'>
                        {/* TECHNOLOGIES */}
                        <ul className='pr-4 text-xs'>
                            <p>React &nbsp;Tailwindcss &nbsp;JavaScript Css</p>
                        </ul>
                        {/* ICONS */}
                        <ul className='flex text-2xl space-x-5 pr-8 pt-4'>
                            <li><a target="_blank" rel="noreferrer" href='https://github.com/Umar7799/Dashboard-app.git' className='opacity-[0.8] hover:opacity-[1] cursor-pointer duration-300'><AiOutlineGithub /></a></li>
                            <li><a target="_blank" rel="noreferrer" href='https://wonderful-marigold-a4fcc1.netlify.app' className='opacity-[0.8] hover:opacity-[1] cursor-pointer duration-300'><FiExternalLink /></a></li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Work