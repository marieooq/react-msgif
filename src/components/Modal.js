import React from "react";
import image1 from "../img/messagif1.gif";
import image2 from "../img/msgif_twitter.gif";
import illustration from "../img/msgif_illustration.svg";
import "./Modal.css";

const Modal = () => {
  return (
    <div class="modal js-modal">
      <div class="modal__bg js-modal-close"></div>
      <div class="modal__content">
        <div class="modal__inner">
          <h1>Welcome to Msgif!</h1>
          <img src={illustration} alt="hero" className="media" width="300px" />
          <p>
            Msgif is a GIF generator that converts your message into a GIF
            animation.{" "}
          </p>

          <img src={image1} alt="messagif1" className="media" />

          <p>
            You can download a GIF message that you create. Once you download it
            you can share it on social media, chat apps or wherever you want!
            The GIF message stands out more than normal images. It's totally
            free, so just try it!
          </p>
          <img src={image2} alt="messagif2" className="media" />

          <a class="js-modal-close" href="" id="start">
            GET STARTED
          </a>
        </div>
      </div>
    </div>
  );
};

export default Modal;
