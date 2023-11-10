import React from "react";
import DrumPadContainer from "./DrumPadContainer";
import DisplayContainer from "./DisplayContainer";

class DrumMachine extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div id="drum-machine">
            <DrumPadContainer/>
            <DisplayContainer/>
        </div>)
    }
}

export default DrumMachine;