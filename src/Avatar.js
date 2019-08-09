import React,{Component} from 'react';
import './Avatar.css';
import 'tachyons';
import Avatarlist from './Avatarlist';



class Avatar extends Component{

	constructor(){
		super();
		this.state = {
			name:"Welcome to My Page"
		}
	}

	namechage(){
		this.setState({
			name:"Subscribe to My Page"
		})
	}

	render(){
		const avatarlistarray = [
			{
				id:1,
				name:"Nikhil",
				work:"Web Developer"
			},
			{
				id:2,
				name:"Yogesh",
				work:"Web Developer"
			},
			{
				id:3,
				name:"Kunal",
				work:"Web Developer"
			},
			{
				id:4,
				name:"Akshay",
				work:"Web Developer"
			}
		]

		const arrayavatarcard = avatarlistarray.map( (avatarcard, i) => {
			return <Avatarlist key={i} id={avatarlistarray[i].id} name={avatarlistarray[i].name} work={avatarlistarray[i].work} />
		})
	
		return (
			<div className="mainpage">
				<h1>{this.state.name}</h1>
			    
				{arrayavatarcard}

				<button onClick={ () => this.namechage() }> Subscribe </button> 
			</div>
		   )
	}
}
	


export default Avatar;