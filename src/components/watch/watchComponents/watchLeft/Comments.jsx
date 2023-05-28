import CommentBox from "./CommentBox"

import "./comments.css"

function Comments({ comments }) {

    return (

        <div className="CommentsContainer">
        {   comments !== undefined &&
                
            comments.map((comment, idx) => {

                return (

                    <CommentBox key={idx} data = {comment} />
                );
            })
        }
        </div>
    );
}

export default Comments

