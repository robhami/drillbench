import React, {Component} from 'react';
import CardList from '../components/CardList';
import {widgets} from '../components/widgets';
import './App.css';
import Scroll from '../components/Scroll.js';
import SearchDrop from '../components/SearchDrop.js'
import Navbar from '../components/Navbar.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import unitCon from '../components/unitCon.js'

import Draggable from 'react-draggable';

class App extends Component {

	state ={
		widgets: widgets,
		searchfield: []
	}

	onChange = (event) => {	
		let x
		let searchArray=[]
		for (x=0;x<event.length;x++){
			searchArray.push(event[x].value)
		}
		this.setState({searchfield: searchArray})	
	}

	render(){
		const {widgets, searchfield} = this.state
		const filteredWidgets = widgets.filter(widget=>{
			return (		
				this.state.searchfield.includes(widget.value)
			)			
		})
		
		return !widgets.length ?
			<h1>Loading</h1> :
		(
			<div>
				<Navbar/>					
				<SearchDrop widgets={widgets} onChange={this.onChange}/>				
				<Scroll>				
					<CardList widgets={filteredWidgets}/>				
				</Scroll>
			</div>
		)				
	}	
}

export default App;