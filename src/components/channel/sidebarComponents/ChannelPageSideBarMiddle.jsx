// importing style
import "./styles/channelPageSideBarMiddle.css"

function ChannelPageSideBarMiddle({ channelDetail }) {

    const { subscriberCount } = channelDetail;

    return (
        <div className="ChannelPageSideBarMiddle">
            <div className="channelSideSubCount csm">
                <div className="csscLabel">Subricbers</div>
                <div className="csscData">{subscriberCount}</div>
            </div>
            <div className="channelSideViewsCount csm">
                <div className="csvcLabel">Views</div>
                <div className="csvcData">{subscriberCount}</div>
            </div>
        </div>
    );
}

export default ChannelPageSideBarMiddle;