import React from "react";
import './App.css';

// import ReactDOM from "react-dom";
import DataProvider from "../DataProvider/DataProvider";
import Table from "../Table/Table";
import Form from "../Form/Form";
import GiftList from "../GiftList/GiftList";
import WishListForm from "../WishListForm/WishListForm";

class App extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          items: [],
          currentItem: {text:'', key:''},
        };
    
        this.handleInput = this.handleInput.bind(this);
        this.addItem = this.addItem.bind(this);
    }

    handleInput = e => {
        const itemText = e.target.value;
        const currentItem = {
            text: itemText,
            key: Date.now()
        };
        this.setState({
            currentItem,
        });
    }

    addItem = e => {
        e.preventDefault();
        const newItem = this.state.currentItem;
        if (newItem !== '') {
            console.log(newItem);
            const items = [...this.state.items, newItem];
            this.setState({
                items: items,
                currentItem: { 
                    text: '',
                    key: ''
                }
            });
        }
    }

    render() {
        return (
            <div className="App">
                <h1>Gift App</h1>
                <div className="App">
                    <div className="GiftList">
                        <GiftList 
                            addItem={this.addItem} 
                            inputElement={this.inputElement} 
                            handleInput={this.handleInput}
                            currentItem={this.state.currentItem} 
                        />
                    </div>
                    <div className="Profile">
                        <DataProvider endpoint="api/profile/" 
                            render={data => <Table data={data} />} 
                        />
                        <Form endpoint="api/profile/" />
                    </div>

                    <div className="Wish">
                        <DataProvider endpoint="api/wish/" 
                            render={data => <Table data={data} />} 
                        />
                        <WishListForm endpoint="api/wish/" />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;

// const App = () => (
//     <React.Fragment>
//         <h1>Gift App</h1>
//         <div className="App">
//             <div className="Profile">
//                 <DataProvider endpoint="api/profile/" 
//                     render={data => <Table data={data} />} 
//                 />
//                 <Form endpoint="api/profile/" />
//             </div>

//             <div className="Wish">
//                 <DataProvider endpoint="api/wish/" 
//                     render={data => <Table data={data} />} 
//                 />
//                 <WishListForm endpoint="api/wish/" />
//             </div>
//         </div>
//     </React.Fragment>
// );

// const wrapper = document.getElementById("app");

// wrapper ? ReactDOM.render(<App />, wrapper) : null;