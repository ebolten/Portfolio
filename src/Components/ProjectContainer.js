import React from 'react'
import ProjectsPage from './ProjectsPage.js'
import HeaderProjects from './HeaderProjects.js'
import { Link } from 'react-router-dom'

class ProjectContainer extends React.Component {
    render(){
        return(
            <div>
                <HeaderProjects/>
                <br/>
                <Link to='/'>
                    <button id='recentprojectsHome'> Back to Home Page </button>
                </Link>
                <br/>
                <ProjectsPage/>
            </div>
        )
    }
}
export default ProjectContainer;