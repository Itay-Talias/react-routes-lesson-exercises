import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/fentity-directory.css";

class Fentities extends Component {
    render() {
        const fentitiesCategor = this.props.match.params.fentities;
        const fentities = this.props.state[fentitiesCategor];
        return (
            <div>
                <h1 id="fentities-title">{fentitiesCategor}</h1>
                <div id="fentities-container">
                    {fentities.map((f, i) => {
                        return (
                            <Link
                                to={`/directory/${fentitiesCategor}/${f.name}`}
                            >
                                <div key={i} className="mini">
                                    <img
                                        className="directory-img"
                                        src={f.imgUrl}
                                        alt=""
                                    />
                                    <span>{f.name}</span>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default Fentities;
