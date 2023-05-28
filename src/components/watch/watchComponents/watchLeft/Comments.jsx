import CommentBox from "./CommentBox"

function Comments({ comments }) {

    return (

        <>
        {   comments !== undefined &&
                
            comments.map((comment, idx) => {

                return (

                    <CommentBox key={idx} data = {comment} />
                );
            })
        }
        </>
    );
}

export default Comments

