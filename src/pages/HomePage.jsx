

const HomePage = () => {
    return (
        <div className="bg-customColors-bg  lg:p-3 lg:px-7 p-5 px-3 flex-1 flex flex-col justify-center">
            <div className="flex-1 block max-w-[94.5em] w-full m-auto lg:pb-[147px]  font-passion-one flex flex-col lg:justify-center leading-[80px] md:leading-[120px] lg:leading-[200px] justify-center">
                <p className="font-[1000] lg:text-[212px] md:text-[100px] text-[57px] text-customColors-main tracking-wider">REDEFINING</p>
                <p className="font-[1000] lg:text-[212px] md:text-[100px] text-[57px] text-customColors-yellowCol tracking-wider">DIGITAL</p>
                <p className="font-[1000] lg:text-[212px] md:text-[100px] text-[57px] text-customColors-main flex flex-col lg:flex-row ">
                    <span className="lg:flex-[2] tracking-wider">SERVICES</span>
                    <span className="flex-1 pt-6 font-[400] text-[20px] text-customColors-mail leading-[28.8px] font-sofia">
                        <span className="font-[700] text-[#424242] ">Calevala Interactive</span> is a company that uses creativity to address social challenges. We collaborate with organizations focused on solving the world's most urgent problems by producing innovative services and products.
                    </span>
                </p>
            </div>
        </div>
    );
}

export default HomePage;