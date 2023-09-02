import AMAs from "../AMAs/AMAs";
import Background from "../Background/Background";
import Header from "../Header.jsx/Header";
import HeroArea from "../HeroArea/HeroArea";
import Host from "../Host/Host";
import Investor from "../Investor/Investor";
import Latest from "../Latest/Latest";
import Massive from "../Massive/Massive";
import PitchDeck from "../Pitchdeck.jsx/PitchDeck";
import Upcoming from "../Upcoming/Upcoming";

const Home = () => {
    return (
        <div className="">
            <Header />
            <Background />
            <HeroArea />
            <Massive />
            <Upcoming />
            <PitchDeck />
            <AMAs />
            <Latest />
            <Host />
            <Investor />

        </div>
    );
};

export default Home;