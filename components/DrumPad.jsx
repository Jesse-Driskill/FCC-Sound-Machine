import React from "react";

class DrumPad extends React.Component {
    constructor(props) {
        super(props);
        this.playSound = this.playSound.bind(this);
    }

    playSound() {
        let audioElement = document.getElementById(this.props.id);
        audioElement.currentTime = 0;
        audioElement.play();
        audioElement.parentElement.classList.add("pressed");
        setTimeout(() => {
            audioElement.parentElement.classList.remove("pressed");
        }, 70)
    }

    render() {
        return (<div className="drum-pad" id={"drum-pad" + this.props.id} onClick={this.playSound}>
            {this.props.id}
            <audio className="clip" id={this.props.id} src={this.props.sound}> 
            </audio>
            
        </div>)
    }
}

export default DrumPad;