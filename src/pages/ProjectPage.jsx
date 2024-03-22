import { NavLink } from "react-router-dom";
import imgServices from '../assets/images/projectpage.png';
import dummyImg from '../assets/images/dummy.png';
import sport360 from '../assets/images/360sport.png';
import athletics from '../assets/images/calevalab.png';
import miukama from '../assets/images/miukama.png';


const ProjectPage = () => {
    return(
        <div className="bg-customColors-bg flex-1 w-100 font-sofia group">
            <div className="flex lg:flex-row flex-col lg:max-w-[94.5em] md:max-w-[90vw] max-w-[98vw] w-full m-auto justify-between  gap-10 lg:gap-40 px-3 lg:px-0 pt-10 lg:h-screen">
                <div className="flex-1 flex flex-col lg:max-w-[637px] md:max-w-[90vw] max-w-[98vw] w-full gap-5  ">
                    <p className="font-[700] lg:text-[48px] md:text-[50px] text-[30px] leading-[40px] md:leading-[60px] lg:leading-[57.6px] text-customColors-main">Projects by Calevala</p>
                    <img src={imgServices} alt="" className="lg:max-w-[637px] md:max-w-[90vw] max-w-[98vw] w-full" />
                </div>
                <div className="flex-1 flex flex-col gap-5 overflow-hidden group-hover:overflow-y-scroll mb-10 custom-scrollbar">
                    <p className=" font-[700] text-customColors-main leading-[25px] md:leading-[60px] lg:leading-[57.6px] lg:text-[48px] md:text-[50px] text-[30px] lg:max-w-[637px] md:max-w-[90vw] max-w-[98vw] w-full">Driving Impactful Change</p>
                    <p className="leading-[28.8px] text-customColors-note font-[400] lg:text-[20px] text-[18px] lg:max-w-[637px] md:max-w-[90vw] max-w-[98vw] w-full">Collaborating creatively to address pressing social challenges and drive meaningful solutions.</p>
                    <p className="text[16px] font-[800] hover:border-customColors-yellowCol hover:text-customColors-yellowCol transition-all duration-[450ms] ease-in-out py-[8px] px-[24px] rounded-full w-[159px] h-[44px] text-center border-2 border-customColors-main text-customColors-main flex items-center justify-center">Contact US</p>
                    
                    
                    <hr className="border-customColors-inpTextBorder my-3 lg:max-w-[637px] md:max-w-[90vw] max-w-[98vw] w-full" />
                    <p className="font-[700] lg:text-[20px] text-[18px] leading-[28.8px] text-customColors-main lg:max-w-[637px] md:max-w-[90vw] max-w-[98vw] w-full">Athlete Management System</p>
                    <p className="leading-[28.8px] text-customColors-note font-[400] lg:text-[20px] text-[18px] lg:max-w-[637px] md:max-w-[90vw] max-w-[98vw] w-full">Streamline athlete data management with our comprehensive Athlete Management System. From performance tracking to scheduling, our platform empowers coaches and managers to optimize training programs and enhance athlete performance.</p>
                    <img src={athletics} alt="" className="lg:max-w-[637px] md:max-w-[90vw] max-w-[98vw] w-full" />

                    <hr className="border-customColors-inpTextBorder my-3 lg:max-w-[637px] md:max-w-[90vw] max-w-[98vw] w-full" />
                    <p className="font-[700] lg:text-[20px] text-[18px] leading-[28.8px] text-customColors-main lg:max-w-[637px] md:max-w-[90vw] max-w-[98vw] w-full">Smart City Platform</p>
                    <p className="leading-[28.8px] text-customColors-note font-[400] lg:text-[20px] text-[18px] lg:max-w-[637px] md:max-w-[90vw] max-w-[98vw] w-full">Revolutionize urban living with our Smart City Platform. By integrating cutting-edge technologies, our platform facilitates efficient resource management, enhances public safety, and fosters sustainability, ultimately creating smarter and more livable cities.</p>
                    <img src={dummyImg} alt="" className="lg:max-w-[637px] md:max-w-[90vw] max-w-[98vw] w-full" />

                    <hr className="border-customColors-inpTextBorder my-3 lg:max-w-[637px] md:max-w-[90vw] max-w-[98vw] w-full" />
                    <p className="font-[700] text-[20px] leading-[28.8px] text-customColors-main lg:max-w-[637px] md:max-w-[90vw] max-w-[98vw] w-full">AI-Driven Audit Service</p>
                    <p className="leading-[28.8px] text-customColors-note font-[400] lg:text-[20px] text-[18px] lg:max-w-[637px] md:max-w-[90vw] max-w-[98vw] w-full">Transform your audit process with our AI-Driven Audit Service. Leveraging advanced artificial intelligence algorithms, our service provides comprehensive audit solutions, detecting anomalies, minimizing risks, and ensuring regulatory compliance with unmatched accuracy and efficiency.</p>
                    <img src={dummyImg} alt="" className="lg:max-w-[637px] md:max-w-[90vw] max-w-[98vw] w-full" />

                    <hr className="border-customColors-inpTextBorder my-3 lg:max-w-[637px] md:max-w-[90vw] max-w-[98vw] w-full" />
                    <p className="font-[700] text-[20px] leading-[28.8px] text-customColors-main lg:max-w-[637px] md:max-w-[90vw] max-w-[98vw] w-full">Sport Scouting Ecosystem</p>
                    <p className="leading-[28.8px] text-customColors-note font-[400] lg:text-[20px] text-[18px] lg:max-w-[637px] md:max-w-[90vw] max-w-[98vw] w-full">Unlock the full potential of talent identification and recruitment with our Sport Scouting Ecosystem. By combining data analytics and scouting expertise, our ecosystem connects athletes with scouts and recruiters, facilitating talent discovery and development across various sports.</p>
                    <img src={sport360} alt="" className="lg:max-w-[637px] md:max-w-[90vw] max-w-[98vw] w-full" />

                    <hr className="border-customColors-inpTextBorder my-3 lg:max-w-[637px] md:max-w-[90vw] max-w-[98vw] w-full" />
                    <p className="font-[700] text-[20px] leading-[28.8px] text-customColors-main lg:max-w-[637px] md:max-w-[90vw] max-w-[98vw] w-full">Collection Management System</p>
                    <p className="leading-[28.8px] text-customColors-note font-[400] lg:text-[20px] text-[18px] lg:max-w-[637px] md:max-w-[90vw] max-w-[98vw] w-full">Simplify and streamline your collection management tasks with our Collection Management System. From inventory tracking to loan management, our system offers comprehensive features tailored to the needs of museums, galleries, and cultural institutions, ensuring efficient and organized collection management.</p>
                    <img src={miukama} alt="" className="lg:max-w-[637px] md:max-w-[90vw] max-w-[98vw] w-full" />

                    <hr className="border-customColors-inpTextBorder my-3 lg:max-w-[637px] md:max-w-[90vw] max-w-[98vw] w-full" />
                    <p className="font-[700] text-[20px] leading-[28.8px] text-customColors-main lg:max-w-[637px] md:max-w-[90vw] max-w-[98vw] w-full">Competition Management System</p>
                    <p className="leading-[28.8px] text-customColors-note font-[400] lg:text-[20px] text-[18px] lg:max-w-[637px] md:max-w-[90vw] max-w-[98vw] w-full">Elevate your event management capabilities with our Competition Management System. Designed for organizers of sports tournaments, esports events, and competitions of all kinds, our system streamlines registration, scheduling, scoring, and result tracking, providing a seamless experience for participants and organizers alike.</p>
                    <img src={dummyImg} alt="" className="lg:max-w-[637px] md:max-w-[90vw] max-w-[98vw] w-full" />


                </div>

            </div>
        </div>
    );
};

export default ProjectPage;