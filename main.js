import React from "react";
import ReactDOM from "react-dom";
import DrumMachineContainer from "./components/DrumMachineContainer";
import { CHANGE, displayReducer, changeDisplay, mapDispatchToProps } from "./redux/redux";
import {createStore} from "redux";
import {Provider} from "react-redux";
import { connect } from "react-redux";


const store = createStore(displayReducer);

class App extends React.Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    componentDidMount() {
        this.inputRef.current.focus();
    }

    handleKeyDown(e) {
        let keySet = new Set("QWEASDZXC");
        let k = e.key.toUpperCase();
        if (keySet.has(k)) {
            let audioElement = document.getElementById(k);
            audioElement.currentTime = 0;
            audioElement.play();
            audioElement.parentElement.classList.add("pressed");
            this.props.changeDisplay(audioElement.getAttribute("displayname"));
            setTimeout(() => {
                audioElement.parentElement.classList.remove("pressed");
            }, 70)
        }
        console.log(e.key);
    }

    render() {
        return (<div ref={this.inputRef} id="app" tabIndex={0} onKeyDown={this.handleKeyDown}>
            <DrumMachineContainer/>
        </div>)
    }
}

App = connect(null, mapDispatchToProps)(App);

document.addEventListener("DOMContentLoaded", () => {
    let main = document.getElementById("main");
    ReactDOM.render( <Provider store={store}>
        <App></App>
    </Provider>, main);


    //Key press logic

    let keySet = new Set("QWEASDZXC");
    // console.log(keySet);

    // document.addEventListener("keypress", (e) => {
    //     let k = e.key.toUpperCase();
    //     if (keySet.has(k)) {
    //         let audioElement = document.getElementById(k);
    //         audioElement.currentTime = 0;
    //         audioElement.play();
    //         audioElement.parentElement.classList.add("pressed");
    //         setTimeout(() => {
    //             audioElement.parentElement.classList.remove("pressed");
    //         }, 70)
    //     }
    // })

    //Key press logic
});
