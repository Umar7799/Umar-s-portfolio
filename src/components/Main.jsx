import React from 'react'
import '../components/Main.css'
import { AiOutlineInstagram, AiOutlineGithub, AiOutlineLinkedin, AiOutlineFacebook, AiOutlineTwitter } from 'react-icons/ai'
import { Link } from 'react-scroll'
import { GetInfo } from '../Contexts/Context'


const Main = () => {
    const { sidebarVal } = GetInfo()

    const email = 'www.behruz00@mail.ru';
    const subject = '';
    const body = '';
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    return (
        <div id='main' className='pt-[75px] h-[100vh] text-white bg-[#405855]'>
            <div className='mx-6 h-[85vh]'>
                <div className={sidebarVal ? 'duration-500 blur-sm pl-10 sm:pl-18 md:pl-20 pr-20 pt-14' : 'duration-500 pl-4 md:pl-20 lg:pl-28 pr-15 md:pr-20 pt-12 md:pt-18 lg:pt-20'}>
                    <div className='text-[#fdfcfc]'>
                        <h1 className='tracking-widest md:text-[18px] font-mono font-semibold'>Hi, my name is</h1>
                        <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold pt-2'>Umar Rakhmonov.</h1>
                        <h1 className='text-3xl sm:text-4xl md:text-5xl font-semibold pt-2'>I design and build things for web.</h1>
                        <p className='tracking-widest leading-8 pt-3 text-[18px] md:text-[18px] font-mono font-semibold'>
                            I’m a software engineer specializing in building <br />
                            (and occasionally designing) exceptional digital experiences. <br />
                            Currently, I’m focused on new AI technologies.
                        </p>
                        <button className='buttons text-[#ffffff] tracking-widest text-[18px] font-mono font-semibold border border-[#c0bebe] rounded py-3 px-6 mt-6 hover:shadow-2xl duration-300'><Link to='getInTouch' smooth={true} offset={0} duration={800}>Get in Touch</Link></button>
                    </div>
                </div>
            </div>
            <div>
                {/* EMAIL */}
                <div className='vr hidden md:flex fixed h-[100vh] justify-between lg:right-12 right-8 bottom-0 z-50 duration-300'>
                    <div className='mr-[13px] h-[35%] w-[1px] rounded bg-[#c0bebe]'></div>
                    <a href={mailtoLink} className='tracking-widest my-8 text-sm font-semibold cursor-pointer opacity-[0.7] hover:opacity-[1] hover:shadow-xl duration-300'>www.behruz00@mail.ru</a>
                    <div className='mr-[13px] mb-0 h-[35%] w-[1px] rounded bg-[#c0bebe]'></div>
                </div>
                {/* SOCIAL MEDIA ICONS */}


                <div className='vr hidden md:flex text-[25px] fixed h-[100vh] justify-between lg:left-10 left-8 bottom-0 z-50 duration-300'>
                    <div className='mr-[13px] h-[30%] w-[1px] rounded bg-[#c0bebe]'></div>
                        <a target="_blank" rel="noreferrer" href='https://instagram.com/inakov_b?igshid=MzNlNGNkZWQ4Mg==' className='opacity-[0.8] hover:opacity-[1] hover:shadow-xl duration-300'><AiOutlineInstagram /></a>
                    <div className='flex'>
                        <a target="_blank" rel="noreferrer" href='https://github.com/Umar7799' className='opacity-[0.8] hover:opacity-[1] hover:shadow-xl duration-300'><AiOutlineGithub /></a>
                        {/* <div className='absolute left-[-50px] top-[10px] bg-[#c0bebe] w-[40px] h-[1px]'></div> */}
                    </div>
                    <div className='flex'>
                        <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/abdunosir-rakhmonov-3128a7240' className='opacity-[0.8] hover:opacity-[1] hover:shadow-xl duration-300'><AiOutlineLinkedin /></a>
                        {/* <div className='absolute left-[-50px] top-[10px] bg-[#c0bebe] w-[40px] h-[1px]'></div> */}
                    </div>
                    <div className='flex'>
                        <h1 className='opacity-[0.8] hover:opacity-[1] hover:shadow-xl duration-300'><AiOutlineFacebook /></h1>
                        {/* <div className='absolute left-[-50px] top-[10px] bg-[#c0bebe] w-[40px] h-[1px]'></div> */}
                    </div>
                    <div className='flex'>
                        <h1 className='opacity-[0.8] hover:opacity-[1] hover:shadow-xl duration-300'><AiOutlineTwitter /></h1>
                        {/* <div className='absolute left-[-50px] top-[10px] bg-[#c0bebe] w-[40px] h-[1px]'></div> */}
                    </div>
                    <div className='mr-[13px] mb-0 h-[35%] w-[1px] rounded bg-[#c0bebe]'></div>
                </div>




            </div>
        </div>
    )
}

export default Main






//     < div className = 'vr hidden md:flex text-[25px] h-[100vh] space-y-6 fixed justify-between left-7 bottom-0 cursor-pointer z-50 duration-300' >
// <div className='h-[35%] w-[1px] rounded bg-[#c0bebe]'></div>
// <div className='flex'>
//     <a target="_blank" rel="noreferrer" href='https://instagram.com/inakov_b?igshid=MzNlNGNkZWQ4Mg==' className='opacity-[0.8] hover:opacity-[1] hover:shadow-xl hover:text-[26px] duration-300'><AiOutlineInstagram /></a>
//     {/* <div className='bg-[#c0bebe] w-[80px] h-[1px]'></div> */}
// </div>
// <div className='flex'>
//     <a target="_blank" rel="noreferrer" href='https://github.com/Umar7799' className='opacity-[0.8] hover:opacity-[1] hover:shadow-xl hover:text-[26px] duration-300'><AiOutlineGithub /></a>
//     {/* <div className='absolute left-[-50px] top-[10px] bg-[#c0bebe] w-[40px] h-[1px]'></div> */}
// </div>
// <div className='flex'>
//     <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/abdunosir-rakhmonov-3128a7240' className='opacity-[0.8] hover:opacity-[1] hover:shadow-xl hover:text-[26px] duration-300'><AiOutlineLinkedin /></a>
//     {/* <div className='absolute left-[-50px] top-[10px] bg-[#c0bebe] w-[40px] h-[1px]'></div> */}
// </div>
// <div className='flex'>
//     <h1 className='opacity-[0.8] hover:opacity-[1] hover:shadow-xl hover:text-[26px] duration-300'><AiOutlineFacebook /></h1>
//     {/* <div className='absolute left-[-50px] top-[10px] bg-[#c0bebe] w-[40px] h-[1px]'></div> */}
// </div>
// <div className='flex'>
//     <h1 className='opacity-[0.8] hover:opacity-[1] hover:shadow-xl hover:text-[26px] duration-300'><AiOutlineTwitter /></h1>
//     {/* <div className='absolute left-[-50px] top-[10px] bg-[#c0bebe] w-[40px] h-[1px]'></div> */}
// </div>
// <div className='h-[35%] w-[1px] rounded bg-[#c0bebe]'></div>
// </div >