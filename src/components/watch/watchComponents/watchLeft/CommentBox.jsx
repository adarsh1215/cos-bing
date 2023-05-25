import "./commentBox.css"

function CommentBox({ comment }) {

    const { author, content } = comment;

    const { avatar, title } = author;

    return (

        <div className="commentBox">
            <div className="commentBoxInner">
                <div className="commentBoxHeader">
                    <div className="commentAuthorLogo">
                        <img src= {avatar[2].url} alt = "" />
                    </div>
                    <div className="commentAuthorTitle">
                        {title}
                    </div>
                </div>
                
                <div className="commentContent">
                    {content}
                </div>
            </div>
        </div>
    );
}

export default CommentBox;