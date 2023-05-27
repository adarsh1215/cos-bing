import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"

import "./watchLeft.css"
import CommentBox from "./CommentBox"

import getComments from "../../../apiCalls/getComents"

function watchLeft() {

    const [prevParams, setPrevParams] = useState("");
    const [params, setParams] = useSearchParams();
    const [comments, setComments] = useState([]);

    useEffect(() => {

        setPrevParams(params.get("videoId"));

        if(prevParams !== params.get("videoId")) {

            getComments(params.get("videoId")).then(comments => {
    
                setComments(comments);
            })

        }
        
    }, [params]);

    return (

        <div id="watchLeft">

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

export default watchLeft;