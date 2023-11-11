import React from "react";
import DrumPad from "./DrumPad";
import { mapDispatchToProps } from "../redux/redux";
import {connect} from "react-redux";

class DrumPadContainer extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props);
    }

    render() {
        let letters = "QWEASDZXC".split("");
        let filenames = "Cev_H2.mp3 Dsc_Oh.mp3 Heater-1.mp3 Heater-2.mp3 Heater-3.mp3 Heater-4_1.mp3 Heater-6.mp3 Kick_n_Hat.mp3 RP4_KICK_1.mp3".split(" ");
        let sounds = ["Cev H2", "Dsc Oh", "Heater 1", "Heater 2", "Heater 3", "Heater 4", "Heater 6", "Kick 'n' hat ", "RP4 Kick"];
        let path = "./assets/sounds/";

        return (<div id="drum-pad-container">
            {letters.map((letter, i) => {
                return <DrumPad
                    sound={path + filenames[i]}
                    id={letter}
                    key={letter}
                    soundName = {sounds[i]}
                    changeDisplay = {this.props.changeDisplay}
                > </DrumPad>
            })}
        </div>)
    }
}

export default connect(null, mapDispatchToProps)(DrumPadContainer);