import React from "react";
import ReactDOM from "react-dom";
import DrumMachineContainer from "./components/DrumMachineContainer";

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div id="app">

            <DrumMachineContainer/>

        </div>)
    }
}

document.addEventListener("DOMContentLoaded", () => {
    let main = document.getElementById("main");
    ReactDOM.render(<App/>, main);
});
