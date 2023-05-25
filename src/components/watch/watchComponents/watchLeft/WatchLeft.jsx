import ReactPlayer from "react-player";
import { useSearchParams } from "react-router-dom";

import "./watchLeft.css"

function WatchLeft() {

    const [params, setParams] = useSearchParams();
    console.log(params.get("videoId"));

    return (

        <div id = "watchLeft">
            <div id = "play">
                <ReactPlayer url = {`https://www.youtube.com/watch?v=${params.get("videoId")}-U`} width={"100%"} height={"100%"} />
            </div>
        </div>
    );
}

export default WatchLeft;