import './Services1.css'
import SubServices from"./SubServices";
const Services1 = ( ) =>{
    const a = [
        {
            title:"Scholarship Programs:",
            sub1 :"Full Scholarships: Covering tuition fees, books, uniforms, and other school-related expenses.",
            sub2 : " Partial Scholarships: Providing financial assistance for specific needs such as books or transportation."
        },
        {
           title:"School Supplies and Learning Materials:",
           sub1: "Book Drives: Collecting and distributing textbooks and reading materials.",
           sub2: "School Kits: Providing kits that include notebooks, pens, pencils, and other necessary supplies."
        }
    ]
    return(
        <diV>
            <div className="PS">Programs and Services</div>
        <div className="allComp">
    
        <SubServices 
            titl = {a[0].title}
            sub11 = {a[0].sub1}
            sub12 = { a[0].sub2}>
        </SubServices>
        <SubServices
            titl = {a[1].title}
        sub11 = {a[1].sub1}
        sub12 = { a[1].sub2}>
        </SubServices>
        <SubServices
            titl = {a[1].title}
        sub11 = {a[1].sub1}
        sub12 = { a[1].sub2}>
        </SubServices>
        
        
        </div>
        </diV>
    );
}
export default Services1;