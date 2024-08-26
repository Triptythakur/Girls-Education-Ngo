import "./Intro.css"
import  girlgraduated from "./Images/girlgraduated.png"
import MV from './MV'
const Intro = ( ) =>{
   return(
        <div className = "ext">
            <div className="f">
              <img src = {girlgraduated} alt ="it" className="f1"></img>
            </div>
            <div className="s">
               <MV/>
            </div>
        </div>
   );
}
export default Intro