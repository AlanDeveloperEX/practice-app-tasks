import './App.css';
import {useState} from 'react';
import Modal from './components/Modal';

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
  const [modalMsg, setModalMsg] = useState(false)

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

  const playstation = () => {
    alert("Lets play a game");

    setModalMsg(false)

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
                <p>There is no tasks, lets make anyone.</p>
              }
            </div>
            <div className="add_to_do a_center" onClick={()=> setModal(!modal)}>
              <i className="las la-plus"></i>
            </div>
            <div className="add_to_do a_center" onClick={()=> setModalMsg(!modalMsg) }>
              <i className="las la-plus"></i>
            </div>
          </div>
        </div>
      </div>

        <Modal 
          title="Tasks List"
          menssage="Bla bla ..."
          show={modal}
          action={saveTask}
        />

        <Modal 
          title="Show Mensagem"
          menssage="Bla bla ..."
          show={modalMsg}
          action={playstation}
        />

    </>
  );
}

export default App;
