# Project_Athelet

## Project Working URL: http://ec2-18-220-71-110.us-east-2.compute.amazonaws.com/choose

# Technologies used ***MERN Stack ***<br/>
<br/>
* REACT 
* MONGODB 
* NODE
* EXPRESS
<br/><br/>

The project has 3 routes <br/>
a) /choose  -- (options to select Register or view previous records)<br/>
b) /Register  -- (Registration)<br/>
c) /PlayersList  -- (List of previous registered users)<br/><br/>
<br/><br/>

## Steps after downloading Sourse Code <br/>
npm install <br/>
npm install -g nodemon <br/>
nodemon  <br/>
npm run dev <br/>

# API
## GET: http://ec2-18-220-71-110.us-east-2.compute.amazonaws.com/usersList <br/>
## POST: http://ec2-18-220-71-110.us-east-2.compute.amazonaws.com/usersList <br/>

(takes imput as JSON body having 
Sample Structure
{    
    "Name": "Open SponserShip",
    "DOB": "Mon Sep 25 2017 00:36:06 GMT-0400 (Eastern Daylight Time)",
    "Nationality": "USAA",
    "Location": "California",
    "Association": "CS",
    "Team": "Software",
    "Gender": "Male",
    "Sports": [
        "Golf",
        "Cricket",
        "Basketball"
    ],
    "About": "reamwork",
    "Interests": "Development, Designing",
    "Charities": "Career",
    "SocialMediaHandles": {
        "linkedin": "https://www.linkedin.com/company/5341686/",
        "facebook": "https://www.linkedin.com/company/5341686/",
        "instagram": "https://www.linkedin.com/company/5341686/"
    },
    "ProfileImage": "data:image/jpeg;base64,/9j/Fs4usSYpbtpfnu+URzL"
})
