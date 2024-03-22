import { NavLink } from "react-router-dom";
import imgServices from '../assets/images/workpage.png';


const WorkPage = () => {
    return(
        <div className="bg-customColors-bg flex-1 w-100 font-sofia group">
            <div className="flex lg:flex-row flex-col lg:max-w-[94.5em] md:max-w-[90vw] max-w-[98vw] w-full mx-auto justify-between  gap-10 lg:gap-40 px-3 lg:px-0 pt-10 lg:h-screen">
                <div className="flex-1 flex flex-col lg:max-w-[643px] md:max-w-[90vw] max-w-[98vw] gap-5 ">
                    <p className="  font-[700] text-customColors-main leading-[40px] md:leading-[60px] lg:leading-[57.6px] lg:text-[48px] md:text-[50px] text-[35px] lg:max-w-[643px] md:max-w-[90vw] max-w-[98vw]">Fostering Social Innovation through Strategic Venturing with Calevala</p>
                    <p className="leading-[28.8px] text-customColors-note font-[400] lg:text-[20px] text-[18px]">Empowering change through creativity. Partnering with organizations committed to addressing critical issues with innovative solutions and products.</p>
                    <p className="text[16px] font-[800] hover:border-customColors-yellowCol hover:text-customColors-yellowCol transition-all duration-[450ms] ease-in-out py-[8px] px-[24px] rounded-full w-[159px] h-[44px] text-center border-2 border-customColors-main text-customColors-main flex items-center justify-center">Contact US</p>
                </div>
                <div className="flex-1 flex flex-col gap-5 md:items-center lg:items-start overflow-hidden group-hover:overflow-y-scroll mb-10 custom-scrollbar">
                    <img src={imgServices} alt="" className="lg:max-w-[647px] w-full md:max-w-[90vw] max-w-[98vw] mb-3" />
                    <p className="font-[700] lg:text-[48px] md:text-[50px] text-[28px] leading-[40px] lg:leading-[56.6px] lg:max-w-[647px]  md:max-w-[90vw] max-w-[98vw] text-customColors-main">How Do Our Processes Drive Innovation?</p>
                    <p className="font-[400] lg:text-[20px] text-[18px] leading-[28.8px] text-customColors-mail lg:max-w-[637px] w-full md:max-w-[90vw] max-w-[98vw]">Unlocking the Potential of Business Ideation, Development, and Implementation.</p>
                    
                    
                    <hr className=" border-customColors-inpTextBorder my-3 lg:max-w-[637px] md:max-w-[90vw] max-w-[98vw] w-full" />
                    <p className="font-[700] lg:text-[20px] text-[18px] leading-[28.8px] text-customColors-main w-full">Ideation and Conceptualization</p>
                    <ul className="lg:ml-10 ml-6 text-customColors-mail font-[400] lg:text-[20px] text-[18px] leading-[28.8px] list-disc flex flex-col gap-5 lg:max-w-[600px] w-full md:max-w-[90vw] max-w-[98vw] pr-5 lg:pr-0">
                        <li>Initial stage where the focus is on brainstorming and developing the business idea.</li>
                        <li>Activities include market research, identifying potential customers, and conceptualizing the product or service.</li>
                        <li>The goal is to validate the idea and determine its feasibility.</li>
                        <li>Phase involves creating a basic business plan or model.</li>
                    </ul>


                    <hr className="border-customColors-inpTextBorder my-3 lg:max-w-[637px] md:max-w-[90vw] max-w-[98vw] w-full" />
                    <p className="font-[700] lg:text-[20px] text-[18px] leading-[28.8px] text-customColors-main w-full">Development and Seed Stage</p>
                    <ul className="lg:ml-10 md:ml-10 ml-6 text-customColors-mail font-[400] lg:text-[20px] text-[18px] leading-[28.8px] list-disc flex flex-col gap-5 lg:max-w-[600px] w-full md:max-w-[90vw] max-w-[98vw] pr-5 lg:pr-0">
                        <li>Focus shifts to turning the idea into a tangible product or service.</li>
                        <li>Involves product development, prototyping, and initial testing.</li>
                        <li>Stage where the business may seek seed funding from angel investors, venture capitalists, or through crowdfunding.</li>
                        <li>Building a core team and establishing foundational business processes.</li>
                        <li>The aim is to develop a minimum viable product (MVP) that can be presented to early adopters for feedback.</li>
                    </ul>


                    <hr className="border-customColors-inpTextBorder my-3 lg:max-w-[637px] md:max-w-[90vw] max-w-[98vw] w-full" />
                    <p className="font-[700] lg:text-[20px] text-[18px] leading-[28.8px] text-customColors-main w-full">Launch and Early Growth</p>
                    <ul className="lg:ml-10 md:ml-10 ml-6 text-customColors-mail font-[400] lg:text-[20px] text-[18px] leading-[28.8px] list-disc flex flex-col gap-5 lg:max-w-[600px] md:max-w-[90vw] max-w-[98vw] w-full pr-6 lg:pr-0">
                        <li>
                            Official launch of the product or service to the market.
                        </li>
                        <li>
                            Efforts are focused on marketing, sales, customer acquisition, and scaling the business.
                        </li>
                        <li>
                            Refinement of the product based on customer feedback and initial market response is crucial.
                        </li>
                        <li>
                            The business may seek additional funding for expansion.
                      </li>
                        <li>
                            Key metrics include customer growth, revenue growth, market penetration, and possibly profitability.
                        </li>
                        
                    </ul>


                    <hr className="border-customColors-inpTextBorder my-3 lg:max-w-[637px] md:max-w-[90vw] max-w-[98vw] w-full" />
                    <p className="font-[700] lg:text-[48px] md:text-[50px] text-[28px] leading-[57.6px] text-customColors-main w-full">Our Tools</p>
                    <ul className=" text-customColors-mail font-[400] lg:text-[20px] text-[18px] leading-[28.8px] flex flex-col gap-5 lg:max-w-[637px] md:max-w-[90vw] max-w-[98vw] w-full">

                        <li>
                            <span className="font-[700] lg:text-[20px] text-[18px] leading-[28.8px] text-customColors-main block">Project Management:</span>
                            Trello, Jira, Scrum, Kanban
                        </li>
                        <li>
                            <span className="font-[700] lg:text-[20px] text-[18px] leading-[28.8px] text-customColors-main block">Project Communication: </span>
                            Slack, Google Meet, Microsoft Teams                        
                        </li>
                        <li>
                            <span className="font-[700] lg:text-[20px] text-[18px] leading-[28.8px] text-customColors-main block">Project Design:</span>
                            Figma, Visily, Draw.io, Canva                        
                        </li>
                        <li>
                            <span className="font-[700] lg:text-[20px] text-[18px] leading-[28.8px] text-customColors-main block">Project technologies: </span>
                            Machine Learning, Image Detection, AI-driven services
                        </li>
                        <li>
                            <span className="font-[700] lg:text-[20px] text-[18px] leading-[28.8px] text-customColors-main block">Project Programming: </span>
                            Python, NodeJS, ReactJS, Angular
                        </li>

                        <li>
                            <span className="font-[700] lg:text-[20px] text-[18px] leading-[28.8px] text-customColors-main block">Project Platforms: </span>
                            Amazon AWS, Amazon S3
                        </li> 
                        <li>
                            <span className="font-[700] lg:text-[20px] text-[18px] leading-[28.8px] text-customColors-main block">Project Databases: </span>
                            PostgreSQL, MySQL, MongoDB
                        </li>
                        <li>
                            <span className="font-[700] lg:text-[20px] text-[18px] leading-[28.8px] text-customColors-main block">Project Repositories: </span>
                            Github, GitLab
                        </li>
                   
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default WorkPage;