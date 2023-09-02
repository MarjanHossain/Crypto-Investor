import latest1 from "../../images/Others/latest1.png"
import latest2 from "../../images/Others/latest2.png"
import latest3 from "../../images/Others/latest3.png"
import world from "../../images/Others/World.png"
import clock from "../../images/Others/clock.png"
import youtube from "../../images/Others/youtube.png"
import playBtn from "../../images/Others/bi_play-fill.png"
import share from "../../images/Others/share.png"
import header from "../../images/Others/header.png"


const SWicon = <>
    <div className="">
        <div className="flex justify-center">
            <img className="text-center" src={clock} alt="" />
        </div>
        <p>watch letter</p>
    </div>
    {/* share */}
    <div>
        <div className="flex justify-center"><img className="text-center" src={share} alt="" />
        </div>
        <p>Share</p>
    </div>
</>
const WorldIcon = <>
    <img className="w-14 h-14" src={world} alt="" />
    <p className=" items-center pt-3 opacity-80   ">
        Metamoonshots....</p>
</>

const iconAbsolute =
    <>
        <div className="">
            <div className="lg:flex absolute inset-4 hidden ">
                {WorldIcon}
            </div>
            <div className="absolute lg:flex inset-4 gap-4 justify-end opacity-75  hidden">
                {SWicon}
            </div>
            <div className="absolute flex inset-0 items-center justify-center">
                <img className="w-10 h-10 bg-white rounded-full" src={playBtn} alt="" />
            </div>
            <div className="absolute bottom-2 lg:ps-5 hidden lg:block">
                <p className="flex gap-3 text-xl ">Watch on <span><img src={youtube} alt="" /></span>Youtube</p>
            </div>
        </div>
    </>


const Latest = () => {

    return (
        <section className="lg:px-20 lg:py-10 pb-5 ">
            <div className="lg:space-y-12 space-y-7">
                {/* //? Header */}
                <div className="relative">
                    <h1 className="lg:text-5xl text-3xl font-semibold text-center lg:pb-3">
                        Check Out Our <br />  Latest Video
                    </h1>
                    <div className="absolute headerIcon lg:top-24 ">
                        <img src={header} alt="" className="w-1/2 lg:w-full " /></div>
                </div>

                {/*//? Image Part */}
                <div className="flex gap-7 relative">
                    {/* //? image1 */}
                    <div className="relative">
                        <img src={latest1} alt="" />
                        {/* icon absolute */}
                        <div>
                            {iconAbsolute}
                        </div>
                    </div>

                    <div className="space-y-6">
                        {/* //? image2 */}
                        <div className="relative">
                            <img src={latest2} alt="" />
                            {/* icon absolute */}
                            <div>
                                {iconAbsolute}
                            </div>
                        </div>


                        {/* //? image3 */}
                        <div className="relative">
                            <img src={latest3} alt="" />
                            {/* icon absolute */}
                            <div>
                                {iconAbsolute}
                            </div>
                        </div>
                    </div>

                    {/*//? icon */}

                    <div >
                        {/* //? world,watch,share,youtube */}



                    </div>
                </div>
                <div className="flex justify-center">
                    <button className="btn flex items-center gap-3">Visit Our Youtube Channel <span><img src={youtube} alt="" /></span></button>
                </div>
            </div>
        </section>
    );
};

export default Latest;