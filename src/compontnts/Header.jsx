import { NavLink, useLocation } from "react-router-dom";
import logo from "../assets/images/Logo.svg";
import dropIcon from "../assets/images/mingcute_down-fill.png";
import { useState } from "react";
import { IoMdClose, IoMdMenu } from "react-icons/io";

const Header = () => {
    const navClassName = "font-[800] text-[16px] h-[36px] flex flex-col group";

    const {pathname} = useLocation();

    const [language, setLanguage] = useState("EN");

    const languages = [
        {name: "English", value: "EN"},
        {name: "Chinese", value: "zh-CN"},
        {name: "Spansh", value: "es-ES"},
        {name: "Hindi", value: "HI"},
        {name: "Arabic", value: "AR"},
        {name: "French", value: "fr-FR"},
    ]

    const [toggleLangMenu, setToggleLangMenu] = useState(false);

    const [toggleMenu, setToggleMenu] = useState(false);


    return (
            <div className="bg-customColors-bg w-100 py-5  z-100">
                <div className="bg-customColors-bg flex max-w-[100vw] px-3 lg:px-0 lg:max-w-[94.5em] w-full mx-auto justify-between items-center font-sofia">
                    <NavLink onClick={() => setToggleMenu(false)} to='/'><img src={logo} alt="" className="w-[140px] h-[36px]" /></NavLink>
                    <div className={`flex h-0 top-[70px] left-0 right-0 bg-customColors-bg w-[100vw] lg:top-0 transition-height duration-700 ease-in-out ${toggleMenu && "h-screen pt-10"} lg:flex-row flex-col overflow-hidden fixed z-100  lg:pt-3 lg:static gap-5 lg:gap-20 lg:justify-center items-center lg:h-[36px] lg:w-[470px]`}>
                        <NavLink to="/services" className={navClassName} onClick={() => setToggleMenu(false)}>
                            Services
                            <span className={`border border-1 border-customColors-yellowCol w-full h-0.5 transition-all duration-300 ease-in-out origin-center transform scale-x-0 group-hover:scale-x-100 ${pathname === "/services" && "active"}`}></span>
                        </NavLink>
                        <NavLink to="/work" className={navClassName} onClick={() => setToggleMenu(false)}>
                            Work
                            <span className={`border border-1 border-customColors-yellowCol w-full h-0.5 transition-all duration-300 ease-in-out origin-center transform scale-x-0 group-hover:scale-x-100 ${pathname === "/work" && "active"}`}></span>
                        </NavLink>
                        <NavLink to="/projects" className={navClassName} onClick={() => setToggleMenu(false)}>
                            Projects
                            <span className={`border border-1 border-customColors-yellowCol w-full h-0.5 transition-all duration-300 ease-in-out origin-center transform scale-x-0 group-hover:scale-x-100 ${pathname === "/projects" && "active"}`}></span>
                        </NavLink>
                        <NavLink to="/company" className={navClassName} onClick={() => setToggleMenu(false)}>
                            Company
                            <span className={`border border-1 border-customColors-yellowCol w-full h-0.5 transition-all duration-300 ease-in-out origin-center transform scale-x-0 group-hover:scale-x-100 ${pathname === "/company" && "active"}`}></span>
                        </NavLink>
                        <NavLink onClick={() => setToggleMenu(false)} className="text[16px] lg:hidden transition-all duration-[450ms] ease-in-out font-[800] hover:bg-customColors-yellowCol py-[8px] px-[24px] rounded-full w-[135px] h-[36px] text-center bg-customColors-main text-white flex items-center justify-center">Contact US</NavLink>
                    </div>
                    <div className="flex gap-12 items-center  hover:cursor-pointer font-sofia">
                        <div className="flex justify-center gap-3 items-center">
                            <div className="flex flex-col items-center group font-[800] text-[16px] " onClick={() => setToggleLangMenu((prev) => !prev)}>
                                <p className="flex items-center gap-2  leading-none p-0 m-0">EN <img src={dropIcon} alt="drop" className={`transform ${toggleLangMenu ? 'rotate-[-180deg]' : ''} transition-transform duration-500 w-[20px] h-[20px]`} /></p>
                                <span className="border border-1 border-customColors-yellowCol w-full h-0.5 transition-all duration-300 ease-in-out origin-center transform scale-x-0 group-hover:scale-x-100"></span>
                            </div>
                            {<ul className={`absolute transition-opacity ${toggleLangMenu ? 'opacity-100' : 'opacity-0'} duration-700 ease-in-out  h-[20em] ${toggleLangMenu ? "":"pointer-events-none"} mt-[255px] ml-[-50px] lg:mt-2 lg:top-[40px] lg:ml-[-15px] w-[108px] h-[222px] py-[12px] px-[24px] bg-white z-100`}>
                            { languages.map((item, idx) => ((item.value === language) ? <li key={idx} className="py-[4px] font-[700] text-[14px] flex flex-col group text-center">
                                    {item.name}
                                    <span className="border border-1 border-customColors-yellowCol h-0.5 origin-center scale-x-100"></span>
                                </li> : <li key={idx} className="py-[4px] font-[500] text-[16px] flex flex-col group text-center text-customColors-mail">
                                    {item.name}
                                    <span className="border border-1 border-customColors-yellowCol  h-0.5 transition-all duration-300 ease-in-out origin-center transform scale-x-0 group-hover:scale-x-100"></span>
                                </li>)) }
                            
                            </ul>}
                            {
                                toggleMenu 
                                ?
                                <IoMdClose className="text-[35px] lg:hidden text-customColors-main" onClick={() => setToggleMenu((prev) => !prev)} />
                                :
                                <IoMdMenu className="text-[35px] lg:hidden text-customColors-main" onClick={() => setToggleMenu((prev) => !prev)} />
                            }
                        </div>
                        <NavLink className="text[16px] hidden transition-all duration-[450ms] ease-in-out font-[800] hover:bg-customColors-yellowCol py-[8px] px-[24px] rounded-full w-[135px] h-[36px] text-center bg-customColors-main text-white lg:flex items-center justify-center">Contact US</NavLink>
                    </div>
                </div>
            </div>
    );
};

export default Header;