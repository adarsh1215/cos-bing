import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

import getVideoDetails from "../../../apiCalls/getVideoDetails";
import getChannelDetails from "../../../apiCalls/getChannelDetails";

import "./watchMidFooter.css"
import VideoDetailsBox from "./VideoDetailsBox.jsx";
import DescriptionBox from "./DescriptionBox.jsx";

function WatchMidFooter() {

    const [prevParams, setPrevParams] = useState("");
    const [params, setParams] = useSearchParams();
    const [videoDetails, setVideoDetails] = useState({});
    const [channelDetails, setChannelDetails] = useState({});
    const [descriptionToggle, setDescriptionToggle] = useState(false);

    useEffect(() => {

        if(prevParams !== params.get("videoId")) {
            
            setPrevParams(params.get("videoId"));

            getVideoDetails(params.get("videoId")).then(details => {

                getChannelDetails(details.channelId).then((data) => {
    
                    setChannelDetails(data);
                    setVideoDetails(details);
                    console.log(data);
                })
            });
        }

    }, [params]);


    return (

        <div id="watchMidFooter">
            <button className="descriptionToggleBtn" onClick={() => setDescriptionToggle(!descriptionToggle)}>
                
            </button>
           { ( videoDetails && channelDetails && Object.keys(videoDetails).length !== 0 && Object.keys(channelDetails).length !== 0) ?

                descriptionToggle ? <DescriptionBox description = {channelDetails.description} /> : <VideoDetailsBox videoDetails = {videoDetails} channelDetails = {channelDetails} />:<></>

           }
        </div>
    );
}

export default WatchMidFooter;