import react from "react";
import Modal from "react-modal";
import "./OptionModel.css";
export default function OptionModel(props) {
  return (
    <Modal
      isOpen={!!props.selectOption}
      contentLabel="selected option"
      onRequestClose={props.closeModal}
      closeTimeoutMS={200}
      className="modal"
    >
      <h3 className="model__title">Selected option</h3>
      {props.selectOption && (
        <p className="model__body">{props.selectOption}</p>
      )}
      <button className="button" onClick={props.closeModal}>
        Close
      </button>
    </Modal>
  );
}
