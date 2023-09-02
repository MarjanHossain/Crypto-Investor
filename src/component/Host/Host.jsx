import header from "../../images/Others/header.png"
const Host = () => {
    return (
        <section className="lg:pt-20 lg:px-20 py-10 ">
            <div className="bg-[#1C193F] rounded-xl  lg:py-20 py-10 text-center 
            ">
                <div className="lg:space-y-10 space-y-5 ">
                    {/*//? Header */}
                    <div className="relative">
                        <h1 className="lg:text-5xl text-2xl font-semibold">WANT To Host Your Project <br />
                            On  Metamoonshots?
                        </h1>
                        <div className="absolute flex justify-center inset-0 items-center lg:top-28 top-16">
                            <img src={header} className="w-1/4 lg:w-auto " alt="" />
                        </div>
                    </div>
                    {/* text */}
                    <p className="lg:text-xl px-4 lg:px-0 text-justify lg:text-center">From our AMA structure to our informative hosts, you won’t find another crypto investor space quite like us. <br className="hidden lg:block" /> Tell us when you want to schedule an AMA. Our team will take care of the rest.</p>
                    {/* Button */}
                    <button className="btn">
                        Book An AMA
                    </button>


                </div>

            </div>
        </section >
    );
};

export default Host;