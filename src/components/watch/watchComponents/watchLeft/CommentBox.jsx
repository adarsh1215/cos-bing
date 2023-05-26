import "./commentBox.css"

function CommentBox({ data }) {

    const { authorDisplayName, textDisplay, authorProfileImageUrl } = data;

    return (

        <div className="commentBox">
            <div className="commentBoxInner">
                <div className="commentBoxHeader">
                    <div className="commentAuthorLogo">
                        <img src= {authorProfileImageUrl[2].url} alt = "" />
                    </div>
                    <div className="commentAuthorTitle">
                        {authorDisplayName}
                    </div>
                </div>
                
                <div className="commentContent">
                    {textDisplay}
                </div>
            </div>
        </div>
    );
}

export default CommentBox;