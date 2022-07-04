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
				<Navbar/>
					
				<SearchDrop widgets={widgets}/>
				
				
				<Scroll>
					<CardList widgets={filteredWidgets}/>
				</Scroll>


			</div>
		)				
	}
	
}

export default App;