import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	useEffect (()=>{
		actions.getInfoPeople()

	}, [])

	return (
		<div className="container fluid d-flex justify-content-center">
		<div className="card mb-3 " style={{width: "540px"}}>
			<div className="row g-0	">	
				<div className="col-md-4">
			<img src="https://smoda.elpais.com/wp-content/uploads/2019/12/2-look.jpg" className="img-fluid rounded-start" alt="..."/>
			</div>
			<div className="col-md-8">
				<div className="card-body">
				<h4 className="card-tittle">{store.info.name}</h4>
				<p className="card-text">{store.info.height}</p>
				<p className="card-text">{store.info.hair_color}</p>
				<p className="card-text">{store.info.hair_color}</p>
				<p className="card-text">{store.info.skin_color}</p>
				<p className="card-text">{store.info.skin_color}</p>
				<p className="card-text">{store.info.eye_color}</p>
				<p className="card-text">{store.info.mass}</p>
				<p className="card-text">{store.info.birth_year}</p>
				<p className="card-text">{store.info.gender}</p>
				<p className="card-text">{store.info.eye_color}</p>
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

Single.propTypes = {
	match: PropTypes.object
};
