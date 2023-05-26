import "./videoDetailsBox.css"

import formatNumber from "../../../helpersFunctions/formatNumber";

function VideoDetailsBox({ videoDetails }) {

    const { author, stats, title } = videoDetails;
    const { avatar } = author;
    console.log(videoDetails);

    return (

        <>
            <div className="vidoTitle">
                {title}
            </div>

            <div className="videoDetails">
    
                <div className="channelInfo">
                    <div className="watchMidChannelLogo">
                        <img src= {avatar[2].url} alt="" />
                    </div>
                    <div className="channelLogoRight">
                        <div className="videoDetailchannelName">
                            {author.title}
                        </div>
                        <div className="subscribeCount">
                            {author.stats.subscribersText}
                        </div>
                    </div>
                </div>
    
                <div className="subscribe">
                    <button className="SubscribeBtn">Subscribe</button>
                </div>
    
                <div className="interact">
                    <div className="likes" >
                        <div>Likes</div>
                        {formatNumber(stats.likes)} 
                    </div>
                    <div className="views">
                        <div>Views</div>
                        {formatNumber(stats.views)} 
                    </div>
                </div>
    
            </div>
        </>
    );
}

export default VideoDetailsBox;