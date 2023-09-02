import header from "../../images/Others/header.png"
import icon1 from "../../images/InvestorIcon/icon (1).png"
import icon2 from "../../images/InvestorIcon/icon (2).png"
import icon3 from "../../images/InvestorIcon/icon (3).png"
import icon4 from "../../images/InvestorIcon/icon (4).png"
import icon5 from "../../images/InvestorIcon/icon (5).png"
import icon6 from "../../images/InvestorIcon/icon (6).png"
import icon7 from "../../images/InvestorIcon/icon (7).png"
import icon8 from "../../images/InvestorIcon/icon (8).png"
import icon9 from "../../images/InvestorIcon/icon (9).png"
import icon10 from "../../images/InvestorIcon/icon (10).png"
import icon11 from "../../images/InvestorIcon/icon (11).png"
import icon12 from "../../images/InvestorIcon/icon (12).png"
import icon13 from "../../images/InvestorIcon/icon (13).png"
import icon14 from "../../images/InvestorIcon/icon (14).png"
import icon15 from "../../images/InvestorIcon/icon (15).png"
import icon16 from "../../images/InvestorIcon/icon (16).png"
import icon17 from "../../images/InvestorIcon/icon (17).png"
import icon18 from "../../images/InvestorIcon/icon (18).png"
const Investor = () => {
    return (
        <section className="lg:px-20 lg:py-20 py-5">
            <div className="lg:space-y-12 space-y-6 ">
                {/* //? Header */}
                <div >
                    <h1 className="lg:text-5xl text-2xl font-semibold text-center">
                        Our Partners & Investors
                    </h1>
                    <div className="flex justify-center "><img src={header} alt="" className="w-1/4 lg:w-auto" /></div>
                </div>
                {/* //? icon */}
                <div className="lg:space-y-10 space-y-5">
                    <div className="lg:w-16 w-8 lg:h-6 h-3 flex lg:gap-20 gap-3">
                        <img src={icon15} alt="" />
                        <img src={icon3} alt="" />
                        <img src={icon4} alt="" />
                        <img src={icon5} alt="" />
                        <img src={icon6} alt="" />
                        <img src={icon7} alt="" />
                        <img src={icon8} alt="" />
                        <img src={icon9} alt="" />
                        <img src={icon2} alt="" />
                    </div>
                    <div className="lg:w-16 w-8 lg:h-6 h-3 flex lg:gap-20 gap-3">
                        <img src={icon10} alt="" />
                        <img src={icon11} alt="" />
                        <img src={icon12} alt="" />
                        <img src={icon13} alt="" />
                        <img src={icon14} alt="" />
                        <img src={icon1} alt="" />
                        <img src={icon16} alt="" />
                        <img src={icon17} alt="" />
                        <img src={icon18} alt="" />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Investor;