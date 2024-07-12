import markus_salmi from "../assets/images/Markus Salmi.png";
import pavel_kot from "../assets/images/Pavel Kot.png";
import milla_nordlund from "../assets/images/Milla Nordlund.png";
import mohammed from "../assets/images/Mohammed Al-saadi.png";
import teija_ouramaa from "../assets/images/Teija Ouramaa.png";
import agne from "../assets/images/Agnė Vitkauskaitė.png";
import ari_ahonen from "../assets/images/Ari Ahonen.png";
import praise from "../assets/images/Ayanwale Mofiyinfoluwa Praise.png";
import hafiz from "../assets/images/Hafiz.png";
import jenna_saario from "../assets/images/Jenna Saario.png";
import manta from "../assets/images/Manta.png";
import meri from "../assets/images/Meri.png";

const team = [
    {
        name: "Markus Salmi",
        task: "Product & Services",
        pic: markus_salmi
    },
    {
        name: "Pavel Kot",
        task: "Design",
        pic: pavel_kot
    },
    {
        name: "Milla Nordlund",
        task: "AI Models & Testing",
        pic: milla_nordlund
    },
    {
        name: "Mohammed Al-saadi",
        task: "Research & Development",
        pic: mohammed
    },
    {
        name: "Teija Ouramaa",
        task: "Research & Development",
        pic: teija_ouramaa
    },
    {
        name: "Agnė Vitkauskaitė",
        task: "Product & Services",
        pic: agne
    },
    {
        name: "Ari Ahonen",
        task: "Research & Development",
        pic: ari_ahonen
    },
    {
        name: "Ayanwale Praise",
        task: "Research & Development",
        pic: praise
    },
    {
        name: "Hafiz",
        task: "Research & Development",
        pic: hafiz
    },
    {
        name: "Jenna Saario",
        task: "AI Models & Testing",
        pic: jenna_saario
    },
    {
        name: "Manta",
        task: "Sales",
        pic: manta
    },
    {
        name: "Meri-Helmi Höynälä",
        task: "Product & Services",
        pic: meri
    },


];

const AboutPage = () => {
    return(
        <div className="bg-customColors-bg w-100 py-10 font-sofia flex-1 flex flex-col">
            <div className="flex-1 lg:max-w-[94.5em] lg:w-full w-full m-auto justify-between md:items-center md:max-w-[90vw] max-w-[98vw] w-full px-3 lg:px-0">
                <p className="font-[700] lg:text-[48px] md:text-[50px] text-[30px] leading-[40px] md:leading-[60px] lg:leading-[57.6px] text-customColors-main mb-5">Meet Our Dynamic Team</p>
                <div className="flex  items-center flex-wrap ">
                    {
                        team.map((member, idx) => (

                            <div className={`flex flex-col w-[16.66667%] ${idx < 6 ? "mt-3" : "mt-10"}`} key={idx}>
                                <p className="font-[500] text-[14px] leading-[18px] text-customColors-mail">{member.task}</p>
                                <p className="font-[800] text-[16px] leading-[20px] text-customColors-main mb-2">{member.name}</p>
                                <div className="bg-customColors-pic h-[216px] w-[216px] rounded-ss-[0px] rounded-se-[240px] rounded-es-[240px] rounded-ee-[240px] ">
                                    <img src={member.pic} alt="markus_salmi" className="bg-cover bg-center h-[216px] w-[216px] rounded-ss-[0px] rounded-se-[240px] rounded-es-[240px] rounded-ee-[240px]"/>
                                </div>
                            </div>
                        )

                        )

                    }

                    
                  
                </div>
            </div>
        </div>
    );
}

export default AboutPage;