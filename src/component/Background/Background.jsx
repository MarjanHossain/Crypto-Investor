
const Background = () => {
    const bg = <>
        <div className="bg-white w-1 h-1 rounded-full"></div>
        <div className="bg-white w-[2px] h-[2px] rounded-full "></div>
        <div className="bg-white  w-[2px] h-[2px] rounded-full "></div>
        <div className="bg-white w-[3px] h-[3px] rounded-full "></div>
        <div className="bg-white  w-[2px] h-[2px] rounded-full  "></div>

    </>
    return (
        <div className="space-y-20   px-5 py-8 absolute">
            <div className="flex gap-40 ">
                <div className="bg-white  w-[3px] h-[3px] rounded-full "></div>
                <div className="bg-white w-[3px] h-[3px] rounded-full "></div>
            </div>
            <div className="flex justify-evenly"> {bg}</div>
            <div className="flex  justify-around">
                <div className="bg-white  w-[2px] h-[2px] rounded-full "></div>
                <div className="bg-white w-[3px] h-[3px] rounded-full "></div>
            </div>
            <div className="flex justify-center gap-40"> {bg}</div>
            <div className="flex gap-96"> {bg}</div>
        </div>
    );
};

export default Background;