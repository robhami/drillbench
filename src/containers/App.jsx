import React, {Component} from 'react';
import CardList from '../components/CardList';
import {widgets} from '../components/widgets';
import './App.css';
import Scroll from '../components/Scroll.js';
import SearchDrop from '../components/SearchDrop.js'
import Navbar from '../components/Navbar.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

let appArray="";

class App extends Component {

	constructor(){
		super()
		this.state ={
			widgets: widgets,
			searchfield: ''
		}
	}

	handleNameChange = (searchfield) => {
		
		this.setState({searchfield})
		console.log(searchfield)
	}

	
	onSearchChange = (event, i) =>{
			// this.setState({searchfield: event.target.value})
			console.log(event.length)
			
			for(i=0; i<event.length; i++)	{
				
				appArray.concat(event[i].label);
				
				this.setState({searchfield: event[i].label})
				
			}	
		}

	render(){
		console.log(appArray);
		const {widgets, searchfield} = this.state
		const filteredWidgets = widgets.filter(widget=>{
			return (
				widget.name.toLowerCase().includes(searchfield.toLowerCase())
			)
			
		})
		console.log(filteredWidgets)
		return !widgets.length ?
			<h1>Loading</h1> :
		(
			

			<div>
				<Navbar onChange={this.handleNameChange}/>
					
				<SearchDrop  xonChange={this.onSearchChange}/>
				<Scroll>
					<CardList widgets={filteredWidgets}/>
				</Scroll>


			</div>
		)

				
	}
	
}

export default App;