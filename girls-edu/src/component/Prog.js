import "./Prog.css"
import i3 from "./Images/i3.jpg"
import homework from "./Images/homework.png"
const Prog = ()=>{
    return(
     <div className="hello1">
        <img src={i3} className="IMG"></img>
        <p className="t4">We are EKK!</p>
        <p className="t5">Our mission is to break the cycle of poverty and inequality by providing girls with the education they deserve. </p>
        <img src={homework}  className="t6"></img>

     </div>
    );
}
export default Prog