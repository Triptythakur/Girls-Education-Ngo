import './Front1.css'

import  Collage1  from "./Collage1.js";



const Front1 =( ) =>{
    const a = { color: 'red'}
    return(
        <div className='main'>
         <div className="itmm2">
            <h1 className="itm1" style={a}>Strong,Free & Educated</h1>
            <p className="itm1">The seeds of success in every nation of the world are  best planted by women and their
               
            </p>
            
            <p className="itm1">  mental support</p>
            <p>A vision for girls' education is to create a world where every girl, regardless of her background, everyone 
            has equal access to quality education and the opportunity to reach her full potential. This vision encompasses 
            eliminating all barriers to education, including economic, social, and cultural obstacles</p>
            <p>It aims to foster an inclusive environment where girls feel safe, valued, and motivated to learn. The ultimate goal is to empower girls with the knowledge, skills, and confidence needed to become leaders, innovators, and active participants in their communities. By achieving this vision, we can build a more equitable, prosperous, and sustainable future for a</p>
         </div>

                <Collage1/>
         </div>
    );
}
 export default Front1;