import React from "react";
import ReactDOM from "react-dom";
import "./index.css"
import Car from "./components/Car";
import List from "./components/List";
import Brand from "./components/UL";
import Datatable from "./components/Table";
import Hook from "./components/Hook"

ReactDOM.render(
    <>
        <Datatable />
        <Car age="25" eye="black" />
        <List />
        <Brand />
        <Hook />
    </>
    , document.getElementById("root"));



// stateful / stateless
// class       function
// state       usestate
// props       props