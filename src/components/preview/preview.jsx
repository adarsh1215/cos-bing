import { createSearchParams, useNavigate } from "react-router-dom";

import "./preview.css"

function Preview({data}) {

    const navigate = useNavigate();

    const type = data.type;
    const video = data.video;
    
    if(type != "video") return <></>

    const { videoId, title, thumbnails, stats, author } = video;

    function playVideo(event) {
        console.log(createSearchParams({videoId: videoId}));

        navigate({

            pathname: "/watch",
            search: `?${createSearchParams({ videoId: videoId })}`
        });
    }


    return (

            <div className="preview" id = {`preview${type}`}>
                <button className="insidePreview" onClick={playVideo}>
                    <img src = {thumbnails[0].url} alt = {title} width = "100%" className="thumbnail" />
                </button>
                <div className="previewFooter">
                    <div className="previewFooterLogo">
                        <img src = {author.avatar[0].url} alt= {author.title} width= "100%" className="channelLogo" />
                    </div>
                    <div className="previewFooterText">
                        <div className="videoTitle">
                            {title}
                        </div>
                        <div className="channelName">
                            {author.title}
                        </div>
                    </div>
                </div>
            </div>
        
    );
}

export default Preview;