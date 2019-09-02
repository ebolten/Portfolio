import React from 'react'
import profile from './profile.JPG'
import { Link } from 'react-router-dom'

class OverviewProjects extends React.Component {
    render(){
        return(
            <div id='headeroverview'>
                <img style={{width:'300px',float:'left',margin:'40px',display:'flex'}} src={profile}/>

                <div style={{width:'1000px',margin:'center',dispay:'flex'}}>

                    <h3>
                        Emily Bolten is a full-stack web developer with a background in creating web applications 
                        and software. Some of her strongest abilities include writing algorithms and solving 
                        technical programming problems. She has a passion for computer programming and enjoys 
                        learning and working with a variety of programming languages as well as learning new ones.
                    </h3>

                    <br/><br/><br/><br/><br/><br/>

                    <Link to='/'>
                        <button style={{right:'25%'}} id='recentprojectsHome'> Back to Home Page </button>
                    </Link>

                </div>

            </div>
        )
    }
}
export default OverviewProjects;