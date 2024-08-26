
import './ItemFirst.css';
import { useNavigate} from "react-router-dom"
import AboutUs from "./AboutUs"
const ItemFirst = (props) => {
   
    
    return (
        <div>
            
            <button className='it' >{props.title}</button>
            
        </div>
    );
}
export default ItemFirst
