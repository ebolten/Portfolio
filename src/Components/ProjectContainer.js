import React from 'react'
import ProjectsPage from './ProjectsPage.js'
import HeaderProjects from './HeaderProjects.js'
import { Link } from 'react-router-dom'

class ProjectContainer extends React.Component {

    windowBtn = () => {
        if(window.innerWidth < 1500 && window.innerWidth > 900){
            return(
                <Link to='/'>
                    <button id='recentprojectsHome'> Back to Home Page </button>
                </Link>
            )
        }else{
            return(
                <Link to='/'>
                    <button id='recentprojectsHomeSMALL'> Back to Home Page </button>
                </Link>
            )
        }
    }

    render(){
        return(
            <div>
                <HeaderProjects/>
                <br/>
                {this.windowBtn()}
                <br/>
                <ProjectsPage/>
            </div>
        )
    }
}
export default ProjectContainer;