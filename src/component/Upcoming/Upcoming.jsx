import leftBar from "../../images/UpComingImg/leftBar.png"
import rightBar from "../../images/UpComingImg/RightBar.png"
import earth from "../../images/UpComingImg/Earth.png"
import x from "../../images/UpComingImg/X.png"
import warqube from "../../images/UpComingImg/WarQube.png"
import guest2 from "../../images/UpComingImg/Mask group-1.png"
import guest1 from "../../images/UpComingImg/Mask group.png"
import header from "../../images/Others/header.png"

const Upcoming = () => {
    return (
        <section className="lg:pt-24 pt-10 pb-5 space-y-8 ">
            {/* //? Header */}
            <div className=" relative  ">
                <h1 className="lg:text-5xl 3xl font-semibold text-center text-2xl lg:pb-10">
                    Upcoming AMAs
                </h1>
                <div className="headerIcon">
                    <img src={header} alt="" className="lg:w-full w-1/2" />
                </div>
            </div>

            {/* //? Card */}
            <div className="bg-upcoming lg:mx-20  lg:flex justify-between lg:h-[417px] pt-10 lg:pt-0">
                {/* //? left */}
                <div className="hidden lg:block"> <img src={leftBar} className="h-[417px] " alt="" /></div>

                <div className=" ps-5 lg:py-10 space-y-3">
                    <h2 className="lg:text-lg   ">AMA with</h2>
                    <h1 className="lg:text-3xl text:xl font-semibold ">Warqube</h1>
                    <div className="flex items-center gap-2">
                        <img src={warqube} alt="" />
                        <img src={x} alt="" />
                        <img src={earth} className="w-16" alt="" />
                    </div>
                    <h3 className=" flex items-start ">
                        <span className="lg:text-3xl text-2xl ">8 </span> th  <span className="lg:text-2xl text-xl ps-2"> August</span>
                    </h3>
                    <p className="text-[#C69873] text-2xl font-semibold">10 AM UTC</p>
                    <p className="lg:text-2xl xl">Reward : <span className="text-[#AE1ADE] lg:text-2xl text-xl">100$</span> </p>
                </div>

                {/* //? Center */}
                <div className="flex items-center p-3 lg:pt-0 px-3 lg:px-0 ">
                    <div className="flex h-1/2 gap-12">
                        <div className="space-y-2">
                            <img src={guest1} alt="" />
                            <h1 className="lg:text-2xl lg font-semibold">Guest: Amal Quber</h1>
                        </div>
                        <div className="space-y-2">
                            <img src={guest2} alt="" />
                            <h1 className="lg:text-2xl text-lg font-semibold ">Guest: Nick Harris</h1>
                        </div>
                    </div>
                </div>
                {/* Right */}
                <div className="flex items-center bg-[#3D34A2] px-5" >
                    <div className="lg:space-y-4 flex lg:gap-11 gap-7 lg:block text-center rightSide ">
                        <div>
                            <h1 >00</h1>
                            <h2 >Days</h2>
                        </div>
                        <div>
                            <h1 >00</h1>
                            <h2 >Hours</h2>
                        </div>
                        <div>
                            <h1 >00</h1>
                            <h2 >Minutes</h2>
                        </div>
                        <div>
                            <h1 >00</h1>
                            <h2 >Seconds</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Upcoming;