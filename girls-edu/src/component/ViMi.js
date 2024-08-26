import './ViMi.css'
import download from "./Images/download.png"
import M from "./M"
const ViMi =()=>{
    return(
    <div className="Vision">
          <div className="photo">
             <img src={download} alt="m" className="ig"></img>
          </div>
          <div classNmae="mvv">
            <M/>
          </div>
    </div>
    );
}
export default ViMi