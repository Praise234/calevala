

const CompanyPage = () => {
    return(
        <div className="bg-customColors-bg w-100 py-10 font-sofia flex-1 flex flex-col">
            <div className="flex-1 lg:max-w-[94.5em] lg:w-full w-full m-auto justify-between md:items-center md:max-w-[90vw] max-w-[98vw] w-full px-3 lg:px-0">
                <p className="font-[700] lg:text-[48px] md:text-[50px] text-[30px] leading-[40px] md:leading-[60px] lg:leading-[57.6px] text-customColors-main ">Contact Information</p>
                <div className="flex flex-col gap-10 mt-10 ">
                    <div className="flex lg:flex-row md:flex-row flex-col gap-5 lg:gap-0">
                        <p className="flex-1 flex flex-col lg:gap-5 ">
                            <span className="font-[700] lg:text-[20px] text-[18px] leading-[28.8px] text-customColors-main">Name:</span>
                            <span className="font-[400] lg:text-[20px] text-[18px] leading-[28.8px] text-customColors-mail">Calevala Interactive Ltd</span>
                        </p>
                        <p className="flex-1  flex flex-col lg:gap-5">
                            <span className="font-[700] lg:text-[20px] text-[18px] leading-[28.8px] text-customColors-main">DUNS:</span>
                            <span className="font-[400] lg:text-[20px] text-[18px] leading-[28.8px] text-customColors-mail">651816980</span>
                        </p>
                    </div>

                    <div className="flex lg:flex-row md:flex-row flex-col gap-5 lg:gap-0">
                        <p className="flex-1 flex flex-col lg:gap-5">
                            <span className="font-[700] lg:text-[20px] text-[18px] leading-[28.8px] text-customColors-main">Headquarter:</span>
                            <span className="font-[400] lg:text-[20px] text-[18px] leading-[28.8px] text-customColors-mail">Turku, Finland</span>
                        </p>
                        <p className="flex-1  flex flex-col lg:gap-5">
                            <span className="font-[700] lg:text-[20px] text-[18px] leading-[28.8px] text-customColors-main">VAT (Y-tunnus):</span>
                            <span className="font-[400] lg:text-[20px] text-[18px] leading-[28.8px] text-customColors-mail">FI22561570 (2256157-0)</span>
                        </p>
                    </div>

                    <div className="flex lg:flex-row md:flex-row flex-col gap-5 lg:gap-0">
                        <p className="flex-1 flex flex-col lg:gap-5">
                            <span className="font-[700] lg:text-[20px] text-[18px] leading-[28.8px] text-customColors-main">Contact:</span>
                            <span className="font-[400] lg:text-[20px] text-[18px] leading-[28.8px] text-customColors-mail underline text-[18px] hover:text-customColors-yellowCol transition-colors duration-300 ease-in-out"><a href="mailto:maarit@calevala.com">maarit@calevala.com</a></span>
                        </p>
                        <p className="flex-1  flex flex-col lg:gap-5">
                            <span className="font-[700] lg:text-[20px] text-[18px] leading-[28.8px] text-customColors-main">E-Invoicing:</span>
                            <span className="font-[400] lg:text-[20px] text-[18px] leading-[28.8px] text-customColors-mail">OVT-tunnus: 003722561570</span>
                            <span className="font-[400] lg:text-[20px] text-[18px] leading-[28.8px] text-customColors-mail">Verkkolaskuoperaattori / pankki: ApixMessagingOy</span>
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default CompanyPage;