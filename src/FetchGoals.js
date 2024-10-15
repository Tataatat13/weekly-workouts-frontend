import axios from "axios";

const getAllGoals = (setGoal) => {
    axios.get("https://weekly-workouts-backend.onrender.com")
    .then (({data})=> {
        console.log(data)
        setGoal(data);
    })
}

const addGoal = (title, setTitle, setGoal) => {
    axios.post("https://weekly-workouts-backend.onrender.com/saveGoals", {title})
    .then ((data)=> {
        console.log(data);
        setTitle("");
        getAllGoals(setGoal)
    })
}

const editGoal = (goalId, title, setTitle, setGoal, setEditing) => {
    axios.post("https://weekly-workouts-backend.onrender.com/editGoal", {_id:goalId, title})
    .then ((data) => {
        console.log(data)
        setTitle("");
        setEditing(false)
        getAllGoals(setGoal)
    })

}

const deleteGoal = (_id, setGoal)=> {
    axios.post("https://weekly-workouts-backend.onrender.com/deleteGoal", {_id})
    .then((data) => {
        console.log (data)
        getAllGoals(setGoal)
    })
}
export {getAllGoals, addGoal, editGoal, deleteGoal};