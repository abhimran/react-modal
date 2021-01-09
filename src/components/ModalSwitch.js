import React from "react";
import {
  Switch,
  Route,
  useLocation,
  useRouteMatch,
} from "react-router-dom";
import Gallery from "./Gallery";
import ImageView from "./ImageView";
import Modal from "./Modal";

const ModalSwitch = () => {
    let location = useLocation();
    let background = location.state && location.state.background;
    let { path} = useRouteMatch();
    
    return (
        <div>
        <Switch location={background || location}>
        <Route exact path={path} children={<Gallery />} />
        <Route path={`${path}/img/:id`} children={<ImageView />} />
      </Switch>
      {background && <Route path={`${path}/img/:id`} children={<Modal />} />}
    </div>
    );
};

export default ModalSwitch;