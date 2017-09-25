import React from "react"
import PlayerOne from "./PlayerOne.js";
var DatePicker = require('react-datetime');
var moment = require('moment');

var Summary = React.createClass({
    getInitialState: function(){
        return({
            finalDetails : this.props.obj
        })
    },
    submitDetails: function(){
        let finalDetails = this.state.finalDetails;
        setTimeout(function() {
            $.post('/usersList',
               {
                   user: finalDetails
               }, function(result) {
                   if(result == "ok"){
                       console.log("ok");
                       window.location.href = "/Playerslist"
                   }
              })
            }, 0)
        
    },
    render(){
        console.log(this.state.finalDetails)
        return(
            <div>
                <PlayerOne user= {JSON.stringify(this.state.finalDetails)}/>
                <input type="button" class="btn btn-info addprj" value="BACK" onClick={this.props.previousPage}/>
                <input type="button" class="btn btn-info addprj" value="SUBMIT" onClick={this.submitDetails}/>
            </div>
        )
    }
});
module.exports = Summary;