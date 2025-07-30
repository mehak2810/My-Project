import { useState } from "react";
import axios from"axios" ;
import './Delete.css';

export function Delete(){
    const[id,setID] = useState("");

    async function deleteData(e){
        e.preventDefault();
        try{
            const response = await axios.delete(`https://my-project-backend-6tol.onrender.com/api/employees/${id}`);
            alert(response.data.message);
        }
        catch(err){
            alert("Record not found:" +err);
        }
                
        };
        return(
             <div className="common-container">
                
               
                <form className="common-form" onSubmit = {deleteData}>
                  <h3>Delete Record By ID</h3>
                   <hr/>
                    <input type="text" 
                    placeholder="Enter id"
                    value={id} onChange = {e => setID(e.target.value)} required/>
                    <br/><br/>
                    <button type="submit"> Remove Data</button>
                </form>
            </div>
        )
    }
