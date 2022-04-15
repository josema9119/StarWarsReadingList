import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	useEffect (()=>{
		actions.getOnePeople()

	}, [])

	return (
		<div className="container d-flex justify-content-center">
		<div className="card" style={{width: "35rem", height: "45rem", opacity: "1"}}>
			<h1 className="display-4">{store.info.name}</h1>
			<img src="https://smoda.elpais.com/wp-content/uploads/2019/12/2-look.jpg" className="card-img-top" alt="..." style={{height: "20rem", width: "10rem"}}/>
			<div className="card-body">
				<p>{store.info.height}</p>
				<p>{store.info.hair_color}</p>
				<p>{store.info.hair_color}</p>
				<p>{store.info.skin_color}</p>
				<p>{store.info.skin_color}</p>
				<p>{store.info.eye_color}</p>
				<p>{store.info.mass}</p>
				<p>{store.info.birth_year}</p>
				<p>{store.info.gender}</p>
				<p>{store.info.eye_color}</p>
			</div>
			</div>
		
			<Link to="/">
				<p className="btn btn-warning bg-warning btn-lg"  style={{opacity: 0.8, border: 0}}  href="#" role="button">
					Back home
				</p>
			</Link>
			</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
