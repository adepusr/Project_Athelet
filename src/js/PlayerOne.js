import React from "react"

var PlayerOne = React.createClass({
	getInitialState: function() {
			return {
				userDetails: this.props.user,
				loaded: false
			}
        },
    genderIcon: function(){
        console.log(this.state.userDetails.Gender)
        if(this.state.userDetails.Gender == "Male"){
            return(
                <i class="fa fa-male fa-3x" aria-hidden="true"></i>
            )
        }
        else{
            return(
                <i class="fa fa-female fa-3x" aria-hidden="true"></i>
            )
        }
    },
	render: function() {
        let genderIcon= this.genderIcon;
			return(
                <div class="list-group-item">
                   <div>
                       <h3>Name: {this.state.userDetails.Name}</h3>
                    </div>
                    <div>
                       <h3>Nationality: {this.state.userDetails.Nationality}</h3>
                    </div>
                    <div>
                        {genderIcon()}
                    </div>
                    <div>
                       <h3>Date Of Birth: {this.state.userDetails.DOB}</h3>
                    </div>
                    <div>
                       <h3>Marrage Status: {this.state.userDetails.Married}</h3>
                    </div>
                    {/* <div>
                       <h3>{this.state.userDetails.Pets}</h3>
                    </div>
                    <div>
                       <h3>{this.state.userDetails.ProfileImage}</h3>
                    </div>
                    <div>
                       <h3>{this.state.userDetails.Team}</h3>
                    </div>
                    <div>
                       <h3>{this.state.userDetails.Drinks}</h3>
                    </div>
                    <div>
                       <h3>{this.state.userDetails.About}</h3>
                    </div>
                    <div>
                       <h3>{this.state.userDetails.Association}</h3>
                    </div>
                    <div>
                       <h3>{this.state.userDetails.Charity}</h3>
                    </div> */}
                    {/* <div>
                        <ul>
                       {this.state.userDetails.Sports.map(function(sport){
                           return(
                               <li>sport</li>
                           )
                       })}
                       </ul>
                    </div>
                    <div>
                       <h3>{this.state.userDetails.SocialMediaHandles.Facebook}</h3>
                       <h3>{this.state.userDetails.SocialMediaHandles.Twitter}</h3>
                       <h3>{this.state.userDetails.SocialMediaHandles.Instagram}</h3>
                    </div> */}
                </div>
			)
	}	
});
module.exports = PlayerOne;