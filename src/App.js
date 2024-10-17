import { useEffect, useState } from 'react';
import './App.css';
import MyFit from "./MyFit";
import Goals from "./Goals";
import { addGoal, getAllGoals, editGoal, deleteGoal } from './FetchGoals';
import Water from './Water';
import DaysOfWeek from './DaysOftheWeek';
import Radio from './Radio';
import Week from './Week';

function App() {

const [myGoal, setGoal] = useState([]);
const [title, setTitle] = useState("");
const [editing, setEditing]= useState(false);
const [goalId, setGoalId]= useState("");




useEffect (()=> {
  getAllGoals(setGoal)
}, [])

const updatingInput = (_id, title)=>{
  setEditing(true)
  setTitle(title)
  setGoalId(_id)
}


  return (
    <div className="App">

      <div className="header">
      <h1>Weekly Workouts</h1>
        
      </div>
      <Week/>
      <Goals/>     

    <div className='bigBox'>
        
        <input className='bigBoxOfInput'
          type="text" 
          placeholder="Add goals for the day"
          value={title} 
          onChange = {(e) => setTitle (e.target.value)}/>
       
        <button className='btn'
            disabled={!title}
            onClick=
            {editing ? ()=> editGoal(goalId, title, setTitle, setGoal, setEditing) :
          ()=> addGoal(title, setTitle, setGoal)}>
            {editing ? "Edit" : "Add"}
        </button>

    </div>

        <div className='boxDayOfWeek'>
          <div className='containerOfDay'>
              <DaysOfWeek/>
              <div className="headBoxOfGoals">
              {myGoal.map ((goal) => <MyFit text={goal.title} key={goal.id} 
              updatingInput={()=> updatingInput(goal._id, goal.title)}
              deleteGoal={()=> deleteGoal (goal._id, setGoal)} 
              /> )}
              </div>
              <Radio/>
          </div>
          <div>
                <Water/>
          </div>
        </div>
      </div>
  );
}

export default App;
