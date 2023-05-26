import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

import getVideoDetails from "../../../apiCalls/getVideoDetails";

import "./watchMidFooter.css"
import VideoDetailsBox from "./VideoDetailsBox.jsx";

function WatchMidFooter() {

    const [params, setParams] = useSearchParams();
    const [videoDetails, setVideoDetails] = useState({});

    useEffect(() => {

        getVideoDetails(params.get("videoId")).then(details => {

            setVideoDetails(details);
            console.log(details);
        });
    }, [params]);

    return (

        <div id="watchMidFooter">
           { Object.keys(videoDetails).length !== 0 && <VideoDetailsBox videoDetails = {videoDetails} />}
        </div>
    );
}

export default WatchMidFooter;