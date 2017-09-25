import React from "react"

var PlayerOne = React.createClass({
	getInitialState: function() {
			return {
				userDetails:  JSON.parse(this.props.user),
				loaded: false
			}
        },
    genderIcon: function(){
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
                       <img src={this.state.userDetails.ProfileImage} class="Profileimage"/>
                    </div>
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
                       <h3>Team: <i>{this.state.userDetails.Team}</i></h3>
                    </div>
                    <div>
                       <h3>About: {this.state.userDetails.About}</h3>
                    </div>
                    <div>
                       <h3>Association: {this.state.userDetails.Association}</h3>
                    </div>
                    <div>
                       <h3>Charity: {this.state.userDetails.Charities}</h3>
                    </div>
                    <div id="menu-outer">
                        <div class="table">
                            <h3>Sports: </h3><br/>
                            <ul id="horizontal-list">
                            {this.state.userDetails.Sports.map(function(sport){
                            return(
                                <li>{sport}</li>
                            )
                            })}
                            </ul>
                        </div><br/>
                    </div><h3>Connect me through: </h3>
                    {this.socialHandlers1()}
                    {this.socialHandlers2()}
                    {this.socialHandlers3()}
                </div>
			)
    },
    socialHandlers1: function(){
        if(this.state.userDetails.SocialMediaHandles.facebook !="")
        return(
            <button class="btn btn-info" ><a href={this.state.userDetails.SocialMediaHandles.facebook}>Facebook</a></button>
        )
        else{
            return(
                <button class="btn btn-info disabled" ><a>Facebook</a></button>
            )
        }
    },	
    socialHandlers2: function(){
        if(this.state.userDetails.SocialMediaHandles.linkedin !="")
        return(
            <button class="btn btn-info" ><a href={this.state.userDetails.SocialMediaHandles.linkedin}>Linkedin</a></button>
        )
        else{
            return(
                <button class="btn btn-info disabled" ><a>linkedin</a></button>
            )
        }
    },
    socialHandlers3: function(){
        if(this.state.userDetails.SocialMediaHandles.instagram !="")
        return(
            <button class="btn btn-info" ><a href={this.state.userDetails.SocialMediaHandles.instagram}>Linkedin</a></button>
        )
        else{
            return(
                <button class="btn btn-info disabled" ><a>Instagram</a></button>
            )
        }
    }		
});
module.exports = PlayerOne;