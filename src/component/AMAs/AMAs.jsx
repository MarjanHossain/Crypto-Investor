import img1 from "../../images/Others/Rectangle 8.png"
import img2 from "../../images/Others/Rectangle 9.png"
import img3 from "../../images/Others/Rectangle 10.png"
import scroll from "../../images/Others/scrool.png"
import sideArrow from "../../images/Others/sideArrow.png"
import leftArrow from "../../images/Others/leftArrow.png"
import playBtn from "../../images/Others/bi_play-fill.png"
import cheese1 from "../../images/Others/Cheese Half 4.png"
import cheese2 from "../../images/Others/Cheese Half 7.png"
import header from "../../images/Others/header.png"

const AMAs = () => {
    return (
        <section className=" lg:px-20 lg:py-20 py-10 relative ">
            <div className=" bg-[#2E2739] text-center py-10 rounded-lg space-y-5 ">
                {/* //? header part */}
                <div className=" lg:space-y-10 space-y-3">
                    <div className="relative ">
                        <h1 className="lg:text-5xl text-2xl font-semibold ">Featured AMAs</h1>
                        <div className="headerIcon lg:top-10 "><img src={header} className="w-1/2 lg:w-full" alt="" /></div>
                    </div>
                    <p className="lg:text-lg text-primary">
                        Metamoonshots is a top ranked influencer community for crypto investors🔮 <br className="hidden lg:block" />
                        We feature crypto projects through AMA.
                    </p>
                </div>
                {/* //? img part */}

                <div className="grid grid-cols-3 gap-6 py-5 px-10 relative " >
                    <div className="relative">
                        <img src={img1} alt="" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <img src={playBtn} className="bg-white rounded-full  bottom-p" alt="" />
                        </div>
                    </div>

                    <div className="relative">
                        <img src={img2} alt="" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <img src={playBtn} className="bg-white rounded-full  bottom-p" alt="" />
                        </div>
                    </div>

                    <div className="relative">
                        <img src={img3} alt="" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <img src={playBtn} className="bg-white rounded-full  bottom-p" alt="" />
                        </div>

                    </div>

                    {/* // ? side Arrow */}
                    <div className="absolute inset-6 flex items-center justify-end    ">
                        <img className="bg-white bg-opacity-10 rounded-full px-3 py-3 hover:bg-orange-700  " src={sideArrow} alt="" />
                    </div>
                    {/* // ? left arrow */}
                    <div className="absolute inset-0  flex items-center  ">
                        <img className="bg-white bg-opacity-10 rounded-full px-3 py-3 hover:bg-orange-700  " src={leftArrow} alt="" />
                    </div>
                </div>

                {/* //? scroll icon */}
                <div className="flex justify-center">
                    <img src={scroll} alt="" />
                </div>

                {/* // ? Cheese half */}

                <div className="absolute right-5 bottom-5 hidden lg:block  ">
                    <img src={cheese1} className="" alt="" />
                </div>
                <div className="absolute inset-4 hidden lg:block ">
                    <img src={cheese2} className="" alt="" />
                </div>



            </div>
        </section>
    );
};

export default AMAs;