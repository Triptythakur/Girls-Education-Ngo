import './H.css'
import imageUrl from './Images/hr.webp';
const H = ( )=>{
    return(
        <div className="h">
        <div className="HRname">
        <img src={imageUrl} className="hrImage"></img>
        <h5 className="name">suhani Verma</h5>
        </div>
        <div className="HrIntro">
            <p className="firstPara">EmpowerHer is an NGO dedicated to promoting education for girls in underprivileged communities.</p>
            <p> Our mission is to ensure every girl has access to quality education and the opportunity to realize her full potential.</p>
        </div>
       </div>
    );
}
export  default H