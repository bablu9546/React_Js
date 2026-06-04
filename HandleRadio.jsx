import { useState } from "react";
function HandleRadio(){
    let x="Select the gender";

    const[gender, setGender]=useState('male');
    const[city, setCity]=useState("delhi");
    return (
        <div>
            <h4>Handle_radio button and dropDown</h4>
            <h5>{x}</h5>
            <input type="radio" onChange={(event)=>setGender(event.target.value)} name="gender"  checked={gender=='male'}id="male" value={"male"} />
            <label htmlFor="male" >Male</label>
            <input type="radio" onChange={(event)=>setGender(event.target.value)} name="gender"  checked={gender=='female'} id="female" value={"female"} />
            <label htmlFor="female">female</label>

            <h2>Selected Gender: {gender}</h2>
            <br/><br/>

            <h2>Select City</h2>
            <select onChange={(event)=>setCity(event.target.value)} defaultValue={"delhi"}>
                <option value="noida">Noida</option>
                <option value="greaterNoida">Greater_Noida</option>
                <option value="gurugram">Gurugram</option>
                <option value="delhi">Delhi</option>

            </select>
            <h2>Selected City: {city}</h2>

        </div>
    )
}
export default HandleRadio;