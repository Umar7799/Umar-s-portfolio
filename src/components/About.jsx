import React from "react";
import "../components/Main.css";
import { GetInfo } from "../Contexts/Context";
// import aboutImage from "../picss/Umar_blobhttpsdiscord.com37698983-e050-4256-b3ef-5f535c9dfe30_p_8a63f83b-24e6-4bc1-ba6c-31903129ae7c.png";
import PortfolioImage from "../picss/PortfolioImage.jpg";

const About = () => {
  const { sidebarVal } = GetInfo();

  return (
    <div
      id="about"
      className={
        sidebarVal
          ? "duration-300 blur-sm text-white bg-[#405855] mb-24"
          : "text-white bg-[#405855] mb-24"
      }
    >
      <div className="mx-10 mt-4 sm:mt-0">
        <div className="flex sm:pl-6 sm:pl-18 md:pl-20 lg:pl-28 lg:w-[1000px]">
          <h1 className="text-3xl md:text-4xl font-semibold font-mono break-keep">
            About Me
          </h1>
          <div className="h-[1px] bg-[#c0bebe] w-[200px] mt-5 ml-5"></div>
        </div>
        <div className="flex sm:pl-6 md:pl-20 lg:pl-28 duration-500">
          <div className="text-[17px] md:w-[60%] sm:text-[18px] break-words font-semibold font-mono pr-6 lg:mr-0">
            <p className="pt-10 pr-4">
              Hello! My name is Bekhruz and I enjoy designing and building things
              that gets us closer to the future. I started learing software
              technologies back in 2020 when I realized it is something that I'm
              good at.
            </p>
            <p className="py-5 pr-4">
              My main focus these days is new frontend and AI frontend
              technologies. I have not had a certain job in web development
              industry. But down below there are technologies I work with
              pleasure and projects I've made.
            </p>
            <p className="pr-4">
              Here are a few technologies I’ve been working with recently:
            </p>

            <div>
              <div className="flex space-x-3 sm:space-x-12 pt-3 text-sm leading-7">
                <ul>
                  <li>
                    <span className="pr-1 text-xs">➧</span>Html
                  </li>
                  <li>
                    <span className="pr-1 text-xs">➧</span>Css
                  </li>
                  <li>
                    <span className="pr-1 text-xs">➧</span>JavaScript
                  </li>
                </ul>
                <ul>
                  <li>
                    <span className="pr-1 text-xs">➧</span>TypeScript
                  </li>
                  <li>
                    <span className="pr-1 text-xs">➧</span>Jquery
                  </li>
                  <li>
                    <span className="pr-1 text-xs">➧</span>React
                  </li>
                </ul>
                <ul>
                  <li>
                    <span className="pr-1 text-xs">➧</span>PHP
                  </li>
                  <li>
                    <span className="pr-1 text-xs">➧</span>Symfony
                  </li>
                  <li>
                    <span className="pr-1 text-xs">➧</span>SQL
                  </li>
                </ul>
              </div>

              <div className="flex space-x-3 sm:space-x-12 text-sm leading-7">
                <ul>
                  <li>
                    <span className="pr-1 text-xs">➧</span>Vue
                  </li>
                  <li>
                    <span className="pr-1 text-xs">➧</span>Tailwindcss
                  </li>
                  <li>
                    <span className="pr-1 text-xs">➧</span>Bootstrap
                  </li>
                </ul>
                <ul>
                  <li>
                    <span className="pr-1 text-xs">➧</span>MySQL
                  </li>
                  <li>
                    <span className="pr-1 text-xs">➧</span>Git
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="hidden md:block max-w-[300px] mt-12 lg:mr-6 mr-12">
            <div className="imgWrapper border-2 border-[#c0bebe] rounded-[8px] relative z-[0] mr-6 hover:mt-1 hover:ml-1 duration-300">
              <img
                src={PortfolioImage}
                className="aboutImage h-[100%] rounded-[6px] z-[2]"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden flex justify-center px-5 mt-10 bg-[#405855]">
        <div className="imgWrapper border-2 w-[50%] border-[#c0bebe] rounded-[8px] relative z-[0] mr-6">
          <img
            src={PortfolioImage}
            className="aboutImage rounded-[6px] z-[2]"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default About;
