/*
import "./Form.css"
import React , {useState} from "react"
import axios from "axios"; 
const Form =( )=>{
  
    const [currentVal , setCurrentVal] = useState( {
      "name": ' ',
      "father": ' ',
      "Dob" : ' ',
      "class": ' '
  
       } )

  const newUpadates =(event)=>{
    const {name , value} = event.target;
    setCurrentVal((prevData)=>{
       return{
         ...prevData,
         [name]: value
    

           
    }})
  }
  
  const hp = async (event) => {
    event.preventDefault();
  
  try {
    const response = await axios.post("http://localhost:7008/submit", currentVal);
    alert("Form submitted successfully: " + response.data.message);
    setCurrentVal({
      "name": ' ',
      "father": ' ',
      "Dob": ' ',
      "class": ' '
  });
  } catch (error) {
    console.error("Error submitting form:", error);
    alert("Error submitting form: " + error.response?.data?.message || error.message);
  }
};
    return(
      <div className="totalal">
        <form className="total" onSubmit={hp}>
            <div className="fr">
            <div className="fr1">
            <label htmlFor ="name1">Enter your Name</label>
            <input type='text' className="name1" name="name" onChange={newUpadates}></input>
             </div>
             
             <div className="fr1">
            <label htmlFor="father">Father's Name</label>
            <input type='text' className="father"  name="father"  onChange={newUpadates}></input>
            </div>
            </div>
            
           
            <div className="fr2">
            <div className="fr1">
            
            <label htmlFor="DateOfBirth">Date Of Birth</label>
            <input type='text' className="DateOfBirth" name="Dob"  onChange={newUpadates}></input>
             </div>
             <div className="fr1">
            <label htmlFor="class">Class</label>
            <input type='text' className="class" name="class"  onChange={newUpadates}></input>
            </div>
            </div >

            <div className="fr3">
            
            <input type ="submit"></input>

            </div>
            
            
        </form>
      </div>
    );
}
export default Form;
*/import "./Form.css";
import React, { useState } from "react";
import axios from "axios";

const Form = () => {
    const [currentVal, setCurrentVal] = useState({
        name: '',
        father: '',
        Dob: '',
        class: ''
    });

    const newUpadates = (event) => {
        const { name, value } = event.target;
        setCurrentVal((prevData) => ({
            ...prevData,
            [name]: value
        }));
    }

    const hp = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post("http://localhost:7008/submit", currentVal);
            alert("Form submitted successfully: " + response.data.message);
            // Clear the form fields
            setCurrentVal({
                name: '',
                father: '',
                Dob: '',
                class: ''
            });
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Error submitting form: " + error.response?.data?.message || error.message);
        }
    };

    return (
        <div className="totalal">
            <form className="total" onSubmit={hp}>
                <div className="fr">
                    <div className="fr1">
                        <label htmlFor="name1">Enter your Name</label>
                        <input
                            type="text"
                            className="name1"
                            name="name"
                            value={currentVal.name}
                            onChange={newUpadates}
                        />
                    </div>

                    <div className="fr1">
                        <label htmlFor="father">Father's Name</label>
                        <input
                            type="text"
                            className="father"
                            name="father"
                            value={currentVal.father}
                            onChange={newUpadates}
                        />
                    </div>
                </div>

                <div className="fr2">
                    <div className="fr1">
                        <label htmlFor="DateOfBirth">Date Of Birth</label>
                        <input
                            type="text"
                            className="DateOfBirth"
                            name="Dob"
                            value={currentVal.Dob}
                            onChange={newUpadates}
                        />
                    </div>
                    <div className="fr1">
                        <label htmlFor="class">Class</label>
                        <input
                            type="text"
                            className="class"
                            name="class"
                            value={currentVal.class}
                            onChange={newUpadates}
                        />
                    </div>
                </div>

                <div className="fr3">
                    <input type="submit" />
                </div>
            </form>
        </div>
    );
}

export default Form;
