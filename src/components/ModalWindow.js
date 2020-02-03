import React from "react";
import Modal from "react-modal";
import ReactModal from "react-modal";
import image1 from "../img/messagif1.gif";
import image2 from "../img/msgif_twitter.gif";
import illustration from "../img/msgif_illustration.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "./ModalWindow.css";
const customStyles = {
  content: {
    // width: "60%",
    // top: "50%",
    // left: "50%",
    // right: "auto",
    // bottom: "auto",
    // marginRight: "-50%",
    // transform: "translate(-50%, -50%)",
    // overflowY: "scroll",
    // height: "100%",
    // margin: "60px auto"
  }
};

Modal.setAppElement("#root");

class ModalWindow extends React.Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: true
    };
    this.openModal = this.openModal.bind(this);
    // this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  openModal() {
    this.setState({ modalIsOpen: true });
  }
  //   afterOpenModal() {
  //     this.subtitle.style.color = "blue";
  //   }
  closeModal() {
    this.setState({ modalIsOpen: false });
  }
  render() {
    return (
      <div>
        {/* <button onClick={this.openModal}>Open Modal!!</button> */}

        <ReactModal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel="Landing Page"
          style={customStyles}
          overlayClassName="Overlay"
        >
          <div className="modal-inner">
            <button onClick={this.closeModal} id="close">
              <FontAwesomeIcon icon={faTimes} />
            </button>

            <h1>Welcome to Msgif!</h1>

            <img
              src={illustration}
              alt="hero"
              className="media"
              width="300px"
            />

            <p className="modal-p">
              Msgif is a GIF generator that converts your message into a GIF
              animation.{" "}
            </p>

            <img src={image1} alt="messagif1" className="media" />

            <p className="modal-p">
              You can download a GIF message that you create. Once you download
              it you can share it on social media, chat apps or wherever you
              want! The GIF message stands out more than normal images. It's
              totally free, so just try it!
            </p>

            <img src={image2} alt="messagif2" className="media" id="image2" />

            <button onClick={this.closeModal} id="start">
              GET STARTED
            </button>
          </div>
        </ReactModal>
      </div>
    );
  }
}
export default ModalWindow;
