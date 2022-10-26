import React, {Component} from 'react';
import CardList from '../components/CardList';
import {widgets} from '../components/widgets';
import './App.css';
import Scroll from '../components/Scroll.js';
import SearchDrop from '../components/SearchDrop.js'
import Navbar from '../components/Navbar.jsx'
import UnitCon from '../components/UnitCon/UnitCon.js';
import BHADrag from '../components/BHADrag/BHADrag.js';
import LockButton from '../components/LockButton.js'

class App extends Component {

	state ={
		widgets: widgets,
		searchfield: []
	}


	onChange = (event) => {	
		console.log(event)
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
				{/* <UnitCon/> */}
			</div>
		)				
	}	
}

export default App;