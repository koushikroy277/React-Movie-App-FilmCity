import React from "react";
import "./Style/Nav.scss";
import { NavLink } from "react-router-dom";
import { Nav, NavDropdown } from "react-bootstrap";
import { FaAngleDown, FaAngleUp, FaAtlassian } from "react-icons/fa";
import SideBar from "./SideBar";

export default function NavBar() {
  const [enter, setEnter] = React.useState(false);

  return (
    <div className="navParent">
      <div className="navPrimary">
        <div className="navLogo">
          <i><FaAtlassian size={40}/></i>
          <h1>FilmCity</h1>
        </div>
        <div className="nav">
          <div className="navItem">
            <NavLink className="link" to="/">
              Home
            </NavLink>
          </div>
          <div
            className="navItem"
            onMouseEnter={() => setEnter(true)}
            onMouseLeave={() => setEnter(false)}
          >
            <NavLink
              className={enter ? "link present" : "link"}
              to="#"
              id="navDropdown"
            >
              Movies {enter ? <FaAngleUp /> : <FaAngleDown />}
            </NavLink>

            <div className={enter ? "navDrop show" : "navDrop"}>
              <div className="dropItem">
                <NavLink className="link" to="/horror">
                  <div>Horror</div>
                </NavLink>
              </div>
              <div className="dropItem">
                <NavLink className="link" to="/romance">
                  <div>Romantic</div>
                </NavLink>
              </div>
              <div className="dropItem">
                <NavLink className="link" to="/comedy">
                  <div>Comedy</div>
                </NavLink>
              </div>
              <div className="dropItem">
                <NavLink className="link" to="/action">
                  <div>Action</div>
                </NavLink>
              </div>
              <div className="dropItem">
                <NavLink className="link" to="/documentaries">
                  <div>Documentaries</div>
                </NavLink>
              </div>
            </div>
          </div>
          <div className="navItem">
            <NavLink className="link" to="/webSeries">
              Web Series
            </NavLink>
          </div>
          <div className="navItem">
            <NavLink className="link" to="/tvShows">
              Tv shows
            </NavLink>
          </div>
        </div>
        <div className="sideBar">
          <SideBar />
        </div>
      </div>
    </div>
  );
}
