import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Planets = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	useEffect(() => {
		actions.getOnePlanet(params.id);
	  }, []);
	
	return (
		<div className="container fluid d-flex justify-content-center">
		<div className="card mb-3 " style={{width: "540px"}}>
			<div className="row g-0	">	
				<div className="col-md-4">
				<img
              src={
                "https://starwars-visualguide.com/assets/img/planets/" +
                store.onePlanet.uid +
                ".jpg"
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
			<div className="col-md-8">
				<div className="card-body">
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

Planets.propTypes = {
	match: PropTypes.object
};
