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
			searchfield: []
		}


		onChange2 = (index) => {
			// console.log(index.length)
			console.log("index: ", index)
			const {widgets} = this.state

			let selectId
			let x
			for(x=0;x<index.length;x++) {
				console.log("id: ", index[x].id)
				selectId =index[x].id
			}

  			this.setState({
  				widgets : widgets.filter((widget, i) => {
  					console.log("i: ", i)
  					console.log("widgets: ", widgets)
  					console.log("widget: ", widget)
  					return i == selectId		
  				}),
			})
		}

		onChange = (event) => {
		
			let x
			let searchArray=[]
			for (x=0;x<event.length;x++){
				console.log(event[x].value)
				searchArray.push(event[x].value)
			}

			this.setState({searchfield: searchArray})	

		}

	render(){
		console.log(this.state.searchfield)
		const {widgets, searchfield} = this.state

		const filteredWidgets = widgets.filter(widget=>{
			// console.log(widgets)
			console.log(widget)

			return (
				
				this.state.searchfield.includes(widget.value)
			)
			
		})
		console.log(filteredWidgets)
		
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