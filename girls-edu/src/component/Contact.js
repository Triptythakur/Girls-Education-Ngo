import "./Contact.css"
import BackIm from "./BackIm"
import SideComp from "./SideComp"
import Location from "./Location"
const Contact =( )=>
{
    return(
      <div className="im2">
      <div className="ContactImage">
        <BackIm/>
      </div>
      <div className="ContactHeading">
        <h1 className="cont1">CONTACT</h1>
      </div>
      <div className="dev">
      <h1 className="hp">We are EKKKK!</h1>
      </div>
      <SideComp/>
      <div className="Braim">
      <h1 className="branch">OUR BRANCHES</h1>
      </div>
      <Location/>
      </div>
     
    );
}
export default Contact