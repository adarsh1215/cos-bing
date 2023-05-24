import WatchLeft from "./watchComponents/watchLeft/WatchLeft.jsx";
import WatchRight from "./watchComponents/watchRight/WathcRight.jsx"
import WatchMid from "./watchComponents/watchMid/watchMid.jsx"

import "./watch.css"

function Watch() {

    return (

        <div id = "watch">
            <WatchLeft />
            <WatchMid />
            <WatchRight />
        </div>
    );
}

export default Watch;