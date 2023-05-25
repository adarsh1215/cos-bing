import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"

import "./watchLeft.css"
import CommentBox from "./CommentBox"

import getComments from "../../../apiCalls/getComents"

function watchLeft() {

    const [params, setParams] = useSearchParams();

    const [comments, setComments] = useState([]);

    useEffect(() => {

        getComments(params.get("videoId")).then(comments => {

            setComments(comments);
        })
    }, [params]);

    return (

        <div id="watchLeft">

            {
                
                comments.map((comment, idx) => {

                    return (

                        <CommentBox key={idx} comment = {comment} />
                    );
                })
            }
        </div>
    );
}

export default watchLeft;