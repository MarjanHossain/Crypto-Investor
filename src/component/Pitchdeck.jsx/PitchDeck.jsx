import diagram from "../../images/Others/Diagram.png"
import header from "../../images/Others/header.png"

const PitchDeck = () => {
    return (
        <section>
            <div className="lg:px-20 lg:pt-20 pt-10 lg:flex items-center ">
                {/* //? Heading part */}
                <div className="space-y-5">
                    <div className="pb-5 relative ">
                        <h1 className="lg:text-5xl text-2xl text-center font-semibold">Add Our Pitchdeck</h1>
                        <div className="absolute lg:right-20 right-5 ">
                            <img src={header} alt="" className="w-1/2 lg:w-full" />
                        </div>
                    </div>
                    <p >
                        Metamoonshots is a top ranked influencer community for crypto
                        <br className="hidden lg:block" /> investors🔮 We feature crypto  projects through AMA.
                    </p>
                    {/* //? Follower part */}
                    <div className="flex justify-center   ">
                        <div className="flex  bg-[#2C263A]  lg:my-6 px-7 py-6 gap-6 rounded-2xl card">
                            <div>
                                <h1 >25k+</h1>
                                <h2 >Telegram</h2>
                            </div>
                            <div>
                                <h1 >320k+</h1>
                                <h2  >Twitter</h2>
                            </div>
                            <div>
                                <h1 >2k+</h1>
                                <h2 >Discord</h2>
                            </div>
                        </div>
                    </div>
                    {/* //? Btn */}

                    <div className="flex justify-center"> <button className="btn ">Join Our Biggest Community</button></div>
                </div>

                {/* //? Diagram */}
                <div className="lg:ps-20 pt-5 lg:pt-0">
                    <img src={diagram} alt="" />
                </div>
            </div>
        </section>
    );
};

export default PitchDeck;