import React from 'react'

class HeaderProjects extends React.Component {

    windowHeader = () => {
        if(window.innerWidth < 1500 && window.innerWidth > 900){
            return(
                <div id='headerprojects'>
                    <h1 id='projectstext'> My Recent Projects </h1>
                </div>
            )
        } else{
            return(
                <div id='headerprojectsSMALL'>
                    <h1 id='projectstext'> My Recent Projects </h1>
                </div>
            )
        }
    }

    render(){
        return(
            <div>
                {this.windowHeader()}
            </div>
        )
    }
}
export default HeaderProjects;