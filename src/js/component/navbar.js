import React, { useContext, useEffect } from "react";
import {Link} from "react-router-dom"
import { Context } from "../store/appContext";



export const Navbar = () => {
  const { store, actions } = useContext(Context);

  return (
    <nav className="navbar navbar-light bg-light mb-2 justify-content-around">
      <Link to = "/">
      <img src="https://www.paredro.com/wp-content/uploads/2019/01/El-logo-de-Star-Wars-tiene-ma%CC%81s-de-9-variaciones-en-su-disen%CC%83o.jpg" style={{ height: "4rem",borderRadius: "50%", opacity: "0.8" }} alt="Star Wars Logo"/>
      </Link>
      <div className="ml-auto">
          <div className="dropdown">
            <button
              className="btn btn-warning bg-warning dropdown-toggle"
              style={{opacity: 0.8, border: 0}}
              type="button"
              id="dropDownMenu"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Favorites
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropDownMenu">
              {store.updateFavorites.map((favorites, index) => {
                return <li key = {index}>
                {favorites}  
                <button onClick={()=>actions.updateFavorites(favorites)}>x</button>
              </li>
              })}         
            </ul>
          </div>
      </div>
    </nav>
  );
};