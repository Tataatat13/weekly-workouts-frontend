import { useState } from "react";
import { RiDeleteBin7Line } from "react-icons/ri";
const Week =()=> {

    const [addWeek, setAddWeek]=useState("");
    const [title, setTitle]=useState("");

    const NewWeek =()=> {
        setAddWeek(title);
        setTitle("");
    }

    const RemoveWeek=()=> {
        setAddWeek("");
    }

    return (

        <div className="bigBoxOfWeek">
            <div>
                <p className="boxOfWeek">Week of:</p>

                
                    <input className="boxOfInput"
                    type="text"
                    placeholder="Add week..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    />
                    <button className="btn"
                    onClick={NewWeek}
                    >Add</button>
                

                <div className="boxOfNewWeek">
                <p className="addWeek">{addWeek}</p>
                <RiDeleteBin7Line onClick={RemoveWeek} />
                </div>

            </div>

        </div>
    )
}
export default Week;
