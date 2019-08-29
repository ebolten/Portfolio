import React from 'react'
import ProjectsPage from './ProjectsPage.js'
import HeaderProjects from './HeaderProjects.js'

class ProjectContainer extends React.Component {
    render(){
        return(
            <div>
                <HeaderProjects/>
                <ProjectsPage/>
            </div>
        )
    }
}
export default ProjectContainer;