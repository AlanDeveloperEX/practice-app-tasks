import './App.css';
import {useState} from 'react';

var bgColors = { 
  "Default": "transparent",
  "Blue": "#00B1E1",
  "Cyan": "#37BC9B",
  "Green": "#8CC152",
  "Red": "#E9573F",
  "Yellow": "#F6BB42",
  "Black": "#202020",
  "White": "#F1F1F1"
};
var colors = { 
  "Default": "transparent",
  "Blue": "#00B1E1",
  "Cyan": "#37BC9B",
  "Green": "#8CC152",
  "Red": "#E9573F",
  "Yellow": "#F6BB42",
  "Black": "#202020",
  "White": "#F1F1F1"
};

function App() {
  const [tasks, setTask] = useState([

    // {
    //   id: 1,
    //   task: "My first of day",
    //   done: false
    // },
    // {
    //   id: 2,
    //   task: "My second of day",
    //   done: true
    // }

  ])
  const [modal, setModal] = useState(false)

  const openModal = () => {
    setModal(!modal)
  }

  const saveTask = () => {

    let newTask = document.querySelector('#newTask').value

    setTask([
      ...tasks,
      {
        id: new Date().getTime(),
        task: newTask,
        done: false
      }
    ])

    setModal(false)
  }

  const makeDone = (id) => {
    let done = tasks.filter( (val) => {

      if (val.id == id ) {
        if (val.done == true) {
          val.done = false
        } else {
          val.done = true
        }
      }

      return val
    })

    setTask(done)
  }

  return (
    <>
      <div className="App container-fluid" style={{backgroundColor: bgColors.transparent}}>
        <div className="col-md-12 text-center d_flex a_center j_center">
          <div className="card j_center a_center">
            <div className="box_to_do">
              <h2>Tasks</h2>
              {
                tasks != '' ? tasks.map((val)=>{
                  if (val.done) {
                    return (
                      <p onClick={()=>makeDone(val.id) } style={{textDecoration: 'line-through' }}>{val.task}</p>
                    )
                  } else {
                    return (
                      <p onClick={()=>makeDone(val.id) }>{val.task}</p>
                    )
                  }
                }) : 
                <p>There is no tasks, lest make anyone.</p>
              }
            </div>
            <div className="add_to_do a_center" onClick={()=> openModal()}>
              <i className="las la-plus"></i>
            </div>
          </div>
        </div>
      </div>
      {
        modal?
        <div className="custom_modal d_flex a_center j_center text-center">
          <div className="modal_content">
            <h3>Add a new task</h3>
            <input id="newTask" type="text"/>
            <button onClick={() => saveTask()}>Save</button>
          </div>
        </div>
        :
          ''
      }
    </>
  );
}

export default App;
