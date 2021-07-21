import React from 'react'
import HeaderComp from "./comp/HeaderComp";
import CoverComp from "./comp/CoverComp";
import BlogComp from "./comp/BlogComp";
import ProductComp from "./comp/ProductComp";
import FaqComp from "./comp/FaqComp";
import FooterComp from "./comp/FooterComp";


import "./App.css";
const App = () => {
	return (
		<div className="app">
			<HeaderComp />
			<CoverComp/>
			<BlogComp />
			<ProductComp />
			<FaqComp />
			<FooterComp />
		</div>
	)
}

export default App