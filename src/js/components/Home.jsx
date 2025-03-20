import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import NavBar from './NavBar'
import Jumbo from './Jumbo'
import Card from './Card'

//create your first component
const Home = () => {
	let random = Math.floor(Math.random() * 2)
	return (
		<div className="">
			<NavBar />
			<Jumbo />
			<div className="d-flex justify-content-center">
				<Card catName="TOM" 
				imageUrl="https://images.unsplash.com/photo-1588943011511-ef303c037195?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
				content="aui va algun contenido que haga referencia al gato, como de donde salio, edad que tiene y si esta vacunado" 
				altImage="gato negro con manchas blancas"
				/>
				<Card catName="FELIX" 
				imageUrl="https://images.unsplash.com/photo-1573468164529-76caf2bfbd1c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
				content="aui va algun contenido que haga referencia al gato, como de donde salio, edad que tiene y si esta vacunado" 
				altImage="gato negro"
				/>
				<Card catName="GARFIELD" 
				imageUrl="https://images.unsplash.com/photo-1604675223954-b1aabd668078?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
				content="aui va algun contenido que haga referencia al gato, como de donde salio, edad que tiene y si esta vacunado" 
				altImage="gato naranja"
				/>
			</div>


			<h1 className="text-center mt-5">{random ? "Hello" : "Bye"} Rigo! </h1>
			<p>
				<img src={rigoImage} />
			</p>
			<a href="#" className="btn btn-success">
				If you see this green button... bootstrap is working...
			</a>
			<p>
				Made by{" "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
				love!
			</p>

		</div>

	);
};

export default Home;