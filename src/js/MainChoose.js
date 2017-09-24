import React from "react"
import PlayerList from "./PlayerList";
import Register from "./Register";

var MainChoose = React.createClass({
	getInitialState: function() {
			return {
			}
        },
    render(){
        return(
            <div>
                <button ><a href="/PlayersList">LIST</a></button>
                <button ><a href="/Register">REGISTER</a></button>
            </div>
        )

    }
});
module.exports=MainChoose;