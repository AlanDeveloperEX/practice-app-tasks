import './Modal.css';

function Modal({action, show, title}) {

  return show ? (
    <>
      <div className="custom_modal d_flex a_center j_center text-center">
        <div className="modal_content">
          <h3>{title}</h3>
          <input id="newTask" type="text"/>
          <button onClick={() => action() }>Save</button>
        </div>
      </div>
    </>
  ) : ''
}

export default Modal;
