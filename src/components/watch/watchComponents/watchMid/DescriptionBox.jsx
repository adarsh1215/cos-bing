import "./descriptionBox.css"

function DescriptionBox({ description }) {

    return (

        <div className="descriptionBox">
            {description}
        </div>
    );
}

export default DescriptionBox;