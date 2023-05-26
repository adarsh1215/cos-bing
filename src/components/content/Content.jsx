import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Preview from "../preview/preview";
import "./content.css"
// import data from "./tempdata";
import getVideos from "../apiCalls/getVideos.js";

function Content() {

    const [params, setParams] = useSearchParams();

    // data
    const [videos, setVideos] = useState([]);

    useEffect(() => {

        console.log(params.get("key"));

        if(params.get("key") == null) getVideos("home", "null").then(data => setVideos(data));
        else getVideos("search" , params.get("key")).then(data => setVideos(data));
        // setVideos(data);
        
    }, [params]);

    return (

        <div id = "content">
            
            {

                videos.map((video, idx) => {

                    return (

                        <Preview key={idx} data = {video} />
                    );
                })
            }
        </div>
    );
}

export default Content;