import { useEffect, useState } from "react"
import "./AboutFront.css"
import i1 from './Images/i1.jpg'

const AboutFront = (props)=>{
     
        const  text = [ 
            "From Classroom to Leadership: Educate Girls.",
            "Educating Girls for a Better Tomorrow.",
            "Girls' Education: The Key to a Brighter Future.",
            "Educate Girls, Change the World.",
            "Inspiring Girls, Transforming Communities."
         ]
        const [ item1 , SubItem] = useState(0);

        useEffect(()=>{
            const inter = setInterval(()=>{
                SubItem((previous)=>(previous + 1) % text.length);

            },3000)
            
            return ( )=> clearInterval(inter);

        })



    
    return(
        <div className ='AFront'>
            
            <img src={i1} className="iiii"></img>
            <div className="text">
            <p>" {text[item1]}  "</p>
            </div>
          
        </div>

    );
}
export default AboutFront