import React, {useState} from "react";
import Modal from "react-modal";
import ReactModal from "react-modal";
import image1 from "../img/messagif1.gif";
import image2 from "../img/msgif_twitter.gif";
import illustration from "../img/msgif_illustration.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "./ModalWindow.css";

Modal.setAppElement("#root");

const ModalWindow = () =>{

  const [modalIsOpen, setModalIsOpen] = useState(true);

  const openModal =() => {
    setModalIsOpen(true);
    
  }
  const closeModal= () => {
    setModalIsOpen(false);
  }
  
  return (
    <div>
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Landing Page"
        overlayClassName="Overlay"
      >
        <a
          href="https://www.producthunt.com/posts/msgif?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-msgif"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=183178&theme=light"
            alt="Msgif - A GIF generator that converts your message into a GIF | Product Hunt Embed"
            style={{ width: "250px", height: "54px" }}
          />
        </a>
        <div className="modal-inner">
          <button onClick={closeModal} id="close">
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

          <button onClick={closeModal} id="start">
            GET STARTED
          </button>
        </div>
      </ReactModal>
    </div>
  );
}
export default ModalWindow;
