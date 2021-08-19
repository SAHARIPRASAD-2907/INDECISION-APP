import react from "react";
import Modal from "react-modal";
export default function OptionModel(props) {
  return (
    <Modal
      isOpen={!!props.selectOption}
      contentLabel="selected option"
      onRequestClose={props.closeModal}
    >
      <h3>Selected option</h3>
      {props.selectOption && <p>{props.selectOption}</p>}
      <button onClick={props.closeModal}>Close</button>
    </Modal>
  );
}
