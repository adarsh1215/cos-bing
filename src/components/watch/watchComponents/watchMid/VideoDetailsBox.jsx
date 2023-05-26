import "./videoDetailsBox.css"

import formatNumber from "../../../helpersFunctions/formatNumber";

function VideoDetailsBox({ videoDetails, channelDetails }) {

    const { title, channelTitle, description, viewCount, thumbnail } = videoDetails;

    const channelThumbnail = channelDetails.thumbnail == undefined ? "": channelDetails.thumbnail[0];

    console.log(videoDetails);

    return (

        <>
            <div className="vidoTitle">
                {title}
            </div>

            <div className="videoDetails">
    
                <div className="channelInfo">
                    <div className="watchMidChannelLogo">
                        <img src= {channelThumbnail.url} alt="" />
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