import React from "react";

const Popup = props => {
    return (
        <div className="popup-box">
            <div className="box">
                <button className="btn-close" style={{ width: '30px', height: '30px' }} onClick={props.handleClose}>X</button>
                {props.content}
            </div>
        </div>
    )
}

export default Popup;