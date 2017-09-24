import React from "react"
var DatePicker = require('react-datetime');
var moment = require('moment');

var Summary = React.createClass({
    getInitialState: function(){
        return({
            finalDetails : this.props.obj
        })
    },
    submitDetails: function(){
        
    },
    render(){
        <div>
            <input type="button" value="SUBMIT" onClick={this.submitDetails}/>
        </div>

    }
});
module.exports = Summary;