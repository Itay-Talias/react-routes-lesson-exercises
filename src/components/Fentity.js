import React, { Component } from "react";
import "../styles/fentity.css";

class Fentity extends Component {
    render() {
        const fentitiesCategor = this.props.match.params.fentities;
        const fentities = this.props.state[fentitiesCategor];
        const fentityName = this.props.match.params.name;
        const fentity = fentities.find((f) => f.name === fentityName);
        console.log(fentity);
        return (
            <div id="creature-container">
                {console.log(fentity)}
                <h1>{fentity.name}</h1>
                <img src={fentity.imgUrl} alt="" />
                <div className="title">Power:</div>
                <div className="power text"> {fentity.power}</div>
                <div className="other text">{fentity.other}</div>
            </div>
        );
    }
}

export default Fentity;
