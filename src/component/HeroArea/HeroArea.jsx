import member1 from "../../images/Icon/MemberShip/Ellipse 1.png"
import member2 from "../../images/Icon/MemberShip/Ellipse 2.png"
import member3 from "../../images/Icon/MemberShip/Ellipse 3.png"
import member4 from "../../images/Icon/MemberShip/Ellipse 4.png"
import bgTop from "../../images/Space/last-top-bg.png"
import bgBottom from "../../images/Space/bg-bottom.png"
import space from "../../images/Space/Space_bg1.png"


const HeroArea = () => {
    return (
        <section className="pt-10  lg:pb-12 ">
            <div className="lg:flex lg:px-20 ">
                {/* //? Header Side */}
                <div className="lg:space-y-6 space-y-4 ">
                    <h1 className="lg:text-[70px] font-semibold line font-mono leading-tight text-4xl">Community for <br /> crypto investor</h1>

                    <p className="lg:text-[20px] font-normal">Meta moonshots is a top ranked influencer community for crypto <br className="lg:block hidden" /> investor.We feature crypto project is through AMO  </p>
                    {/*//?------------ Button ------------------*/}
                    <div className="lg:space-y-6   ">
                        <div className="flex justify-center lg:justify-normal">
                            <button className="btn ">Join Now</button>
                        </div>
                        {/*//? MemberShip */}
                        <div className="lg:flex relative items-center hidden  ">
                            <img className="absolute z-10  " src={member1} alt="" />
                            <img className="absolute z-20 ps-5   " src={member2} alt="" />
                            <img className="absolute z-30 ps-11 " src={member3} alt="" />
                            <img className="z-40 ps-16 " src={member4} alt="" />
                            <div><p className="ps-6 font-medium text-lg">150k+ memberShip</p></div>
                        </div>
                    </div>
                </div>
                {/*//? Space Side */}

                <div className="  ">
                    <img className="lg:w-[600px] z-20 relative " src={space} alt="" />
                </div>

            </div>
            {/*//? Land Background */}



            <div className="relative bottom-40 z-0">
                <img src={bgTop} alt="" className="absolute" />
                <img src={bgBottom} alt="" className="absolute top-9 " />
            </div>






        </section >
    );
};

export default HeroArea;