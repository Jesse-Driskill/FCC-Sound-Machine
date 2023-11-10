import React from "react";
import DrumPad from "./DrumPad";

class DrumPadContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let letters = "QWEASDZXC".split("");
        let sounds = "Cev_H2.mp3 Dsc_Oh.mp3 Heater-1.mp3 Heater-2.mp3 Heater-3.mp3 Heater-4_1.mp3 Heater-6.mp3 Kick_n_Hat.mp3 RP4_KICK_1.mp3".split(" ");
        let path = "./assets/sounds/";

        return (<div id="drum-pad-container">
            {letters.map((letter, i) => {
                return <DrumPad
                    sound={path + sounds[i]}
                    id={letter}
                >

                </DrumPad>
            })}
        </div>)
    }
}

export default DrumPadContainer;