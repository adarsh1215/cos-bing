import { createSearchParams, useNavigate, Link } from "react-router-dom";

import "./preview.css"

function Preview({data}) {

    const navigate = useNavigate();

    var { videoId, title, channelTitle, thumbnail, authorThumbnail, channelThumbnail, channelId } = data;

    function playVideo(event) {
        console.log(createSearchParams({videoId: videoId}));

        navigate({

            pathname: "/watch",
            search: `?${createSearchParams({ videoId: videoId })}`
        });
    }

    if(channelThumbnail == undefined) channelThumbnail = authorThumbnail;

    return (

            <div className="preview">
                <button className="insidePreview" onClick={playVideo}>
                    <img src = {thumbnail[0].url} alt = {title} width = "100%" className="thumbnail" />
                </button>
                <div className="previewFooter">
                    <div className="previewFooterLogo">
                        <Link to = { `/channel?channelId=${channelId}` } ><img src = {channelThumbnail[0].url} alt= {channelTitle} width= "100%" className="channelLogo" /></Link>
                    </div>
                    <div className="previewFooterText">
                        <div className="videoTitle">
                            {title}
                        </div>
                        <div className="channelName">
                            {channelTitle}
                        </div>
                    </div>
                </div>
            </div>
        
    );
}

export default Preview;