import { MdOutlineEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";


const MyFit =({text, updatingInput, deleteGoal })=> {
    return (
        <div>
        
        <p>{text}</p>
        <MdOutlineEdit onClick={updatingInput}/>
        <MdDelete onClick={deleteGoal} />

        </div>
    )
}
export default MyFit;