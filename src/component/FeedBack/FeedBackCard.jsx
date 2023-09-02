
const FeedBackCard = ({ userInfo }) => {
    const { name, id, profile, twitter, feedback } = userInfo;
    return (
        <div className="bg-[#2F283B]  px-5 w-[300px] space-y-6 lg:py-6 py-3 shadow-xl shadow-[#7255ad] rounded-lg">
            <p className="text-sm opacity-80">{feedback}</p>
            <div className="flex items-center justify-between">
                <div className="flex gap-2">
                    <img src={profile} alt="" className="h-8 w-8" />
                    <div>
                        <h1>{name}</h1>
                        <p className="text-[10px]">{id}</p>
                    </div>
                </div>
                <div><img src={twitter} alt="" /></div>
            </div>

        </div>
    );
};

export default FeedBackCard;