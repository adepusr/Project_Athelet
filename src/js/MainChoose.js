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
            <div class="addprjbtn">
                <button class="btn btn-info addprj"><a href="/PlayersList">LIST</a></button>
                <button class="btn btn-info addprj"><a href="/Register">REGISTER</a></button>
            </div>
        )

    }
});
module.exports=MainChoose;