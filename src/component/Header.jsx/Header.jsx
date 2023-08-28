import { Link } from "react-router-dom";
import logo from "../../images/Icon/logo.png"
import discord from "../../images/Icon/akar-icons_discord-fill (1).png"
import youtube from "../../images/Icon/youtube.png"
import twitter from "../../images/Icon/twitter.png"
import telegram from "../../images/Icon/telegram.png"
import { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi"
import { AiOutlineClose, AiFillCloseCircle } from "react-icons/ai"
const Header = () => {
    const menu = <>
        <li><Link className="">About Us</Link></li>
        <li><Link> AMA Review</Link></li>
        <li><Link>Partners</Link></li>
        <li><Link>Success Stories</Link></li>
    </>
    const [toggle, setToggle] = useState(false);
    return (
        <section className="flex lg:pt-10 pt-5 justify-between z-10 ">
            <div className=" lg:px-0" >
                <img src={logo} alt="" />
            </div>
            {/* Large Device */}

            <div className="lg:flex  items-center gap-10 hidden ">
                <ul className="flex gap-10 hover">
                    {menu}
                </ul>
                <div className="flex icon gap-8 border border-white px-3 py-2 rounded-2xl bg-white bg-opacity-10 hover">
                    <img src={telegram} alt="" />
                    <img src={twitter} alt="" />
                    <img src={discord} alt="" />
                    <img src={youtube} alt="" />
                </div>
            </div>
            {/* Small Device */}
            <div onClick={() => setToggle(!toggle)} className="text-5xl block lg:hidden relative">
                {
                    toggle ? <AiFillCloseCircle />
                        :
                        <BiMenuAltRight />
                }
            </div>

            <ul className={`absolute list-none right-5 bg-gray-800 mt-11 py-9 px-4 space-y-3 text-lg rounded-2xl font-medium  ${toggle ? "block" : "hidden"}`} >
                {menu}
            </ul>

        </section>
    );
};

export default Header;