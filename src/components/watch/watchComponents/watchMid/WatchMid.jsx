import ReactPlayer from "react-player";
import { useSearchParams } from "react-router-dom";

import WatchMidFooter from "./watchMidFooter";
import "./watchMid.css"

function WatchMid() {

    const [params, setParams] = useSearchParams();

    return (

        <div id = "watchMid">
            <div id = "play">
                <ReactPlayer url = {`https://www.youtube.com/watch?v=${params.get("videoId")}-U`} width={"100%"} height={"100%"} />
            </div>
            <WatchMidFooter />
        </div>
    );
}

export default WatchMid;