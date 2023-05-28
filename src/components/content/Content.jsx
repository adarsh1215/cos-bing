import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Preview from "../preview/preview";
import "./content.css"
// import data from "./tempdata";
import getVideos from "../apiCalls/getVideos.js";

function Content() {

    const [prevParams, setPrevParams] = useState("");
    const [params, setParams] = useSearchParams();

    // data
    const [videos, setVideos] = useState([]);

    useEffect(() => {

        if(prevParams !== params.get("key")) {

            setPrevParams(params.get("key"));

            if(params.get("key") == null) getVideos("home", "null").then(data => setVideos(data));
            else getVideos("search" , params.get("key")).then(data => setVideos(data));

        }
        
    }, [params]);

    return (

        <div id = "content">
            
            { 

                videos.map((video, idx) => {

                    return (

                        (video.type == "video" || video.type == undefined) && <Preview key={idx} data = {video} />
                    );
                })
            }
        </div>
    );
}

export default Content;