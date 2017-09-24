import React from "react"
var DatePicker = require('react-datetime');
var moment = require('moment');

var Register = React.createClass({
	getInitialState: function() {
        return {
            date : new Date()
        }
    },
    onChangeDate:function(e){
        let newDate = e.format('YYYY-MM-DD HH:mm:ss');
        this.setState({
            date : newDate
        })
    },
    
    getMomentDate(date) {
        if(date==null) {
          return null;
        }
        var momentDate = moment(date, 'YYYY-MM-DD HH:mm:ss');
        return momentDate;
      },
    render(){
        let date = new Date();
        return(
            <div><h3>Basic Info: name, sport, nationality, gender, date of birth</h3>
                <input type="text" class="name form-control" placeholder = "name" required/>
                <input type="text" class="nationality form-control" placeholder = "nationality" required/>
                <div>
                    <input type="radio" name="gender" value="male" /><i class="fa fa-male fa-2x" aria-hidden="true"></i>
                    <input type="radio" name="gender" value="female" /> <i class="fa fa-female fa-2x" aria-hidden="true"></i><br/>
                </div>
                <DatePicker closeOnSelect={true} value={this.getMomentDate(this.state.endValueByValue)} onChange={this.onChangeDate} />
                <div>
                    <button onClick="">PREVIOUS PAGE</button>
                    <button onClick="" >NEXT PAGE</button>
                </div>
            </div>
        )

    }
});
module.exports=Register;