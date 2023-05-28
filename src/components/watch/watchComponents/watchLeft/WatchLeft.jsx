import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"

import "./watchLeft.css"
import Comments from "./Comments"
import Summary from "./Summary"

import getComments from "../../../apiCalls/getComents"
import getSummary from "../../../apiCalls/getSummary"

function watchLeft() {

    const [prevParams, setPrevParams] = useState("");
    const [params, setParams] = useSearchParams();
    const [comments, setComments] = useState([]);
    const [watchLeftToggle, setWatchLeftToggle] = useState(true);
    const [summary, setSummary] = useState("");

    useEffect(() => {

        
        if(prevParams !== params.get("videoId")) {
            
            setPrevParams(params.get("videoId"));

            getComments(params.get("videoId")).then(comments => {
    
                setComments(comments);
            })

            getSummary(params.get("videoId")).then(summary => setSummary(summary));

        }
        
    }, [params]);

    return (

        <div id="watchLeft">

            <button className="watchLeftToggleBtn" onClick={() => setWatchLeftToggle(!watchLeftToggle)}></button>   

            {

                watchLeftToggle ? <Comments comments={ comments } /> : <Summary summary = { summary } />
            }         
        </div>
    );
}

export default watchLeft;