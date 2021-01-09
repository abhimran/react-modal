import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { IMAGES } from './imageData';

const Modal = () => {
    let history = useHistory();
    let { id } = useParams();
    let image = IMAGES[parseInt(id, 10)];

    if (!image) return null;

    let back = e => {
      e.stopPropagation();
      history.goBack();
    };
    return (
      <div 
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        background: "rgba(0, 0, 0, 0.15)"
      }}
      >
      <div className="modal-dialog" >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">{image.title}</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
              Hello From modal , this is the last time to warn you and say good bye , take care!
          </div>
          <div className="modal-footer">
            <button onClick={back} type="button" className="btn btn-secondary">Close</button>
            <button type="button" className="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Modal;