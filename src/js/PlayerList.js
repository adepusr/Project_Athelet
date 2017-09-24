import React from "react"
import PlayerOne from "./PlayerOne.js"

var PlayerList = React.createClass({
	getInitialState: function() {
			return {
				users: [],
				loaded: false
			}
		},
	getUsersDetails(){
		$.ajax({
            url: '/usersList',
            dataType: 'json',
            cache: false,
            success: function(data) {
                if(data != null){
					this.setState({
						users: data,
						loaded: true
					})
				}
            }.bind(this),
            error: function(xhr, status, err) {
                //console.error(this.props.apiServer, status, err.toString())
            }.bind(this)
        })
	},
	componentWillMount: function(){		
		this.getUsersDetails();
	},
	render: function() {
		if(this.state.loaded){
			let users= this.state.users;
			return(
				<div class="list-group">
				{ users.map(function(user) {
						return( <PlayerOne user= {JSON.stringify(user)} key={user._id} />)
					})
				}
				</div>
			)
		}
		else{
			return(
				<div>Loading Informtion</div>
			)
		}
	}	
});
module.exports = PlayerList;