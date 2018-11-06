import React, { Component } from "react";
import PropTypes from "prop-types";

// The form does not clear itself but it’s easy to implement a reset function. 
class WishListForm extends Component {
    static PropTypes = {
        endpoint: PropTypes.string.isRequired
    };

    state = {
        productName: "",
        price: "",
        brand: ""
    };

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = e => {
        e.preventDefault();
        const { productName, price, brand } = this.state;
        const wish = { productName, price, brand };
        const conf = {
            method: "post",
            body: JSON.stringify(wish),
            headers: new Headers({ "Content-Type": "application/json" })
        };
        fetch(this.props.endpoint, conf).then(response => console.log(response) );
    };

    render() {
        const { productName, price, brand } = this.state;
        return (
            <div className="column">
                <form onSubmit={this.handleSubmit}>
                    <div className="field">
                        <label className="label">Product Name</label>
                        <div className="control">
                            <input 
                                className="input"
                                type="text"
                                name="productName"
                                onChange={this.handleChange}
                                value={productName}
                                required
                            /> 
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Price</label>
                        <div className="control">
                            <input
                                className="input"
                                type="text"
                                name="price"
                                onChange={this.handleChange}
                                value={price}
                                required
                            />
                        </div> 
                    </div>
                    <div className="field">
                        <label className="label">Brand</label>
                        <div className="control">
                            <textarea
                                className="textarea"
                                type="text"
                                name="brand"
                                onChange={this.handleChange}
                                value={brand}
                                required
                            />
                        </div>
                    </div>
                    <div className="control">
                        <button type="submit" className="button is-info">
                            Update Item
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default WishListForm;