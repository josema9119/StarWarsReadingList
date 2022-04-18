import React,{useContext, useEffect} from "react";
import {Link} from "react-router-dom";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import reactRouterDom from "react-router-dom";

const scrollContainer = document.querySelector("scrolling-wrapper-flexbox");

export const Home = () => {
	const { store, actions } = useContext(Context);

	useEffect (()=>{
		actions.getPeople()

	}, [])
   return (
	   <div className="text-center mt-5">
		   <h1>Characters</h1>
			<div className="conatiner">
				<div className="row scrolling-wrapper-flexbox ">
					{store.people.map((people)=>{

						return <div key={people.uid} className="card" style={{width: "540px"}}>
							<div className="row g-0">
							<div className="col-md-4">
								<img src="https://smoda.elpais.com/wp-content/uploads/2019/12/2-look.jpg" className="card-img-top" alt="..."/>
								</div>
								<div className="col-md-8">
								<div className="card-body">
									<h5 className="card-title">{people.name}</h5>
									<p className="card-text">
										
									</p>
									
										<div className="btn-group-vertical justify-content-center">
											<Link to={"/single/" + people.uid}>
												<button className="btn btn-warning self-align-center" style={{opacity: 0.9, border: 0, borderRadius: "3%", width: "15rem"}}>More info</button>
											</Link>
											<button className="btn btn-warning" style={{opacity: 0.9, border: 0, borderRadius: "3%", marginTop: "10px"}} >Add to Favourites<i class="fab fa-jedi-order" style={{marginLeft: "10px", fontSize: "25px"}} ></i></button>
										</div>
										
									
								</div>
								</div>
								</div>
							</div>
						})}
					</div>
			</div>
		</div>
   )
    
};

