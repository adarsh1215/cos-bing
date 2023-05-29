import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

// importing style
import "./styles/channelPage.css"

// importing components
import ChannelPageSideBar from "./ChannelPageSidebar";
import ChannelPageMain from "./ChannelPageMain";

// importig api call methods
import getChannelDetails from "../apiCalls/getChannelDetails";

function ChannelPage() {

    const [params, setParams] = useSearchParams();
    const [channelDetail, setChannelDetail] = useState({});

    useEffect(() => {

        getChannelDetails(params.get("channelId")).then(detail => setChannelDetail(detail));
    }, [params]);

    const { description, title, image, subscriberCount, thumbnail } = channelDetail;

    if(Object.keys(channelDetail).length == 0) return null;

    return (
        
        <div className="channelPage">
            <ChannelPageMain channelDetail = {channelDetail} />
            <ChannelPageSideBar />
        </div>
    );
}

export default ChannelPage;