import React from "react";

class GiftList extends React.Component {
    componentDidMount() {
        this.props.inputElement.current.focus()
    }

    render() {
        return (
            <div className="GiftList">
                <div className="header">
                    <form id="giftListForm" onSubmit={this.props.addItem}>
                        <input 
                            placeholder="Gift List" 
                            ref={this.props.inputElement}
                            value={this.props.currentItem.text}
                            onChange={this.props.handleInput}
                        />
                        <button type="submit">Add Gift</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default GiftList;