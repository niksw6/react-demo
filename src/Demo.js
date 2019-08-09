import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './Demo.css';

const Demo = (props) => {
	return <div className="maindiv">
			<h1>Hello {props.name}</h1>
			<p> Welcome to my page</p>
			</div>
}
/*class Demo extends Component{
	render(){
		
	}
}*/

export default Demo;