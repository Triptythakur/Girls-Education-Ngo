import "./Work1.css"
import quality from "./Images/quality.png"
import book from "./Images/book.png"
import mind from "./Images/mind.png"
import empowering from "./Images/empowering.png"

const Work1 =( )=>{
    return(
        <div style={{backgroundColor:'black',height:'auto'}}>
            <div className="hat">
                <h1 className="HW">How Do We Work!</h1>
            </div>
            <div className="all2">
            <div className="Wor">
               <div className="stp1" >
                 <img className="hepp" src={quality}></img>
                 <p className="para">Conduct training sessions for teachers to improve teaching methodologies and create supportive classroom environments.Offer tutoring and remedial classes to help girls catch up with their studies.</p>
               </div>
               <div className="stp1">
               <img className="hepp" src={book}></img>
               <p className="para">Programs to increase enrollment of girls in schools, including outreach campaigns to identify out-of-school girls.Utilize technology to offer remote learning opportunities for girls in hard-to-reach areas.</p>
               </div>
            </div>
            <div className="Wor">
               <div className="stp1">
               <img className="hepp" src={mind}></img>
               <p className="para">Educate girls about health, hygiene, and nutrition to ensure they are physically prepared to learn.Provide education and resources to manage menstrual health, reducing absenteeism.</p>
               </div>
               <div className="stp1">
               <img className="hepp" src={empowering}></img>
               <p className="para">Provide training in critical thinking, decision-making, and leadership to empower girls.Connect girls with female mentors and role models who can inspire and guide them.</p>
               </div>
               </div>
            </div>
              
        </div>
    );
}
export default Work1;
