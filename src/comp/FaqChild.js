import React ,{useState}from 'react'
import "../App.css";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';

const FaqChild = ({item}) => {

	const [state, set_state] = useState(false);

	return (
		<div className="faq_row">
			{
				state ? <RemoveIcon onClick={()=>set_state(!state)} /> : <AddCircleIcon onClick={()=>set_state(!state)} />
			}		


			<div className="faq_col">
				<h1>{item.ques}</h1>
				<h2>{state ? item.ans : ""}</h2>
			</div>
		</div>
	)
}

export default FaqChild