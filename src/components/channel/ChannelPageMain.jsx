// importing components
import ChannelPageHeader from "./ChannelPageHeader";
import ChannelPageSection from "./ChannelPageSection";

// importing style
import "./styles/channelPageMain.css"

function ChannelPageMain({ channelDetail }) {

    const { description, title, image, subscriberCount, thumbnail } = channelDetail;

    return (

        <div className="channelPageMain">
            <div className="channelBanner">
                <img src={ image.banner[0].url } alt="" className="channelBanner" />
            </div>
            <ChannelPageHeader />
            <ChannelPageSection />
        </div>
    );
}

export default ChannelPageMain;