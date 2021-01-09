import React from 'react';
import { useParams } from 'react-router-dom';
import { IMAGES } from './imageData';

const ImageView = () => {
    let { id } = useParams();
    let image = IMAGES[parseInt(id, 10)];

  if (!image) return <div>Image not found</div>;
    return (
        <div>
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">{image.title}</h5>
                </div>
                <div class="modal-body">
                    Hello From modal , this is the last time to warn you and say good bye , take care!
                </div>
              </div>
      </div>
      </div>
    );
};

export default ImageView;