import React from "react";
import "./Style/SideBar.scss";
import { NavLink } from "react-router-dom";
import {
  Button,
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { FaAngleRight, FaAngleDown, FaBars, FaAtlassian } from 'react-icons/fa';

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    left: false,
  });
  const [active, setActive] = React.useState(false);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className="sideBanner"
    >
      <List className="sideBar">
        <div className="sideBarLogo">
          <i><FaAtlassian size={40}/></i>
          <h1>FilmCity</h1>
        </div>
        <ListItem className="sideBarItem">
          <NavLink className="link" to="/">
            Home
          </NavLink>
        </ListItem>
        <ListItem className="sideBarItem" onClick={() => setActive(!active)}>
          <NavLink className={active ? "show link": "drop link"} to="#">
            Movies <i>{active ? <FaAngleDown size={25} />: <FaAngleRight size={25}/>}</i>
          </NavLink>
          <div className={active ? "sideDrop show" : "sideDrop"}>
            <div className="dropItem">
              <NavLink className="link" to="/horror">
                Horror
              </NavLink>
            </div>
            <div className="dropItem">
              <NavLink className="link" to="/comedy">
                Comedy
              </NavLink>
            </div>
            <div className="dropItem">
              <NavLink className="link" to="/romance">
                Romance
              </NavLink>
            </div>
            <div className="dropItem">
              <NavLink className="link" to="/action">
                Action
              </NavLink>
            </div>
            <div className="dropItem">
              <NavLink className="link" to="/documentaries">
                Documentaries
              </NavLink>
            </div>
          </div>
        </ListItem>
        <ListItem className="sideBarItem">
          <NavLink className="link" to="/webSeries">
            Web Series
          </NavLink>
        </ListItem>
        <ListItem className="sideBarItem">
          <NavLink className="link" to="/tvShows">
            Tv Shows
          </NavLink>
        </ListItem>
      </List>
    </div>
  );

  return (
    <div className="parentSideBar">
      {["left"].map((anchor) => (
        <div key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)} className="sideBtn"><FaBars size={30}/></Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            <div className="drawer">{list(anchor)}</div>
          </Drawer>
        </div>
      ))}
    </div>
  );
}
