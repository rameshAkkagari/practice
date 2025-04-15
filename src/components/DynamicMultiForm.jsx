import { useState } from "react";

function DynamicMultiForm (){
    const [formCount,setFormcount] = useState(0)
    const handlerForm =(e)=>{
        console.log();
        e.preventDefault()
        if(formCount >=2){
            return formCount
        } else{
            setFormcount(formCount +1)
        }
        console.log("submited");
        
    }
    return (
        <div>
            <h1>Dynamic Multi Form</h1>
            <div className="flex gap-10">
                <h5 className={` ${formCount === 0 ? "p-2 m-5 bg-red-500" : "p-2 m-5"}`}>Profile</h5>
                <h5 className={` ${formCount === 1 ? "p-2 m-5 bg-red-500" : "p-2 m-5"}`}>Interest</h5>
                <h5 className={` ${formCount === 2 ? "p-2 m-5 bg-red-500" : "p-2 m-5"}`}>settings</h5>
            </div>
                <h2>{formCount}</h2>
            <form>
                {formCount === 0 &&<div>
                    <label htmlFor="Age">Age</label>
                    <input type="number" placeholder="Enter your age" />
                    <label htmlFor="Email">Email</label>
                    <input type="email" placeholder="Enter email" />
                </div>}

               {formCount === 1 && <div>
                    <label htmlFor="Selete">Selete interest</label>
                    <select>
                        <option value="Games">Games</option>
                        <option value="Education">Education</option>
                        <option value="Music">Music</option>
                        <option value="Dance">Dance</option>
                    </select>
                    <label htmlFor="">Subscribe to NewsLettres</label>
                    <input type="checkbox" placeholder="" />
                </div>}
                { formCount === 2 &&<div>
                    <label htmlFor="">Notification prefrerence :</label>
                    <label htmlFor="">Email</label>
                    <input type="radio" placeholder=""/>
                    <label htmlFor="">SMS</label>
                    <input type="radio" placeholder=""/>
                    <label htmlFor="">None</label>
                    <input type="radio" placeholder=""/>
                </div>}
               {formCount <  2 ? <button onClick={handlerForm}>Next</button> : <button>Submit</button>}
            </form>
        </div>
    )
}

export default DynamicMultiForm;