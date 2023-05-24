import { useEffect, useState } from "react";
import Preview from "../preview/preview";
import "./content.css"
import data from "./tempdata";
import getVideos from "../apiCalls/getVideos.js";

function Content() {

    // data
    const [videos, setVideos] = useState([]);

    useEffect(() => {

        getVideos.then(data => setVideos(data));
        // setVideos(data);
        
    }, []);

    return (

        <div id = "content">
            
            {

                videos.map((video) => {

                    return (

                        <Preview key={video.videoId} video = {video} />
                    );
                })
            }
        </div>
    );
}

export default Content;