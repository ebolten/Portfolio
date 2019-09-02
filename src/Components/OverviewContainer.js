import React from 'react'
import OverviewHeader from './OverviewHeader.js'
import Overview from './Overview.js'

class OverviewContainer extends React.Component {
    render(){
        return(
            <div>
                <OverviewHeader/>
                <Overview/>
            </div>
        )
    }
}
export default OverviewContainer;