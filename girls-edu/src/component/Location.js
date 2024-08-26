
import "./Location.css"
const Location =( )=>{
    const a = [
        {
            itm : " 1234 Main Street, <br/> Karol Bagh,<br/>New Delhi - 110005,<br/>India"

        },
        {
            itm : " 5678 Elm Street, <br>Gomti Nagar, <br/> Lucknow, Uttar Pradesh - 226010,<br/> India"

        },
        {
            itm : " Flat No. 12, Building No. 5,<br/>Lokhandwala Complex,<br/>Andheri West,Mumbai, Maharashtra - 400053,<br/>India"

        },
        {
            itm : "Ek Foundation,C-56/11,<br/> Sector 62,<br/> Noida, Uttar Pradesh - 201301,<br/>India"

        },
        {
            itm : "Ek Foundation,C-56/11,<br/> Sector 62,<br/> Noida, Uttar Pradesh - 201301,<br/>India"

        },
        {
            itm : "Ek Foundation,C-56/11,<br/> Sector 62,<br/> Noida, Uttar Pradesh - 201301,<br/>India"

        }
    ]
    return(
        <div className="clg">
            {a.map((item,index) => (
                <p key={index} dangerouslySetInnerHTML= {{__html: item.itm}}  className="addres"/>
            ))
             
            }
            
        </div>
    );
}
export default Location;

