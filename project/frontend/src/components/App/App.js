import React from "react";
import './App.css';

import DataProvider from "../DataProvider/DataProvider";
import Table from "../Table/Table";
import Form from "../Form/Form";
import WishListForm from "../WishListForm/WishListForm";


const App = () => (
    <React.Fragment>
        <h1>Gift App</h1>
        <div className="App">
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
    </React.Fragment>
);

const wrapper = document.getElementById("app");

wrapper ? ReactDOM.render(<App />, wrapper) : null;