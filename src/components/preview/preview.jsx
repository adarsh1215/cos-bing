import "./preview.css"

function Preview({video}) {

    const {videoId, title, channelId, thumbnail, viewCount, channelTitle, channelThumbnail} = video;

    return (

            <div className="preview" id = {`preview${videoId}`}>
                <button className="insidePreview">
                    <img src = {thumbnail[0].url} width = "100%" className="thumbnail" />
                </button>
                <div className="previewFooter">
                    <div className="previewFooterLogo">
                        <img src = {channelThumbnail[0].url} alt= {channelThumbnail[0]} width= "100%" className="channelLogo" />
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