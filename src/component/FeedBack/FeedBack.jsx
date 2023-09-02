import header from "../../images/Others/header.png"
import profile from "../../images/Others/profile.png"
import twitter from "../../images/Others/bi_twitter.png"
import FeedBackCard from './FeedBackCard';

const userData = [
    {
        feedback: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        name: "Harry Saimon",
        id: "@herisaimon",
        profile: profile,
        twitter: twitter,
    },
    {
        feedback: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.  Exercitation veniam consequat sunt nostrud amet.",
        id: "@herisaimon",
        name: "Harry Saimon",
        profile: profile,
        twitter: twitter,
    },
    {
        feedback: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.  Exercitation veniam consequat sunt nostrud amet.",
        name: "Harry Saimon",
        id: "@herisaimon",
        profile: profile,
        twitter: twitter,
    },
    {
        feedback: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.  Exercitation veniam consequat sunt nostrud amet.",
        id: "@herisaimon",
        profile: profile,
        twitter: twitter,
        name: "Harry Saimon",

    },
    {
        feedback: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.  Exercitation veniam consequat sunt nostrud amet..",
        name: "Harry Saimon",
        id: "@herisaimon",
        profile: profile,
        twitter: twitter,
    },
    {
        feedback: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet..",
        name: "Harry Saimon",
        id: "@herisaimon",
        profile: profile,
        twitter: twitter,
    },
    {
        feedback: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.  Exercitation veniam consequat sunt nostrud amet.",
        name: "Harry Saimon",
        id: "@herisaimon",
        profile: profile,
        twitter: twitter,
    },
    {
        feedback: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        name: "Harry Saimon",
        id: "@herisaimon",
        profile: profile,
        twitter: twitter,
    },
]

const FeedBack = () => {
    return (
        <section className="lg:pt-20 lg:pb-20 lg:px-20 pt-10 space-y-8 ">
            {/*//? Header */}
            <div className="text-center space-y-6 ">
                <div className="relative">
                    <h1 className="lg:text-5xl text-3xl font-semibold ">Don’t just take our word for it</h1>
                    <div className="absolute headerIcon top-10 "><img src={header} alt="" /></div>
                </div>
                <p className="lg:text-xl">
                    We’re proud to be working with these incredible companies. and thankful for <br className="hidden lg:block " /> their feedback, suggestion, and support.
                </p>
            </div>
            <div className="grid lg:grid-cols-3 space-y-10 lg:pt-10 ps-16 lg:ps-0 ">
                {
                    userData.map((userInfo, i) => <FeedBackCard
                        key={i}
                        userInfo={userInfo}
                    > </FeedBackCard>)
                }
            </div>

        </section>
    );
};

export default FeedBack;