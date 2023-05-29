// importing modules
import { Link } from "react-router-dom"; 


// import style
import "./videoDetailsBox.css"

// importing helper func
import formatNumber from "../../../helpersFunctions/formatNumber";

function VideoDetailsBox({ videoDetails, channelDetails }) {

    const { title, channelTitle, description, viewCount, thumbnail, channelId } = videoDetails;
    console.log(channelDetails);

    const channelThumbnail = channelDetails == undefined ? "": channelDetails.thumbnail[0];

    console.log(videoDetails);

    return (

        <>
            <div className="videoDetailBoxVideoTitle">
                {title}
            </div>

            <div className="videoDetails">
    
                <div className="channelInfo">
                    <div className="watchMidChannelLogo">
                        <Link to = {`/channel?channelId=${channelId}`} ><img src= {channelThumbnail.url} alt="" /></Link> 
                    </div>
                    <div className="channelLogoRight">
                        <div className="videoDetailchannelName">
                            {channelTitle}
                        </div>
                        <div className="subscribeCount">
                            {channelDetails.subscriberCount} subscribers
                        </div>
                    </div>
                </div>
    
                <div className="subscribe">
                    <button className="SubscribeBtn">Subscribe</button>
                </div>
    
                <div className="interact">
                    <div className="likes" >
                        <div>Likes</div>
                        {formatNumber(viewCount)} 
                    </div>
                    <div className="views">
                        <div>Views</div>
                        {formatNumber(viewCount)} 
                    </div>
                </div>
    
            </div>
        </>
    );
}

export default VideoDetailsBox;