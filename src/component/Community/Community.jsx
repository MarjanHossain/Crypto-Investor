import cheese1 from "../../images/Others/Cheese Half 4.png"
import cheese2 from "../../images/Others/Cheese Half 7.png"
import telegram from "../../images/Others/telegram.png"
const Community = () => {
    return (
        <section className="pt-20  lg:px-20 pb-20 relative">
            <div className=" bg-[#2E2739] text-center lg:py-10 py-5  rounded-lg space-y-10 ">
                {/* //? header part */}
                <div className=" lg:space-y-10 space-y-3 lg:pt-10">
                    <div className="relative ">
                        <h1 className="lg:text-[32px] text-xl font-semibold ">Ready to Join the Community?</h1>
                    </div>
                    <p className=" text-primary">
                        Giveaways, daily crypto news, and over 50 coins, tokens, or NFT investments every month — <br className="hidden lg:block" /> there’s a lot to get excited about. Come and see for yourself.
                    </p>
                </div>
                {/* //? Button */}
                <div className="flex justify-center">
                    <button className="flex gap-3 btn">
                        <p> Our Telegram</p>
                        <img src={telegram} alt="" />
                    </button>
                </div>
                {/* // ? Cheese half */}

                <div className="absolute right-5 bottom-5 hidden lg:block  ">
                    <img src={cheese1} className="" alt="" />
                </div>
                <div className="absolute top-0 left-3 hidden lg:block ">
                    <img src={cheese2} className="" alt="" />
                </div>

            </div>






        </section>
    );
};

export default Community;