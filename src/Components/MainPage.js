import React from 'react'
import Header from './Header.js'
import { Link } from 'react-router-dom'

class MainPage extends React.Component {
    render(){
        return(
            <div id='mainpage'>
                <Header />

                <div id='links'>
                    {/* github link */}
                    <a href='https://github.com/ebolten'>
                        <img id='linkgit' src='https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2016/11/github-image-796x418.png'/>
                    </a>
                    {/* medium link */}
                    <a href='https://medium.com/@emilybolten'>
                        <img id='linkmed' src='https://www.digitalartsonline.co.uk/cmsdata/features/3626921/medium-old-logo.png'/>
                    </a>
                    {/* linkedin link */}
                    <a href='https://www.linkedin.com/in/emily-bolten-618942159/'>
                        <img id='linklinked' src='https://nmgprod.s3.amazonaws.com/media/filer_public_thumbnails/filer_public/6e/95/6e951a4e-c8dd-442c-8314-3963b81f3ae4/amc-linkedin-logo-2-640.jpg__640x360_q85_crop_subsampling-2.jpg'/>
                    </a>
                    
                    <br/><br/><br/><br/><br/><br/>

                    <Link to='/projects'>
                        <button id='recentprojects'> See my Recent Projects </button>
                    </Link>

                </div>
            </div>
        )
    }
}
export default MainPage;