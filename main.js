import React from "react";
import ReactDOM from "react-dom";
import DrumMachineContainer from "./components/DrumMachineContainer";
import { CHANGE, displayReducer, changeDisplay } from "./redux/redux";
import {createStore} from "redux";
import {Provider} from "react-redux";

const store = createStore(displayReducer);

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
    ReactDOM.render( <Provider store={store}>
        <App/>
    </Provider>, main);


    //Key press logic

    let keySet = new Set("QWEASDZXC");
    // console.log(keySet);

    document.addEventListener("keypress", (e) => {
        let k = e.key.toUpperCase();
        if (keySet.has(k)) {
            let audioElement = document.getElementById(k);
            audioElement.currentTime = 0;
            audioElement.play();
            audioElement.parentElement.classList.add("pressed");
            setTimeout(() => {
                audioElement.parentElement.classList.remove("pressed");
            }, 70)
        }
    })

    //Key press logic
});
