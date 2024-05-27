import React, { useState } from 'react';
import header from "./header.webp";

const App = () => {
  const [visibile,setvisbile]=useState({visibility:"hidden"})
  const [task, setTask] = useState("");
  const [values, setValues] = useState([
    { text: "Identify and contextualize the problem", completed: true },
    { text: "Present ideas and changes to team", completed: true },
    { text: "Prepare User Flows", completed: true },
    { text: "Prepare design style guide", completed: false },
    { text: "Delivery stage: test and release", completed: false },
  ]);
 
  const toggleTask = (index) => {
    const newValues = values.map((val, i) => {
      if (i === index) {
        return { ...val, completed: !val.completed };
      }
      return val;
    });
    setValues(newValues);
  };

  const addTask = () => {
    setvisbile({visibility:"visible"})
    if (task.trim() !== "") {
      setValues([...values, { text: task, completed: false }]);
      setTask("");
      setvisbile({visibility:"hidden"})
    }
  };

  const completedTasks = values.filter(task => task.completed).length;
  const totalTasks = values.length;

  return (
    <>
      <div className="container">
        <div className="box">
          <div className="header">
            <img src={header} alt="Header" />
            <h1>TODO</h1>
          </div>
          <div className="tasklist">
            <div className="list">
              <h1>Tasklist</h1>
              <p style={{fontSize:"1.3rem"}}>{completedTasks}/{totalTasks} done</p>
            </div>
            <div className="checkbox">
              {values.map((val, index) => (
                <div key={index}>
                  <input
                    type="checkbox"
                    checked={val.completed}
                    onChange={() => toggleTask(index)}
                  /> 
                  
                  {val.completed ? <s style={{color:"grey", fontSize:"1.5rem"}}>{val.text}</s> : <span style={{fontSize:"1.5rem"}}>{val.text}</span>}
                 
                </div>
              ))}
            </div>
          </div>
           <div className='buttonbox'>
          <div className='inputfield' >
            <input 
            style={visibile}
              type="text"
              placeholder="Enter youdr task"
              value={task}
              onChange={(e) => setTask(e.target.value)}
            /> 
            <button className="addtask" onClick={addTask}>+ Add Task</button>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
