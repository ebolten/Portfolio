import React from 'react'
import Header from './Header.js'
import { Link } from 'react-router-dom'
import github from './ICONS/githubicon.png'
import linkedin from './ICONS/linkedinicon.png'
import medium from './ICONS/mediumicon.svg'

class MainPage extends React.Component {
    render(){
        return(
            <div id='mainpage'>
                <Header />

                <div id='links'>
                    {/* github link */}
                    <a href='https://github.com/ebolten'>
                        <img id='linkgit' src={github}/>
                    </a>
                    {/* medium link */}
                    <a href='https://medium.com/@emilybolten'>
                        <img id='linkmed' src={medium}/>
                    </a>
                    {/* linkedin link */}
                    <a href='https://www.linkedin.com/in/emily-bolten-618942159/'>
                        <img id='linklinked' src={linkedin}/>
                    </a>
                    
                    <br/><br/><br/><br/><br/><br/>

                    <Link to='/projects'>
                        <button id='recentprojects'> See my Recent Projects </button>
                    </Link>
                    <Link to='/overview'>
                        <button id='recentprojects'> See my Skills and Brand </button>
                    </Link>

                </div>
            </div>
        )
    }
}
export default MainPage;