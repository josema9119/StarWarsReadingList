import React from "react";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light mb-2 justify-content-around">
      <h1>STAR WARS LOGO</h1>
      <div className="ml-auto">
          <div className="dropdown">
            <button
              className="btn btn-primary dropdown-toggle"
              type="button"
              id="dropDownMenu"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Favorites
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropDownMenu">
              <li>
                <a className="dropdown-item" href="#">
                  (empty)
                </a>
              </li>
            </ul>
          </div>
      </div>
    </nav>
  );
};