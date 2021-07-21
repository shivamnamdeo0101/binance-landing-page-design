import React,{useState} from 'react'

import FaqChild from "./FaqChild";

const FaqComp = () => {

	const [data, set_data] = useState([

		{"key:":1, "ques":"How to Complete Identity Verification?" ,"ans":"Verify your Binance account with any of the supported documents by following this guide."},
		{"key:":2,"ques":"How to Buy Cryptocurrency on Binance P2P?" ,"ans":"You can now buy cryptocurrencies using Indian Rupees with 0 transaction fees on Binance P2P! Follow this guide for Weband App."},
		{"key:":3,"ques":"How to Complete Identity Verification?" ,"ans":"Verify your Binance account with any of the supported documents by following this guide."},
		{"key:":4,"ques":"How to Complete Identity Verification?" ,"ans":"Verify your Binance account with any of the supported documents by following this guide."},
		{"key:":5,"ques":"How to Complete Identity Verification?" ,"ans":"Verify your Binance account with any of the supported documents by following this guide."},

		])




	return (
		<div >
				
			<div className="faq_comp">
			<h1>FAQ </h1>

			<div className="faq_grid">
					
				{data.map((item,index) => (

					<div key={item.key}>
						<FaqChild item={item}/>
					</div>

				))}


			</div>

			</div>

			<div className="faq_bottom">
				<h1>Start Trading Now</h1>

				<div className="row_faq">
					<button className="bg_yellow">Register Now</button>

					<button >Trade Now</button>
				</div>
			</div>

		</div>
	)
}

export default FaqComp