import { Route, Routes } from "react-router-dom";

// importing syles
import "./styles/channelPageSection.css"

// importing components
import HomeSection from "./sections/HomeSection.jsx";
import PlaylistSection from "./sections/PlayslistSection.jsx";
import PostSection from "./sections/PostSection.jsx";
import AboutSection from "./sections/AboutSection.jsx";

function ChannelPageSection({ activeSection, channelDetail, channelVideos }) {

    const sectionElements = [<HomeSection channelDetail = {channelDetail} channelVideos = { channelVideos } />, <PlaylistSection />, <PostSection />, <AboutSection />];

    return (

        <div className="channelPageSection">
            { sectionElements[activeSection] }
        </div>
    );
}

export default ChannelPageSection;