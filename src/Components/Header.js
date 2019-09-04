import React from 'react'
import { Link } from 'react-router-dom'

class Header extends React.Component {

    windowHeader = () => {
        if(window.innerWidth < 1500 && window.innerWidth > 900){
            return(
                <div>
                    <br/>
                    <div id='headertext'>
                        <h1> 𝐄𝐦𝐢𝐥𝐲 𝐁𝐨𝐥𝐭𝐞𝐧 </h1>
                        <h5> 𝐅𝐮𝐥𝐥 𝐒𝐭𝐚𝐜𝐤 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫 </h5>
                    </div>
                </div>
            )
        }else{
            return(
                <div>
                    <br/>
                    <div id='headertextSMALL'>
                        <h1> 𝐄𝐦𝐢𝐥𝐲 𝐁𝐨𝐥𝐭𝐞𝐧 </h1>
                        <h5> 𝐅𝐮𝐥𝐥 𝐒𝐭𝐚𝐜𝐤 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫 </h5>
                    </div>
                </div>
            )
        }
    }

    render(){
        return(  
            <div id='header'>
                {this.windowHeader()}
            </div>
        )
    }
}
export default Header;