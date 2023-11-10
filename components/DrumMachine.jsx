import React from "react";
import DrumPadContainer from "./DrumPadContainer";

class DrumMachine extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div id="drum-machine">
            <DrumPadContainer/>
        </div>)
    }
}

export default DrumMachine;