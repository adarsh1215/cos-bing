import "../sidebarComponents/styles/ChannelPageSideBarUpper.css"

function ChannelPageSideBarUpper({ channelDetail }) {

    const { thumbnail, title } = channelDetail;

    return (

        <div className="channelPageSideBarUpper">
            <div className="channelPageLogo">
                <img src={ thumbnail[0].url } alt= { title } width="100%" />
            </div>
            <div className="channlePageTitle">{title}</div>
        </div>
    );
}

export default ChannelPageSideBarUpper;