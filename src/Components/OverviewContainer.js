import React from 'react'
import OverviewHeader from './OverviewHeader.js'
import Overview from './Overview.js'

class OverviewContainer extends React.Component {
    render(){
        return(
            <div>
                <OverviewHeader/>

                {/*
                <h3>
                    Emily Bolten is a full-stack web developer with a background in creating web applications 
                    and software. Some of her strongest abilities include writing algorithms and solving 
                    technical programming problems. She has a passion for computer programming and enjoys 
                    learning and working with a variety of programming languages as well as learning new ones.
                </h3>
                */}

                <Overview/>
            </div>
        )
    }
}
export default OverviewContainer;