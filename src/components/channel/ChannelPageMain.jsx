// importing components
import { useEffect, useState } from "react";
import ChannelPageHeader from "./ChannelPageHeader";
import ChannelPageSection from "./ChannelPageSection";

// importing style
import "./styles/channelPageMain.css"
import { useSearchParams } from "react-router-dom";

function ChannelPageMain({ channelDetail, channelVideos }) {

    const [params, setParams] = useSearchParams();

    const [activeSection, setActiveSection] = useState(0);

    const { description, title, image, subscriberCount, thumbnail } = channelDetail;

    return (

        <div className="channelPageMain">
            <div className="channelBanner">
                <img src={ image.banner[0].url } alt="" className="channelBanner" />
            </div>
            <ChannelPageHeader setActiveSection = { setActiveSection } />
            <ChannelPageSection activeSection = { activeSection } channelDetail = {channelDetail} channelVideos = {channelVideos} />
        </div>
    );
}

export default ChannelPageMain;