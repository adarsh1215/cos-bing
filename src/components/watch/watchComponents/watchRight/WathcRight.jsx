import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

import getvideos from "../../../apiCalls/getVideos";
import Preview from "../../../preview/preview";
import "./watchRight.css"

function WatchRight() {

    const [params, setParams] = useSearchParams();
    const [relatedVideos, setRelatedVideos] = useState([]);

    useEffect(() => {   

        getvideos("related", params.get("videoId")).then(data => setRelatedVideos(data));
    }, [params]);

    return (

        <div id="WatchRight">

            {

                relatedVideos.map((video, idx) => {

                    return (

                        <Preview key={idx} data = {video} />
                    );
                })
            }

        </div>
    );
}

export default WatchRight;
