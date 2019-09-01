import React from 'react'
import OverviewHeader from './OverviewHeader.js'
import javaicon from './ICONS/javaicon.png'
import railsicon from './ICONS/railsicon.png'
import djangoicon from './ICONS/djangoicon.jpg'
import javascripticon from './ICONS/javascripticon.png'
import pythonicon from './ICONS/pythonicon.ico'
import rubyicon from './ICONS/rubyicon.png'
import sqlicon from './ICONS/sqlicon.jpg'
import postgresicon from './ICONS/postgresicon.png'
import giticon from './ICONS/giticon.png'
import backendicon from './ICONS/backendicon.png'
import frontendicon from './ICONS/frontendicon.jpg'
import skillsicon from './ICONS/skillsicon.png'
import htmlicon from './ICONS/htmlicon.png'
import cssicon from './ICONS/cssicon.png'
import { Link } from 'react-router-dom'

class Overview extends React.Component {
    render(){
        return(
            <div id='overviewcards'>

                {/* frontend developer skills */}
                <div className='card'>
                    <h1 className='container'> Frontend <img style={{width:'70px'}} src={frontendicon}/> </h1>
                        <p style={{fontSize:'20px'}}> <img style={{width:'40px',height:'40px'}} id='icon' src={javascripticon}/> Vanilla JavaScript </p>
                        <p style={{fontSize:'20px'}}> <img style={{width:'40px',height:'40px'}} id='icon' src={htmlicon}/> HTML5 </p>
                        <p style={{fontSize:'20px'}}> <img style={{width:'30px',height:'30px'}} id='icon' src={cssicon}/> CSS3 </p>
                        <p style={{fontSize:'20px'}}> <img style={{width:'30px',height:'30px'}} id='icon' src={djangoicon}/> Python's Django Framework </p>
                        <p style={{fontSize:'20px'}}> <img style={{width:'30px',height:'30px'}} id='icon' src={railsicon}/> Ruby On Rails </p>
                </div>
                {/* backend developer skills */}
                <div className='card'>
                    <h1 className='container'> Backend <img style={{width:'70px'}} src={backendicon}/> </h1>
                    <p style={{fontSize:'20px'}}> <img style={{width:'30px',height:'30px'}} id='icon' src={javaicon}/> Java / JavaFX Framework </p>
                    <p style={{fontSize:'20px'}}> <img style={{width:'30px',height:'30px'}} id='icon' src={pythonicon}/> Python / PyQt5 Framework </p>
                    <p style={{fontSize:'20px'}}> <img style={{width:'20px',height:'20px'}} id='icon' src={rubyicon}/> Ruby </p>
                    <p style={{fontSize:'20px'}}> <img style={{width:'20px',height:'20px'}} id='icon' src={sqlicon}/> SQL Databases </p>
                    <p style={{fontSize:'20px'}}> <img style={{width:'20px',height:'20px'}} id='icon' src={postgresicon}/> Postgres SQL Databases </p>
                </div>
                {/* other skills */}
                <div className='card'>
                    <h1 className='container'> Other Skills <img style={{width:'70px'}} src={skillsicon}/> </h1>
                    <p style={{fontSize:'20px'}}> <img style={{width:'20px',height:'20px'}} id='icon' src={giticon}/> Git Commands </p>
                </div>

            </div>
        )
    }
}
export default Overview