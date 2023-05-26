import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

import getVideoDetails from "../../../apiCalls/getVideoDetails";

import "./watchMidFooter.css"
import VideoDetailsBox from "./VideoDetailsBox.jsx";
import DiscriptionBox from "./DiscriptionBox.jsx";

function WatchMidFooter() {

    const [params, setParams] = useSearchParams();
    const [videoDetails, setVideoDetails] = useState({});
    const [discriptionToggle, setDiscriptionToggle] = useState(false);

    useEffect(() => {

        getVideoDetails(params.get("videoId")).then(details => {

            setVideoDetails(details);
            console.log(details);
        });
    }, [params]);

    return (

        <div id="watchMidFooter">
            <button className="discriptionToggleBtn" onClick={() => setDiscriptionToggle(!discriptionToggle)}>
                Toggle
            </button>
           { Object.keys(videoDetails).length !== 0 && 

                discriptionToggle ? <DiscriptionBox /> : <VideoDetailsBox videoDetails = {videoDetails} />

           }
        </div>
    );
}

export default WatchMidFooter;