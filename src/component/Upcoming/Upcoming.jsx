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
            <div className=" relative ">
                <h1 className="lg:text-[56px] 3xl font-semibold text-center text-2xl lg:pb-10">
                    Upcoming AMAs
                </h1>
                <div className="headerIcon">
                    <img src={header} alt="" className="lg:w-full w-1/2" />
                </div>
            </div>

            {/* //? Card */}
            <div className="bg-upcoming lg:mx-20 lg:flex justify-between lg:h-[417px]">
                {/* //? left */}
                <div className="hidden lg:block"> <img src={leftBar} className="h-[417px] " alt="" /></div>

                <div className=" ps-5 lg:py-10 space-y-3">
                    <h2 className="text-xl font-semibold ">AMA with</h2>
                    <h1 className="text-5xl font-semibold ">Warqube</h1>
                    <div className="flex items-center gap-2">
                        <img src={warqube} alt="" />
                        <img src={x} alt="" />
                        <img src={earth} alt="" />
                    </div>
                    <h3 className=" flex items-start ">
                        <span className="text-4xl ">8 </span> th  <span className="text-3xl ps-2"> August</span>
                    </h3>
                    <p className="text-[#C69873] text-2xl font-semibold">10 AM UTC</p>
                    <p className="text-3xl">Reward : <span className="text-[#AE1ADE] text-3xl">100$</span> </p>
                </div>

                {/* //? Center */}
                <div className="flex items-center pt-3 lg:pt-0">
                    <div className="flex h-1/2 gap-12">
                        <div className="space-y-2">
                            <img src={guest1} alt="" />
                            <h1 className="text-2xl font-semibold">Guest: Amal Quber</h1>
                        </div>
                        <div className="space-y-2">
                            <img src={guest2} alt="" />
                            <h1 className="text-2xl font-semibold ">Guest: Nick Harris</h1>
                        </div>
                    </div>
                </div>
                {/* Right */}
                <div className="flex items-center bg-[#3D34A2] px-5" >
                    <div className="lg:space-y-4 flex gap-11 lg:block ">
                        <div>
                            <h1 className="text-4xl font-semibold">00</h1>
                            <h2 className="text-xl font-medium">Days</h2>
                        </div>
                        <div>
                            <h1 className="text-4xl font-semibold">00</h1>
                            <h2 className="text-xl font-medium">Hours</h2>
                        </div>
                        <div>
                            <h1 className="text-4xl font-semibold">00</h1>
                            <h2 className="text-xl font-medium">Minutes</h2>
                        </div>
                        <div>
                            <h1 className="text-4xl font-semibold">00</h1>
                            <h2 className="text-xl font-medium">Seconds</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Upcoming;