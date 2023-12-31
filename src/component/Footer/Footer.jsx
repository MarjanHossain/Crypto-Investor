import logo from "../../images/Others/logo.png"
import youtube from "../../images/Others/youtube.png"
import telegram from "../../images/Others/telegram.png"
import twitter from "../../images/Others/bi_twitter.png"
import discord from "../../images/Others/akar-icons_discord-fill.png"
import { Link } from "react-router-dom"
const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <section className="lg:px-20 pb-20 lg:py-10  ">
            <div className="lg:flex  justify-between">
                {/* //? Logo Part */}
                <div className="flex flex-1 justify-evenly ">
                    <div className="space-y-6">
                        <div className="lg:ps-6 ps-3"><img src={logo} alt="" className="" /></div>
                        <div className="flex lg:gap-4 gap-2 bg-icon">
                            <img src={youtube} alt="" />
                            <img src={telegram} alt="" />
                            <img src={twitter} alt="" />
                            <img src={discord} alt="" />
                        </div>
                    </div>

                    {/* //? Link Part */}
                    <div className="lg:space-y-4 space-y-4 lg:text-xl pt-3 lg:pt-0  ">
                        <div className="" ><Link>About Us</Link></div>
                        <div className="" ><Link>AMA Review</Link></div>
                        <div className="" ><Link>Partners</Link></div>
                        <div className="" ><Link>Success Stories</Link></div>

                    </div>
                </div>

                {/* Login */}
                <div className="space-y-4 pt-20 lg:pt-0 ">
                    <h1 className="text-2xl font-semibold text-center lg:text-left">Stay Up To Date With MetamoonShot</h1>

                    <div className="pt-2" >
                        <input type="email" name="" id="" placeholder="Type Your Email here " className="w-full  px-4 py-3 bg-[#221E30] rounded-2xl" />
                    </div>
                    <button className="btn  w-full">Sign Up</button>
                </div>
            </div>

            {/* Copyright */}
            <div>
                <div className=" border-b-2 border-gray-400 w-full pt-24 "></div>

                <div className="text-center pt-5">
                    <p className="text-xs">
                        ⒸCopyright Metamoonshots MH {currentYear}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Footer;