import React, { useState } from "react";
import logo from "../../assets/images/lOGO.svg";
import plusCircle from "../../assets/images/plus-circle.svg";
import { NavLink, Link } from "react-router-dom";
// import Container from "@material-ui/core/Container";
import "./Header.css";

const Header = () => {
  const [click, setClick] = useState(false);

  const [nav, setNav] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNav(true);
    } else {
      setNav(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  const handleShow = () => {
    setClick(true);
    document.body.style.overflow = "hidden";
  };

  const handleHide = () => {
    setClick(false);
    document.body.style.overflow = "";
  };

  const removeOverflow = () => {
    document.body.style.overflow = "";
  };

  return (
    <nav className={nav ? "navbar scrol" : "navbar"}>
      <div className="container navbar_menu">
        <div className="navbar__logo_items">
          <div className="navbar_logo">
            <Link exact="true" to="/">
              <img src={logo} alt="Logo" className="navbar__logo_img" />
            </Link>
          </div>
          <ul className="navbar__nav_menu_list">
            <li className="navbar__nav_item">
              <NavLink
                exact
                to="/"
                activeClassName="navbar__active"
                className="navbar__nav_links"
                onClick={removeOverflow}
              >
                Biz haqimizda
              </NavLink>
            </li>
            <li className="navbar__nav_item">
              <NavLink
                exact
                to="/courses"
                activeClassName="navbar__active"
                className="navbar__nav_links"
                onClick={removeOverflow}
              >
                E’lonlar
              </NavLink>
            </li>
            {/* <li className="navbar__nav_item">
              <NavLink
                exact
                to="/contact"
                activeClassName="navbar__active"
                className="navbar__nav_links"
                onClick={removeOverflow}
              >
                Hamkorlar
              </NavLink>
            </li> */}
            <li className="navbar__nav_item">
              <NavLink
                exact
                to="/contact"
                activeClassName="navbar__active"
                className="navbar__nav_links"
                onClick={removeOverflow}
              >
                Qo’llanma
              </NavLink>
            </li>
          </ul>
        </div>

        <ul className={click ? "nav_menu burger" : "nav_menu"}>
          <li className="nav_item_logo">
            <Link exact="true" to="/">
              <img src={logo} alt="Logo" className="navbar__burger_logo" />
            </Link>
          </li>
          <li className="nav_item">
            <NavLink
              exact
              to="/"
              activeClassName="active"
              className="second_nav_links"
              onClick={removeOverflow}
            >
              Biz haqimizda
            </NavLink>
          </li>
          <li className="nav_item">
            <NavLink
              exact
              to="/courses"
              activeClassName="active"
              className="second_nav_links"
              onClick={removeOverflow}
            >
              E’lonlar
            </NavLink>
          </li>
          {/* <li className="nav_item">
            <NavLink
              exact
              to="/contact"
              activeClassName="active"
              className="second_nav_links"
              onClick={removeOverflow}
            >
              Hamkorlar
            </NavLink>
          </li> */}
          <li className="nav_item">
            <NavLink
              exact
              to="/contact"
              activeClassName="active"
              className="second_nav_links"
              onClick={removeOverflow}
            >
              Qo’llanma
            </NavLink>
          </li>
          <li className="nav_item">
            <div className="navbar_choose_language">O'zbek</div>
            <div className="navbar__sign_up_title">Kirish /</div>
            <div className="navbar__sign_up_title"> Ro’yxatdan o’tish</div>
            <button className="navbar__ennounce_btn">
              <img
                className="navbar__pluc_circle_icon"
                src={plusCircle}
                alt="plus-icon"
              />
              E'lon berish
            </button>
          </li>
        </ul>

        <div className="navbar__ennounce_info">
          <div className="navbar_choose_language">O'zbek</div>
          <div className="navbar__sign_up_title">Kirish / </div>
          <div className="navbar__sign_up_title">Ro’yxatdan o’tish</div>
          <div className="navbar__ennounce_button">
            <button className="navbar__ennounce_btn">
              <img
                className="navbar__pluc_circle_icon"
                src={plusCircle}
                alt="plus-icon"
              />
              E'lon berish
            </button>
          </div>
        </div>

        <div className="navbar_burger__icon">
          {click ? (
            <i onClick={handleHide} className="fas fa-times" />
          ) : (
            <i onClick={handleShow} className="fas fa-bars" />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
