import "./preview.css"

function Preview({data}) {

    const type = data.type;
    const video = data.video;

    const { videoId, title, thumbnails, stats, author } = video;

    return (

            <div className="preview" id = {`preview${type}`}>
                <button className="insidePreview">
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