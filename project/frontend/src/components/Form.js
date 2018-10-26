import React, { Component } from "react";
import PropTypes from "prop-types";

// The form does not clear itself but it’s easy to implement a reset function. 
class Form extends Component {
    static PropTypes = {
        endpoint: PropTypes.string.isRequired
    };

    state = {
        name: "",
        email: "",
        measurements: ""
    };

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = e => {
        e.preventDefault();
        const { name, email, measurements } = this.state;
        const profile = { name, email, message };
        const conf = {
            method: "post",
            body: JSON.stringify(profile),
            headers: new Headers({ "Content-Type": "application/json" })
        };
        fetch(this.props.endpoint, conf).then(response => console.log(response) );
    };

    render() {
        const { name, email, measurements } = this.state;
        return (
            <div className="column">
                <form onSubmit={this.handleSubmit}>
                    <div className="field">
                        <label className="label">Name</label>
                        <div className="control">
                            <input 
                                className="input"
                                type="text"
                                name="name"
                                onChange={this.handleChange}
                                value={name}
                                required
                            /> 
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Email</label>
                        <div className="control">
                            <input
                                className="input"
                                type="email"
                                name="email"
                                onChange={this.handleChange}
                                value={email}
                                required
                            />
                        </div> 
                    </div>
                    <div className="field">
                        <label className="label">Measurements</label>
                        <div className="control">
                            <textarea
                                className="textarea"
                                type="text"
                                name="measurements"
                                onChange={this.handleChange}
                                value={measurements}
                                required
                            />
                        </div>
                    </div>
                    <div className="control">
                        <button type="submit" className="button is-info">
                            Send message
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Form;