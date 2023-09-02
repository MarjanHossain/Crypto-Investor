import phone from "../../images/Others/Phone.png"
import header from "../../images/Others/header.png"

const Massive = () => {
    return (
        <section className="lg:px-20">

            <div className="lg:flex">
                {/* //? Image Desktop */}
                <div className="lg:block hidden">
                    <img className="lg:w-[400px]" src={phone} alt="" />
                </div>

                {/* // ? Header Part */}
                <div className="flex lg:items-center text-center lg:text-left lg:px-20">
                    <div className="space-y-3 ">
                        <div className="relative">
                            <h1 className="lg:text-[56px] text-2xl  tracking-tight font-semibold leading-snug">Be Part of <br /> Something Massive</h1>
                            <div className="absolute lg:right-20 right-3"> <img src={header} className="w-1/2 lg:w-full" alt="" /></div>
                        </div>

                        <p className="lg:pt-12 lg:pb-6 lg:text-xl text-left   ">
                            Metamoonshots is a top ranked influencer community for crypto
                            <br className="lg:block hidden" />
                            investors🔮  We feature crypto projects  through AMA.
                        </p>
                        <button className="btn">Join Twitter Live</button>
                    </div>
                </div>
                {/* //? image phone */}
                <div className="block lg:hidden">
                    <img className="pt-3 " src={phone} alt="" />
                </div>
            </div>
        </section>
    );
};

export default Massive;