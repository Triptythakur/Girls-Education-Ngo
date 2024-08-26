import "./SideComp.css"
import pexels from "./Images/pexels.webp"
const SideComp=( )=>{
    return(
      <div className="bord">
        <img src={pexels} className="imp"></img>
        <div className="into">
           
            <ul style={{listStyleType:'none'}}>
                <h1 className="cnt">Contact</h1>
                <h1 className="hwd">Empower Girls Foundation</h1>
                <li >We are dedicated to empowering girls through education and support. Reach out to us via the following contact details, or visit our office to learn more about our programs and initiatives.</li>
                <li>
                    <h1 className="hwd">Head Office Address:</h1><br/>EKK! Foundation<br/>1234 Education Lane<br/>Suite 200<br/>Springfield, IL 62701<br/>India </li>
                <h1 className="hwd">Contact Information:</h1>
                <li>Phone: +91#########</li>
                <li>Email: info@EKK.org</li>
                <h1  className="hwd">Office Hours:</h1>
                <li>Monday to Friday: 9:00 AM - 5:00  <br/>
                    Saturday: 10:00 AM - 2:00 PM<br/>
                    Sunday: Closed</li>
                
            </ul>
        </div>
      </div>
    );
}
export default SideComp