import React from "react";
import DrumMachine from "./DrumMachine";

class DrumMachineContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div id="drum-machine-container">
            <DrumMachine/>

        </div>)
    }   
}

export default DrumMachineContainer;