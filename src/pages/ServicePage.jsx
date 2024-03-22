import { NavLink } from "react-router-dom";
import imgServices from '../assets/images/Rectangle 1353.png';


const ServicePage = () => {
    return(
        <div className="bg-customColors-bg flex-1 w-100 font-sofia group">
            <div className="flex lg:flex-row flex-col lg:max-w-[94.5em]  md:max-w-[90vw] max-w-[98vw] w-full mx-auto  justify-between gap-10 lg:gap-40 px-3 lg:px-0 pt-10 lg:h-screen">
                <div className="flex-1 flex flex-col lg:max-w-[643px] md:max-w-[90vw] max-w-[98vw] w-full mx-auto gap-5  ">
                    <p className=" font-[700] text-customColors-main leading-[40px] md:leading-[60px] lg:leading-[57.6px] lg:text-[48px] md:text-[50px] text-[30px]">Crafting Social Change through Purposeful Branding by Calevala</p>
                    <p className="leading-[28.8px] text-customColors-note font-[400] lg:text-[20px] text-[18px]">Calevala: company leveraging creativity to tackle social challenges. We partner with organizations dedicated to addressing the world's most pressing issues by developing innovative solutions and products.</p>
                    <p className="text[16px] font-[800] hover:border-customColors-yellowCol hover:text-customColors-yellowCol transition-all duration-[450ms] ease-in-out py-[8px] px-[24px] rounded-full w-[159px] h-[44px] text-center border-2 border-customColors-main text-customColors-main flex items-center justify-center">Contact US</p>
                </div>
                <div className="flex-1 flex flex-col gap-5 overflow-hidden group-hover:overflow-y-scroll mb-10 custom-scrollbar">
                    <img src={imgServices} alt="" className="max-w-[91vw] lg:max-w-[643px]" />
                    <p className="font-[700] lg:text-[48px] md:text-[50px] text-[28px] leading-[56.6px] text-customColors-main">How do Our Services Work?</p>
                    <p className="font-[400] lg:text-[20px] text-[18px] leading-[28.8px] text-customColors-mail max-w-[637px]">Exploring the transformative power of industrial evolution, project development and creative problem-solving techniques</p>
                    
                    
                    <hr className="border-customColors-inpTextBorder my-3 max-w-[637px]" />
                    <p className="font-[700] lg:text-[20px] text-[18px] leading-[28.8px] text-customColors-main">Industry 4.0</p>
                    <ul className="lg:ml-10 ml-6 text-customColors-mail font-[400] lg:text-[20px] text-[18px] leading-[28.8px] list-disc max-w-[637px]">
                        <li>Industry 1.0 - mechanization </li>
                        <li>Industry2.0 - electrification </li>
                        <li>Industry3.0 - automation </li>
                        <li>Industry 3.5 - globalization </li>
                        <li>Industry 4.0 - digitalization</li>
                    </ul>


                    <hr className="border-customColors-inpTextBorder my-3 max-w-[637px]" />
                    <p className="font-[700] lg:text-[20px] text-[18px] leading-[28.8px] text-customColors-main">Smart City Pillars</p>
                    <ul className="lg:ml-10 ml-6 text-customColors-mail font-[400] lg:text-[20px] text-[18px] leading-[28.8px] list-disc max-w-[637px]">
                        <li>Smart economy</li>
                        <li>Smart mobility</li>
                        <li>Smart government</li>
                        <li>Smart environment</li>
                        <li>Smart people</li>
                        <li>Smart living</li>
                    </ul>


                    <hr className="border-customColors-inpTextBorder my-3 max-w-[637px]  md:max-w-[90vw] max-w-[98vw]" />
                    <p className="font-[700] lg:text-[20px] text-[18px] leading-[28.8px] text-customColors-main">Design Thinking </p>
                    <ul className="lg:ml-10 ml-6 text-customColors-mail font-[400] lg:text-[20px] text-[18px] leading-[28.8px] list-disc flex flex-col gap-5 lg:max-w-[600px]  md:max-w-[90vw] max-w-[98vw]">
                        <li>
                            <span className="font-[700] lg:text-[20px] text-[18px] leading-[28.8px] text-customColors-main">Empathize: </span>
                            The first phase is about understanding the user's needs, experiences, and emotions. This involves observing, engaging, and empathizing with people to understand their perspectives and motivations.
                        </li>
                        <li>
                            <span className="font-[700] lg:text-[20px] text-[18px] leading-[28.8px] text-customColors-main">Define: </span>
                             In this phase, you'll consolidate the information gathered during the Empathize phase to define the core problems you have identified. This is about creatinga clear problem statement that will guide the rest of the design process.  
                        </li>
                        <li>
                            <span className="font-[700] lg:text-[20px] text-[18px] leading-[28.8px] text-customColors-main">Ideate: </span>
                            During the Ideation phase, you'll generate a range of ideas and solutions to the defined problem. This phase is characterized by creativity and “out-of-the-box” thinking, with a focus on quantity over quality of ideas.  
                        </li>
                        <li>
                            <span className="font-[700] lg:text-[20px] text-[18px] leading-[28.8px] text-customColors-main">Prototype: </span>
                            This phase involves turning ideas into tangible products. A prototype can be anything that a user can interact with—a wall of post-it notes, a role-playing activity, a storyboard, or even a physical product.  
                      </li>
                        <li>
                            <span className="font-[700] lg:text-[20px] text-[18px] leading-[28.8px] text-customColors-main">Test: </span>
                            The final phase is all about testing the completed prototypes with users. This phase involves experimentation and iteration, using feedback to refine solutions and make them as. 
                        </li>
                        <li>
                            <span className="font-[700] lg:text-[20px] text-[18px] leading-[28.8px] text-customColors-main">Effective as possible. </span>
                        </li>
                        
                    </ul>


                    <hr className="border-customColors-inpTextBorder my-3 lg:max-w-[637px]" />
                    <p className="font-[700] lg:text-[20px] text-[18px] leading-[28.8px] text-customColors-main">SDLC (Software Development Lifecycle) </p>
                    <ul className="lg:ml-10 ml-6 text-customColors-mail font-[400] lg:text-[20px] text-[18px] leading-[28.8px] list-disc flex flex-col gap-5 lg:max-w-[600px]  md:max-w-[90vw] max-w-[98vw]">

                        <li>
                            <span className="font-[700] lg:text-[20px] text-[18px] leading-[28.8px] text-customColors-main">Requirement Analysis: </span>
                            This initial phase involves gathering the requirements from stakeholders and users to understand what they need the software to do. It involves detailed communication and documentation to ensure that the software team understands the scope and needs.
                        </li>
                        <li>
                            <span className="font-[700] lg:text-[20px] text-[18px] leading-[28.8px] text-customColors-main">Design: </span>
                            In this phase, the software's architecture and design are planned. This includes defining the overall system architecture, technology stack, database design, and user interfaces. The goal is to create a design blueprint that guides the rest of the development process.
                        </li>
                        <li>
                            <span className="font-[700] lg:text-[20px] text-[18px] leading-[28.8px] text-customColors-main">Implementation (or Coding): </span>
                            During the implementation phase, developers start writing the code based on the design documentation and specifications. This is typically the longest phase of the software development life cycle.
                        </li>
                        <li>
                            <span className="font-[700] lg:text-[20px] text-[18px] leading-[28.8px] text-customColors-main">Testing: </span>
                            After the software is developed, it goes through extensive testing to ensure there are no bugs or issues. This includes various types of testing like unit testing, integration testing, system testing, and user acceptance testing (UAT). The goal is to identify and fix any problems before the software goes live.
                        </li>
                        <li>
                            <span className="font-[700] lg:text-[20px] text-[18px] leading-[28.8px] text-customColors-main">Deployment: </span>
                            Once the software is tested and ready for release, itis deployed to the production environment where users can access it. This might be done in stages depending on the project's, complexity and business strategy.
                        </li>
                        <li>
                            <span className="font-[700] lg:text-[20px] text-[18px] leading-[28.8px] text-customColors-main">Maintenance and Support: </span>
                            After deployment, the software will need ongoing maintenance and support to deal with new bugs, performance issues, or additional features. This phase ensures that the software continues to operate smoothly over time.
                        </li>
                        <li>
                            <span className="font-[700] lg:text-[20px] text-[18px] leading-[28.8px] text-customColors-main">Documentation: </span>
                            Throughout the SDLC, documentation is created and maintained. This includes requirement specifications, design documents, technical manuals, and user guides. Documentation is crucial for future maintenance and knowledge transfer.
                        </li>
                   
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default ServicePage;