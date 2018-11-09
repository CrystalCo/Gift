import React from "react";
import ReactDOM from "react-dom";
import DataProvider from "./DataProvider";
import Table from "./Table";
import Form from "./Form";
import WishListForm from "./WishListForm";

const App = () => (
    <React.Fragment>
        <DataProvider endpoint="api/profile/" 
            render={data => <Table data={data} />} 
        />
        <Form endpoint="api/profile/" />

        <DataProvider endpoint="api/wish/" 
            render={data => <Table data={data} />} 
        />
        <Form endpoint="api/wish/" />
    </React.Fragment>
);

const wrapper = document.getElementById("app");

wrapper ? ReactDOM.render(<App />, wrapper) : null;