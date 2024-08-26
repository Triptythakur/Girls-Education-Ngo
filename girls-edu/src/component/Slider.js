import React, {useState ,useEffect} from "react"
import './Slider.css'
import  GirEducation from "./Images/GirlEducation.jpg"
import  images from "./Images/images.jpeg"
import  img1 from "./Images/img1.jpg"
import  img2 from "./Images/img2.jpeg"
import  img3 from "./Images/img3.jpeg"
import  img4 from "./Images/img4.jpeg"
import  img5 from "./Images/img5.jpeg"
import  img6 from "./Images/img6.jpeg"

const Slider =( ) =>{

    const Images = [GirEducation , images , img1,img2,img3,img4,img5,img6 ] 

    const [item , updatedItem] = useState(0);
    useEffect(( )=>{
         const interval = setInterval(() => {
            updatedItem((prevIndex) =>(prevIndex + 1) % Images.length);
         },3000);
         return () => clearInterval(interval);
    },[Images.length])

    return(
       <div>
        <img src={Images[item]} alt ="im" style={{width: '100%' ,height:"500px"}}></img>
       </div> 

    );
}
export default Slider;