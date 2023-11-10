import React from "react";
import Display from "./Display";


class DisplayContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div id="display-container">Display Container
            <Display/>
        </div>
    }
}


export default DisplayContainer;