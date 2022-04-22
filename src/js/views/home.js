import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import reactRouterDom from "react-router-dom";


export const Home = () => {
  const { store, actions } = useContext(Context);
  const {theid} = useParams();

  useEffect(() => {
    actions.getPeople();
	  actions.getPlanets();
  }, []);

  
  return (
    <div className="text-center mt-5">
      <div className="text-center mt-5">
        <h1>Characters</h1>
        <div className="conatiner">
           <div className="row scrolling-wrapper-flexbox ">
            {store.people.map((people) => {
               return (
                 <div
                   key={people.uid}
                    className="card"
                    style={{ width: "540px" }}
                  >
                    <div className="row g-0">
                      <div className="col-md-4">
                      <img
             src={
              "https://starwars-visualguide.com/assets/img/characters/" +
              people.uid + ".jpg"
            }
              className="card-img-top"
              alt="Star Wars Character"
            />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title">{people.name}</h5>
                          <p className="card-text"> Hair Color: {store.onePeople.hair_color}</p>
			                  	<p className="card-text">Skin Color: {store.onePeople.skin_color}</p>
                          <div className="btn-group-vertical justify-content-center">
                            <Link to={"/people/" + people.uid}>
                              <button
                                className="btn btn-warning self-align-center"
                                style={{
                                  opacity: 0.9,
                                  border: 0,
                                  borderRadius: "3%",
                                  width: "15rem",
                                }}
                              >
                                More info
                              </button>
                            </Link>
                            <button
                              className="btn btn-warning"
                              style={{
                                opacity: 0.9,
                                border: 0,
                                borderRadius: "3%",
                                marginTop: "10px",
                              }}
                              onClick = {()=> actions.updateFavorites(people.name)}
                            >
                              Add to Favourites
                              <i
                                className="fab fa-jedi-order"
                                style={{ marginLeft: "10px", fontSize: "25px" }}
                              ></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="text-center mt-5">
        <h1>Planets</h1>
        <div className="conatiner">
           <div className="row scrolling-wrapper-flexbox ">
            {store.planets.map((planets) => {
               return (
                 <div
                   key={planets.uid}
                    className="card"
                    style={{ width: "540px" }}
                  >
                    <div className="row g-0">
                      <div className="col-md-4">
                      <img
              src={
                "https://starwars-visualguide.com/assets/img/planets/" +
                planets.uid +
                ".jpg"
              }
              
              className="card-img-top"
              alt="Star Wars Planet"
            />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title">{planets.name}</h5>
                          <p className="card-text">Population: {store.onePlanet.population}</p>
                          <p className="card-text"> Diameter: {store.onePlanet.diameter}</p>
                          <p className="card-text">Terrain: {store.onePlanet.terrain}</p>

                          <div className="btn-group-vertical justify-content-center">
                            <Link to={"/planets/" + planets.uid}>
                              <button
                                className="btn btn-warning self-align-center"
                                style={{
                                  opacity: 0.9,
                                  border: 0,
                                  borderRadius: "3%",
                                  width: "15rem",
                                }}
                              >
                                More info
                              </button>
                            </Link>
                            <button
                              className="btn btn-warning"
                              style={{
                                opacity: 0.9,
                                border: 0,
                                borderRadius: "3%",
                                marginTop: "10px",
                              }}
                              onClick = {()=> actions.updateFavorites(planets.name)}
                            >
                              Add to Favourites
                              <i
                                className="fab fa-jedi-order"
                                style={{ marginLeft: "10px", fontSize: "25px" }}
                              ></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
    </div>
  );
};
