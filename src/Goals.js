import { IoIosFitness } from "react-icons/io";
import { IoWatch } from "react-icons/io5";
import { GiWeight } from "react-icons/gi";
import { RiDeleteBin7Line } from "react-icons/ri";
import { useState } from "react";


const Goals =()=>{
        
    const [addText, setAddText]= useState([]);
    const [inputValue, setInputValue]= useState("");


    const addNewText=()=> {
        setAddText([...addText,inputValue]);
        setInputValue("");
    }
    
    const removeText =(index)=>{
        const NewText = addText.filter((addText, i)=> i !== index);
        setAddText(NewText)
    }

    return (
        <div className="boxOfGoals">
        
            <div className="boxOfChek">
                <div>
                    <h3>GOALS for the month:</h3>
                        <div>
                            <input type="text" className="goalsInput"
                            value={inputValue}
                            placeholder="Add goals ..."
                            onChange={(e) => setInputValue(e.target.value)}/>
        
                            <button className="btn" 
                            disabled={!inputValue}
                            onClick={addNewText} >Add</button>
                        </div>
                </div>

                        {addText.map((addText, index) => (
                            <label key={index} className="boxOfLabel">
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                                <p className="boxOfNewText">{addText}</p> 
                                <RiDeleteBin7Line onClick={()=> removeText(index)} />
                            </label>
                ))}

            </div>

            <div className="containerIcons">
                <IoIosFitness size={70} />
                <IoWatch size={70} />
                <GiWeight size={70} />
            </div>

    </div>

    )
}
export default Goals;
