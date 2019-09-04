import React from 'react'
import profile from './profile.JPG'
import { Link } from 'react-router-dom'

class OverviewProjects extends React.Component {

    windowHeader = () => {
        if(window.innerWidth < 1500 && window.innerWidth > 900){
            return(
                <div id='headeroverview'>
                    <img style={{width:'300px',float:'left',margin:'40px',display:'flex'}} src={profile}/>

                    <div style={{width:'1000px',margin:'center',dispay:'flex'}}>
                        <br/>
                        <h3>
                            Emily Bolten is a full-stack web developer with a background in creating web applications 
                            and software. Some of her strongest abilities include writing algorithms and solving 
                            technical programming problems. She has a passion for computer programming and enjoys 
                            learning and working with a variety of programming languages as well as learning new ones.
                            <br/><br/><br/>
                            <Link to='/'>
                                <button  id='recentprojectsHome'> Back to Home Page </button>
                            </Link>
                        </h3>
                    </div>
                </div>
            )
        } else{
            return(
                <div id='headeroverviewSMALL'>
                    <img style={{width:'300px',float:'left',margin:'40px',display:'flex'}} src={profile}/>

                    <div style={{width:'800px',margin:'center',dispay:'flex'}}>
                        <br/>
                        <h3>
                            Emily Bolten is a full-stack web developer with a background in creating web applications 
                            and software. Some of her strongest abilities include writing algorithms and solving 
                            technical programming problems. She has a passion for computer programming and enjoys 
                            learning and working with a variety of programming languages as well as learning new ones.
                            <br/><br/>
                            <Link to='/'>
                                <button  id='recentprojectsHome'> Back to Home Page </button>
                            </Link>
                        </h3>
                    </div>
                </div>
            )
        }
    }

    render(){
        return(
            <div>
            
                {console.log(window.innerWidth)}
                {this.windowHeader()}

            </div>
        )
    }
}
export default OverviewProjects;