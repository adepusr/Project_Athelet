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
            SocialMediaHandles: {},
            linkedin: "",
            facebook:"",
            instagram:"",
            Pets: "",
            Drinks: "",
            Married : "",
            ProfileImage: "data:image/png;base64,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"
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
              let obj = {};
              obj["linkedin"]= this.state.linkedin;
              obj["facebook"]= this.state.facebook;
              obj["instagram"]= this.state.instagram;
              this.state.SocialMediaHandles= obj;
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
                    <button class="btn btn-info addprj2" key={index}>{sport}</button>
                )
            })
        )
      },
      test: function(tt){
        this.setState({
            ProfileImage: tt
        })
      },
      getProfileImage:function(input){     
       if (input.currentTarget.files && input.currentTarget.files[0]) {
        var reader = new FileReader();
        let ProfileImage;
        let test= this.test;
        setTimeout(function() {
            reader.onload = function (e) {
                $('#Image')
                    .attr('src', e.target.result)
                    .width(150)
                    .height(150);
                ProfileImage= e.target.result
                test(ProfileImage);
            };
        }, 0);
        reader.readAsDataURL(input.currentTarget.files[0]);
    }

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
            linkedin: e.target.value
        })
      },
      getFacebook: function(e){        
        this.setState({
            facebook: e.target.value
        })
      },
      getInstagram:function(e){        
        this.setState({
            instagram: e.target.value
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
                <div class="radiooptions">
                <input type="radio" name="gender" value="male" onChange={this.ongenderChanged} class="btn btn-info" checked/><i class="gendericon fa fa-male fa-2x" aria-hidden="true"></i>
                <input type="radio" name="gender" value="female" onChange={this.ongenderChanged} class="btn btn-info"/> <i class="gendericon fa fa-female fa-2x" aria-hidden="true"></i><br/>
            </div>
            )
          }
          else if(this.state.Gender == "female"){
            return(
                <div class="radiooptions">
                <input type="radio" name="gender" value="male" onChange={this.ongenderChanged} class="btn btn-info"/><i class="gendericon fa fa-male fa-2x" aria-hidden="true"></i>
                <input type="radio" name="gender" value="female" onChange={this.ongenderChanged} class="btn btn-info" checked/> <i class="gendericon fa fa-female fa-2x" aria-hidden="true"></i><br/>
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
                        <img id="Image" height="150" src={this.state.ProfileImage}/>
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
                        <input type="text" class="project_textbox association form-control" placeholder = "association" onChange={this.getAssociation} value={this.state.Association}/>
                        <input type="text" class="project_textbox team form-control" placeholder = "team" onChange={this.getTeam} value={this.state.Team}/>
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
                            <input type="text" class="project_textbox linkedin form-control" placeholder = "linkedin" value={this.state.linkedin}  onChange={this.getLinkedin}/>
                            <input type="text" class="project_textbox facebook form-control" placeholder = "facebook" value={this.state.facebook}  onChange={this.getFacebook}/>
                            <input type="text" class="project_textbox instagram form-control" placeholder = "instagram" value={this.state.instagram} onChange={this.getInstagram}/>
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
                    obj.ProfileImage = this.state.ProfileImage;
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