import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import reactRouterDom from "react-router-dom";

export const Vehicles = props => {
	const { store, actions } = useContext(Context);
	const {theid} = useParams();

	useEffect (() => {
		actions.getOneVehicle(theid);

	  }, [])
	
	return (
		<div className="container fluid d-flex justify-content-center">
		<div className="card mb-3 " style={{width: "540px"}}>
			<div className="row g-0	">	
				<div className="col-md-4">
				<img
              src={
                "https://starwars-visualguide.com/assets/img/vehicles/" +
                theid +
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
				    <h5 className="card-title">{store.oneVehicle.name}</h5>
                    <p className="card-text">Model: {store.oneVehicle.model}</p>
                    <p className="card-text"> Vehicle class: {store.oneVehicle.vehicle_class}</p>
                    <p className="card-text">Cost in credits: {store.oneVehicle.cost_in_credits}</p>
                    <p className="card-text">Cargo capacity: {store.oneVehicle.cargo_capacity}</p>
                    <p className="card-text">Passengers: {store.oneVehicle.passengers}</p>
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

Vehicles.propTypes = {
	match: PropTypes.object
};
