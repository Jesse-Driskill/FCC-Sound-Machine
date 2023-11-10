import React from "react";

class DrumPad extends React.Component {
    constructor(props) {
        super(props);
    }

    playSound() {

    }

    render() {
        return (<div className="drum-pad" id={this.props.id}>
            Drumpad: {this.props.id} {this.props.sound}
            <audio> 
            <source type="audio/mp3" src={this.props.sound}>
            </source>

            </audio>
            
        </div>)
    }
}

export default DrumPad;