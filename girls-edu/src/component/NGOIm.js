import "./NGOIm.css"
import th3 from "./Images/th3.jpeg"
import th2 from "./Images/th2.jpeg"
import th1 from "./Images/th1.jpeg"
import th4 from "./Images/th4.jpeg"
import th5 from "./Images/th5.jpeg"
import th6 from "./Images/th6.jpg"

const NGOIm=( )=>{

    return( 
        <div className="immm">
            <h1 className="Infa">Our Infrastructure</h1>
            <div className="Infa1">
            <img src={th3} className="Infa11" ></img>
            
            <img src={th2} className="Infa11"></img>
            </div>
            <div className="Infa1">
            <img src={th1} className="Infa11"></img>
            <img src={th4} className="Infa11"></img>
            
            </div>
            <div className="Infa1">
            <img src={th5} className="Infa11"></img>
            <img src={th6} className="Infa11"></img>
            
            </div>
        </div>
    );
}
export default NGOIm