import "./SubServices.css"
const  SubServices = (props) =>{
    return(
        <div className="all">
            <div className="tit">{props.titl}</div>
            <div className='s1'>{props.sub11}</div>
            <div className="s2">{props.sub12}</div>

        </div>
    );
}
export default SubServices;