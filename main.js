import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<h1>React is working!</h1>)
    }
}

document.addEventListener("DOMContentLoaded", () => {
    let main = document.getElementById("main");
    ReactDOM.render(<App/>, main);
});
