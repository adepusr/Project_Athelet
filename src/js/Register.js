import React from "react"
import Summary from "./Summary.js"
var DatePicker = require('react-datetime');
var moment = require('moment');

var Register = React.createClass({
	getInitialState: function() {
        return {
            tabNumber : 1,
            sportList: ["Golf","Tennis","Cricket","Basketball","Baseball", "American Football","Aquatics","Archery","Automobile Racing",
                "Badminton","Beach Volleyball","Bobsleigh","Body Building","Boxing", "Cross Country Running","Cross Country Skiing","Curling","Cycling",
                "Darts","Decathlon","Down Hill Skiing","Equestrianism", "eSports", "Fencing", "Field Hockey", "Figure Skating", "Gymnastics",
                "Ice Hockey", "Martial Arts", "Mixed Martial Arts","Modern Pentathlon", "Motorcycle Racing", "Netball", "Polo","Racquetball","Rowing",
                "Rugby", "Sailing",  "Softball", "Shooting", "Skateboarding", "Skeet Shooting",  "Skeleton","Snow Boarding", "Soccer", "Squash",  "Surfing",   "Swimming","Track and Field"],
            Name: "",
            Nationality: "",
            DOB : new Date(),
            Location : "",
            Association : "",
            Team : "",
            Gender : "Male",
            Sports : [],
            About: "",
            Interests: "",
            Charities: "",
            SocialMediaHandles: {
            },
            Pets: "",
            Drinks: "",
            Married : "",
            ProfileImage: ""
        }
    },
    onChangeDate:function(e){
        let newDate = e.format('YYYY-MM-DD HH:mm:ss');
        this.setState({
            DOB : newDate
        })
    },
    previousPage: function(){
        this.setState({
            tabNumber: this.state.tabNumber-1
      })
    },
    selectedSports: function(e){
        var options = e.target.options;
        var value = [];
        for (var i = 0, l = options.length; i < l; i++) {
          if (options[i].selected) {
            value.push(options[i].value);
          }
        }
        this.setState({
            Sports : value
        })
    },
    ongenderChanged: function (e) {
        this.setState({
          Gender: e.currentTarget.value
          });
      },
    sportsList: function(){
            return(
                <select size="6" onChange={ this.selectedSports } value={this.state.Sports} multiple="multiple" class="project_textbox form-control">                   
                {this.state.sportList.map(function(sport, index){
                    return (<option key={index} value={sport}>{sport}</option>)
                })}
                </select>
            )
    },
    getMomentDate(date) {
        if(date==null) {
          return null;
        }
        var momentDate = moment(date, 'YYYY-MM-DD HH:mm:ss');
        return momentDate;
      },
      nextPage:function(){
          if(this.state.tabNumber== 1){              
            if(this.state.Name != "" && this.state.Nationality !="" && this.state.Gender !="" && this.state.Sports != [] ){
                console.log("true")
                this.forward();
            }
            else{
                alert('Fill all the spaces');
            }
          }
          else if(this.state.tabNumber ==2){
            if(this.state.Location != "" && this.state.Team !="" && this.state.Association !="" ){
                this.forward();
            }else{                
                alert('Fill all the spaces');
            }
          }
          else if(this.state.tabNumber ==3){
                this.forward();          
            }

      },
      forward: function(){          
        this.setState({
                tabNumber: this.state.tabNumber+1
        })
      },
      selectedList: function(){
        return(
            this.state.Sports.map(function(sport,index){
                return(
                    <button key={index}>{sport}</button>
                )
            })
        )
      },
      getProfileImage:function(e){
       //Yet to be added

      },
      getName: function(e){
          this.setState({
              Name : e.target.value
          })
      },
      getNationality: function(e){
        this.setState({
            Nationality : e.target.value
        })
      },
      getAssociation: function(e){
        this.setState({
            Association : e.target.value
        })
      },
      getLocation: function(e){
        this.setState({
            Location : e.target.value
        })
      },
      getTeam: function(e){
        this.setState({
            Team : e.target.value
        })
      },
      getAbout: function(e){
        this.setState({
            About : e.target.value
        })
      },
      getInterests:function(e){
        this.setState({
            Interests : e.target.value
        })
      },
      getLinkedin:function(e){
        this.setState({           
            SocialMediaHandles:{
                linkedin :  e.target.value
            }
        })
      },
      getFacebook: function(e){
        this.setState({
            SocialMediaHandles:{
                facebook :  e.target.value
            }
        })
      },
      getInstagram:function(e){
        this.setState({
            SocialMediaHandles:{
                instagram :  e.target.value
        }
        })
      },
      getCharities: function(e){
        this.setState({
            Charities: e.target.value
        })
      },
      genderRadio(){
          if(this.state.Gender == "Male"){
            return(
                <div>
                <input type="radio" name="gender" value="male" onChange={this.ongenderChanged} class="btn btn-info" checked/><i class="fa fa-male fa-2x" aria-hidden="true"></i>
                <input type="radio" name="gender" value="female" onChange={this.ongenderChanged} class="btn btn-info"/> <i class="fa fa-female fa-2x" aria-hidden="true"></i><br/>
            </div>
            )
          }
          else if(this.state.Gender == "female"){
            return(
                <div>
                <input type="radio" name="gender" value="male" onChange={this.ongenderChanged} class="btn btn-info"/><i class="fa fa-male fa-2x" aria-hidden="true"></i>
                <input type="radio" name="gender" value="female" onChange={this.ongenderChanged} class="btn btn-info" checked/> <i class="fa fa-female fa-2x" aria-hidden="true"></i><br/>
            </div>
            )
          }
        
      },
    render(){
        let DOB = new Date();
        if(this.state.tabNumber == 1){
            return(
                <div><h3>Basic Info: name, sport, nationality, gender, date of birth</h3>
                    <input type="text" class="project_textbox name form-control" placeholder = "name" onChange={this.getName} value={this.state.Name}/>
                    <input type="text" class="project_textbox nationality form-control" placeholder = "nationality" onChange={this.getNationality} value={this.state.Nationality}/>
                    {this.genderRadio()}
                    <div>
                            {this.sportsList()}
                    </div><br/>
                    {this.selectedList()}
                    <br/>
                    <div class="datepicker">
                    <h5>Date of Birth: </h5><DatePicker id ="datepicked"class="project_textbox" closeOnSelect={true} value={this.state.DOB} onChange={this.onChangeDate} placeholder="DateOfBirth"/>
                    </div>
                    <div>
                        <input type="file" class="btn btn-info addprj" accept='image/*' id="profileImage" onChange={this.getProfileImage}/>
                        <img id="Image" height="150"/>
                    </div>
                    <div>
                        <button class="btn btn-info addprj" onClick={this.nextPage} >NEXT PAGE</button>
                    </div>
                </div>
            )
        }
        else{
            if(this.state.tabNumber == 2){
                return(
                    <div><h3>About: description, location, team etc</h3>
                    <div class="textbox">
                    <textarea cols="20" rows="6" type="text" class="project_textbox about form-control" value= {this.state.About} placeholder = "About" onChange={this.getAbout}/>
                    </div>
                    <input type="text" class="project_textbox interests form-control" placeholder = "Interests" onChange={this.getInterests} value={this.state.Interests}/>
                    <input type="text" class="project_textbox charities form-control" placeholder = "Charities" onChange={this.getCharities} value= {this.state.Charities}/>
                        <input type="text" class="project_textbox location form-control" placeholder = "location" onChange={this.getLocation} value={this.state.Location}/>
                        <input type="text" class="project_textbox association form-control" placeholder = "team" onChange={this.getAssociation} value={this.state.Association}/>
                        <input type="text" class="project_textbox team form-control" placeholder = "team" onChange={this.getTeam}/>
                        <div>
                            <button class="btn btn-info addprj" onClick={this.previousPage}>PREVIOUS PAGE</button>
                            <button class="btn btn-info addprj" onClick={this.nextPage} >NEXT PAGE</button>
                        </div>
                    </div>
                )
            }
            else{
                if(this.state.tabNumber == 3){                    
                    return(
                        <div><h3>Social Media: handles</h3>
                            <input type="text" class="project_textbox linkedin form-control" placeholder = "linkedin" value={this.state.SocialMediaHandles.linkedin} onChange={this.getLinkedin}/>
                            <input type="text" class="project_textbox facebook form-control" placeholder = "facebook" value={this.state.SocialMediaHandles.facebook} onChange={this.getFacebook}/>
                            <input type="text" class="project_textbox instagram form-control" placeholder = "instagram" value={this.state.SocialMediaHandles.instagram} onChange={this.getInstagram}/>
                            <div>
                                <button class="btn btn-info addprj" onClick={this.previousPage}>PREVIOUS PAGE</button>
                                <button class="btn btn-info addprj" onClick={this.nextPage} >NEXT PAGE</button>
                            </div>
                        </div>
                    )
                }
                else{
                    if(this.state.tabNumber == 4){                        
                    let obj ={};
                    obj.Name=this.state.Name;
                    obj.DOB=this.state.DOB;
                    obj.Nationality = this.state.Nationality;
                    obj.Location = this.state.Location;
                    obj.Association = this.state.Association;
                    obj.Team = this.state.Team;
                    obj.Gender = this.state.Gender;
                    obj.Sports =this.state.Sports;
                    obj.About = this.state.About;
                    obj.Interests = this.state.Interests;
                    obj.Charities = this.state.Charities;
                    obj.SocialMediaHandles = this.state.SocialMediaHandles;
                    obj.Pets = this.state.Pets;
                    obj.Drinks = this.state.Drinks;
                    obj.Married = this.state.Married;
                    obj.ProfileImage = this.ProfileImage;
                    return(
                        <div><h3>Summary:</h3>
                            <Summary obj={obj} nextPage={this.nextPage} previousPage={this.previousPage}/>
                        </div>
                    )
                    }
                    else{
                        return(
                            <div><h3>REVIEW AND SUBMIT</h3>
                            </div>
                        )
                    }
                }
            }
        }        

    }
});
module.exports=Register;