import ReactPlayer from "react-player";

import "./watchLeft.css"

function WatchLeft() {

    return (

        <div id = "watchLeft">
            <div id = "play">
                <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' width={"100%"} height={"100%"} />
            </div>
        </div>
    );
}

export default WatchLeft;