import React from 'react';
import { Link, useLocation, useRouteMatch } from 'react-router-dom';
import { IMAGES } from './imageData';

const Gallery = () => {
    let {url } = useRouteMatch();
    let location = useLocation();
    return (
        <>
      {IMAGES.map(i => (
        <Link
          key={i.id}
          to={{
            pathname: `${url}/img/${i.id}`,
            state: { background: location }
          }}
        >
          <button type="button" className="btn btn-primary me-2">
              {i.title}
          </button>
        </Link>
      ))}
    </>
    );
};

export default Gallery;