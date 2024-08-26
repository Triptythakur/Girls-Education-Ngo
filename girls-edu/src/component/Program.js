import "./Program.css"
import Prog from  "./Prog"
import Work1 from "./Work1"

import OurGallery from "./OurGallery";
const Program =( )=>{
    return(
      <div>
      <Prog/>
      <div className="Fl">
      <h1 className="head">Our Program</h1>
      </div>
      <OurGallery/>
      <Work1/>
      </div>
    );
}
export default Program