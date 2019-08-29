import React from 'react'
import profile from './profile.JPG'

class OverviewProjects extends React.Component {
    render(){
        return(
            <div id='headeroverview'>
                <img style={{width:'300px',float:'left',margin:'40px'}} src={profile}/>

                <h3 style={{width:'500px',margin:'center',position:'absolute',right:'515px',top:'70px'}}>
                    Emily Bolten is a full-stack web developer with a background in creating web applications 
                    and software. Some of her strongest abilities include writing algorithms and solving 
                    technical programming problems. She has a passion for computer programming and enjoys 
                    learning and working with a variety of programming languages as well as learning new ones.
                </h3>

            </div>
        )
    }
}
export default OverviewProjects;