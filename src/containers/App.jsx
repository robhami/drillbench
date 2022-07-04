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


		state ={
			widgets: widgets,
			searchfield: ''
		}


		onChange = (index) => {
			console.log(index.length)
//need to do loop through index values 


  			const {widgets} = this.state

  			this.setState({
  				widgets : widgets.filter((widget, i) => {
  					// console.log(i)
  					// console.log(widgets)
  					// console.log(widget)
  					return i !== index
  				}),

			})
		}

	render(){
		
		const {widgets, searchfield} = this.state
		const filteredWidgets = widgets.filter(widget=>{
			return (
				widget.name.toLowerCase().includes(searchfield.toLowerCase())
			)
			
		})
		// console.log(filteredWidgets)
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