import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

import getvideos from "../../../apiCalls/getVideos";
import Preview from "../../../preview/preview";
import "./watchRight.css"

function WatchRight() {

    const [prevParams, setPrevParams] = useState("");
    const [params, setParams] = useSearchParams();
    const [relatedVideos, setRelatedVideos] = useState([]);

    useEffect(() => {

        if(prevParams !== params.get("videoId")) {

            setPrevParams(params.get("videoId"));

            getvideos("related", params.get("videoId")).then(data => setRelatedVideos(data));
        }

    }, [params]);

    return (

        <div id="WatchRight">

            { relatedVideos.length !== 0 &&

                relatedVideos.map((video, idx) => {

                    return (

                        video.type == "video"? <Preview key={idx} data = {video} />: null
                    );
                })
            }

        </div>
    );
}

export default WatchRight;
