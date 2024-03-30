import xLogo from "../assets/images/X button.png";
import iLogo from "../assets/images/Instagram button.png";
import lLogo from "../assets/images/Linkedin button.png";
import { IoIosSend } from 'react-icons/io';

const Footer = () => {
    return (
        <div className="bg-customColors-bg w-100 pb-5 pt-2">
            <div className="flex flex-row lg:max-w-[94.5em] md:max-w-[90vw] max-w-[98vw] w-full m-auto font-sofia justify-between item-center flex-wrap px-3 lg:px-0">
                <div className="flex-[0.94] flex flex-col items-center lg:items-start">
                    <p className="lg:text-[24px] text-[22px] font-[800] text-customColors-main lg:mb-4">Contact</p>
                    <div className="flex flex-col items-center lg:items-start lg:gap-5">
                        <p className="lg:text-[18px] text-[16px] font-[600] text-customColors-mail">Turku, Finland</p>
                        <p className="lg:text-[18px] text-[16px] font-[600] text-customColors-mail hover:text-customColors-yellowCol transition-colors duration-300 ease-in-out"><a href="mailto:maarit@calevala.com">maarit@calevala.com</a></p>
                    </div>
                </div>

                <div className="flex-1 flex flex-col items-center lg:items-start">
                    <p className="lg:text-[24px] text-[22px] font-[800] text-customColors-main lg:mb-4">Follow us</p>
                    <div className="flex lg:justify-between gap-3 lg:gap-5">
                        <img src={xLogo} alt="" className="lg:h-auto lg:w-auto h-[20px] w-[20px]"/>
                        <img src={iLogo} alt="" className="lg:h-auto lg:w-auto h-[20px] w-[20px]"/>
                        <img src={lLogo} alt="" className="lg:h-auto lg:w-auto h-[20px] w-[20px]"/>

                    </div>
                </div>

                <div className="flex-1 flex flex-col items-center lg:items-start lg:ml-8">
                    <p className="lg:text-[24px] text-[22px] font-[800] text-customColors-main lg:mb-4">GET GOOD NEWS</p>
                    <div className="flex gap-3">

                        <input type="text" name="email" className="lg:w-[405px] w-auto outline-none border-b-2 border-customColors-inpTextBorder bg-customColors-bg" placeholder="write your mail"/>
                        <IoIosSend className="bg-customColors-main text-white rounded-[30px] w-[48px] h-[36px] py-[6px] px-[12px] transition-bg duration-300 ease-in-out hover:bg-customColors-yellowCol hover:cursor-pointer" />

                    </div>
                </div>

            </div>
        </div>
    );
}

export default Footer;