import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const People = props => {
	const { store, actions } = useContext(Context);
	const {theid} = useParams();

	useEffect (() => {
		actions.getOnePeople(theid)

	}, [])

	return (
		<div className="container fluid d-flex justify-content-center">
		<div className="card mb-3 " style={{width: "540px"}}>
			<div className="row g-0	">	
				<div className="col-md-4">
				<img
              src={
                "https://starwars-visualguide.com/assets/img/characters/" +
                theid + ".jpg"
              }
              onError={({ currentTarget }) => {
                currentTarget.onerror = null;
                currentTarget.src =
                  "https://i.ibb.co/qjVnbF5/c06c9d63bda3f0a823aee1b2f47b0457-1.png";
              }}
              className="card-img-top"
              alt="default.404.picture"
            />
			</div>
			<div className="col-md-8 text-center">
				<div className="card-body justify-content-center">
				<h4 className="card-tittle">{store.onePeople.name}</h4>
				<p className="card-text">Height: {store.onePeople.height}</p>
				<p className="card-text"> Hair Color: {store.onePeople.hair_color}</p>
				<p className="card-text">Skin Color: {store.onePeople.skin_color}</p>
				<p className="card-text">Eye Color: {store.onePeople.eye_color}</p>
				<p className="card-text"> Birht Year: {store.onePeople.birth_year}</p>
				<p className="card-text">Gender: {store.onePeople.gender}</p>
				</div>
			</div>
			</div>
		
			<Link to="/">
				<p className="btn btn-warning bg-warning btn-lg"  style={{opacity: 0.8, border: 0}}  href="#" role="button">
					Back home
				</p>
			</Link>
			</div>
			</div>
	);
};

People.propTypes = {
	match: PropTypes.object
};
