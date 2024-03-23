import React, { useState, useEffect } from 'react'
import { Sling as Hamburger } from 'hamburger-react'
import '../components/Main.css'
import { AiOutlineInstagram, AiOutlineGithub, AiOutlineLinkedin, AiOutlineFacebook, AiOutlineTwitter } from 'react-icons/ai'
import { Link } from 'react-scroll'
import { GetInfo } from '../Contexts/Context'
import resumePdf from '../ResumeFolder/Abdunosir.pdf'

const Navbar = () => {
    const { getSidebarVal } = GetInfo()
    const [isOpen, setOpen] = useState(false)
    getSidebarVal(isOpen)

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setOpen(false)
            }
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);




    const preventScrolling = () => {
        if (isOpen === true) {
            document.body.style.overflow = "hidden"
        }
        if (isOpen === false) {
            document.body.style.overflow = "auto"
        }
    }
    preventScrolling()

    let prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
        let currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("navbar").style.top = "0px";
        } else {
            document.getElementById("navbar").style.top = "-75px";
            isOpen ? document.getElementById("navbar").style.top = "0px" : document.getElementById("navbar").style.top = "-75px";
        }
        prevScrollpos = currentScrollPos;
    }


    const email = 'www.behruz00@mail.ru';
    const subject = '';
    const body = '';
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;


    return (
        <div id='navbar' className='fixed w-full duration-500 rounded-b-md flex justify-between px-8 py-4 bg-[#405855] text-white bg-opacity-40 backdrop-blur-md rounded drop-shadow-lg shadow-md z-[100]'>
            <div className='hover:cursor-pointer'>
                <Link to='main' smooth={true} offset={0} duration={500}>
                    <div class="hexagon bg-white">
                        <div class="inner-content bg-[#405855]">
                            <h1 className='text-2xl font-semibold pt-[2px] sm:pt-0'>U</h1>
                        </div>
                    </div>
                </Link>
            </div>
            <div className='hidden font-semibold sm:flex space-x-6 pt-2'>
                <h1 className='navLink cursor-pointer'><Link to='about' smooth={true} offset={-100} duration={500}>About</Link></h1>
                <h1 className='navLink cursor-pointer'><Link to='recentWork' smooth={true} offset={-30} duration={500}>Recent Work</Link></h1>
                <h1 className='navLink cursor-pointer'><Link to='work' smooth={true} offset={10} duration={500}>Expeirence</Link></h1>
                <h1 className='navLink cursor-pointer'><Link to='getInTouch' smooth={true} offset={0} duration={500}>Get In Touch</Link></h1>
                <a href={resumePdf} target="_blank" rel="noopener noreferrer" className='buttons cursor-pointer border border-[#c0bebe] rounded px-4 py-1 mt-[-4px] hover:shadow-xl duration-300'>Resume</a>
            </div>
            <div className='sm:hidden absolute right-8 z-50'>
                <Hamburger className='z-50' toggled={isOpen} duration={0.5} toggle={setOpen} />
            </div>
            <div className={isOpen ? 'sidebar md:hidden absolute h-[100vh] w-[60vw] bg-[#405855] text-white bg-opacity-80 backdrop-blur-md drop-shadow-lg shadow-md top-0 duration-500 right-0' : 'hidden duration-500'}>
                <div className='space-y-10 text-[18px] font-mono font-semibold text-center pt-32'>
                    <h1 className='navLink sideBarLink cursor-pointer'><Link to='about' scrollTo spy={true} smooth={true} offset={-100} duration={500}>About</Link></h1>
                    <h1 className='navLink sideBarLink cursor-pointer'><Link to='recentWork' scrollTo spy={true} smooth={true} offset={-30} duration={500}>Recent Work</Link></h1>
                    <h1 className='navLink sideBarLink cursor-pointer'><Link to='work' scrollTo spy={true} smooth={true} offset={10} duration={500}>Expeirence</Link></h1>
                    <h1 className='navLink sideBarLink cursor-pointer'><Link to='getInTouch' scrollTo spy={true} smooth={true} offset={0} duration={500}>Get In Touch</Link></h1>
                    <div>
                        <a href={resumePdf} target="_blank" rel="noopener noreferrer" className='buttons tracking-widest text-[18px] font-mono font-semibold border border-[#c0bebe] rounded py-3 px-6'>Resume</a>
                    </div>
                </div>
                <div className='flex text-2xl space-x-6 justify-center pt-16'>
                    <a target="_blank" rel="noreferrer" href='https://instagram.com/inakov_b?igshid=MzNlNGNkZWQ4Mg==' className='cursor-pointer'><AiOutlineInstagram /></a>
                    <a target="_blank" rel="noreferrer" href='https://github.com/Umar7799' className='cursor-pointer'><AiOutlineGithub /></a>
                    <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/abdunosir-rakhmonov-3128a7240' className='cursor-pointer'><AiOutlineLinkedin /></a>
                    <h1 className='cursor-pointer'><AiOutlineFacebook /></h1>
                    <h1 className='cursor-pointer'><AiOutlineTwitter /></h1>
                </div>
                <div className='text-center mt-4 duration-300'>
                    <a href={mailtoLink} className='tracking-widest text-sm font-semibold cursor-pointer '>www.behruz00@mail.ru</a>
                </div>
            </div>
        </div>
    )
}

export default Navbar
