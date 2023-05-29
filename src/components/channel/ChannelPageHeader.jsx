import { Link } from "react-router-dom";

// importing style
import "./styles/channelPageHeader.css"

function ChannelPageHeader() {

    return (

        <div className="channelPageHeader">

            <ul className="channleSectionList">
                <Link to = {"/"}> <li className="channelSectionItem">Home</li> </Link>
                <Link to = {"/"}> <li className="channelSectionItem">Videos</li> </Link>
                <Link to = {"/"}> <li className="channelSectionItem">Playlist</li> </Link>
                <Link to = {"/"}> <li className="channelSectionItem">Post</li> </Link>
                <Link to = {"/"}> <li className="channelSectionItem">About</li> </Link>
            </ul>
        </div>
    );
}

export default ChannelPageHeader;