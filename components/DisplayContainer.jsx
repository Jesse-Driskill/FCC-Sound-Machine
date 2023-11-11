import React from "react";
import Display from "./Display";
import { mapStateToProps } from "../redux/redux";
import { connect } from "react-redux";



class DisplayContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div id="display-container">Display Container
            <Display display={this.props.display}/>
        </div>
    }
}


export default connect(mapStateToProps, null)(DisplayContainer);