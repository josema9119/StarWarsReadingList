import React,{useContext, useEffect} from "react";
import {Link} from "react-router-dom";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import reactRouterDom from "react-router-dom";


export const Home = () => {
	const { store, actions } = useContext(Context);

	useEffect (()=>{
		actions.getPeople()

	}, [])
   return (
	   <div>
	   <h1>People</h1>
	   <div className="row">
	   {store.people.map((people, i)=>{

		   return <div key={i} className="card" style={{width: "18rem"}}>
						<img src="..." className="card-img-top" alt="..."/>
						<div className="card-body">
							<h5 className="card-title">{people.name}</h5>
							<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
							<Link to="/single/" + people.uid>
								<button className="btn btn-primary">More info</button>
							</Link>
						</div>
		 </div>
		})}
		</div>
		</div>
   )
    
};

