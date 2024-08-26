import './But.css'
import Face from "./Images/Face.jpeg" 
import th from "./Images/th.jpeg"
import twiter from "./Images/twiter.png"
const But =()=>{
    const NewPage=( )=>{
        window.open("https://www.youtube.com/" ,'_blank')
    }
    const NewPage1=( )=>{
        window.open("https://www.youtube.com/" ,'_blank')
    }
    const NewPage2=( )=>{
        window.open("https://www.youtube.com/" ,'_blank')
    }
    
    return(
    <div className="BUTTN">
     <button onClick={NewPage} className="facebook1"><img src={Face} className="facebook"></img></button>
     <button onClick={NewPage1} className="facebook1"><img src={th} className="facebook"></img></button>
     <button onClick={NewPage2} className="facebook1"><img src={twiter} className="facebook"></img></button>
     </div>
    );
}
export default But