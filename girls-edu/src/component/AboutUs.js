
import './AboutUs.css'
import AboutFront from './AboutFront';
import NGOIm from "./NGOIm"
import maps from "./Images/maps.jpg"
const AboutUs = ( )=>{
 return(
    <div>
        <div>
            <AboutFront/>
            <NGOIm/>
            <h4 className='cont'>Our conatact</h4>
            <ul className='List'>
                <li className='L'>knn11@gmail.com</li>
                <li className='L'>https://in.search.com/</li>
                <li className='L'>https://in.linkeedin</li>
            </ul>
            <img src={maps} className='Map'></img>
        </div>
    </div>
    
 );
}
export default AboutUs;