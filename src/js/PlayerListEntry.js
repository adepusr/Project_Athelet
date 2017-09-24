import React from "react";
import ReactDOM from "react-dom";


// for the test page
import PlayerList from "./PlayerList";


const playersListApp = document.getElementById('playersListApp');
ReactDOM.render(<PlayerList />, playersListApp);