// importing style
import "./styles/channelPageSideBar.css"

// importing components
import ChannelPageSideBarUpper from "./sidebarComponents/ChannelPageSideBarUpper";
import ChannelPageSideBarMiddle from "./sidebarComponents/ChannelPageSideBarMiddle";
import ChannelPageSideBarLower from "./sidebarComponents/ChannelPageSidebarLower";

function ChannelPageSideBar({ channelDetail }) {

    return (

        <div className="channelPageSidebar">
            <ChannelPageSideBarUpper channelDetail = { channelDetail } />
            <ChannelPageSideBarMiddle channelDetail = { channelDetail } />
            <ChannelPageSideBarLower channelDetail = { channelDetail } />
        </div>
    );
}

export default ChannelPageSideBar;