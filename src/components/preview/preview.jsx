import { createSearchParams, useNavigate } from "react-router-dom";

import "./preview.css"

function Preview({data}) {

    const navigate = useNavigate();

    var { videoId, title, channelTitle, thumbnail, authorThumbnail, channelThumbnail } = data;

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
                        <img src = {channelThumbnail[0].url} alt= {channelTitle} width= "100%" className="channelLogo" />
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