import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import {widgets} from '../components/widgets';
import './App.css';
import Scroll from '../components/Scroll.js';
import Selector from '../components/Selector.js';

class App extends Component {

	constructor(){
		super()
		this.state ={
			widgets: widgets,
			searchfield: ''
		}
	}

	// componentDidMount(){
	// 	fetch('https://jsonplaceholder.typicode.com/users')
	// 	.then (response=> response.json())
	// 	.then (users=> this.setState({widgets: users}));
	// }

	onSearchChange = (event) =>{
		this.setState({searchfield: event.target.value})		
	}

	render(){
		const {widgets, searchfield} = this.state
		const filteredWidgets = widgets.filter(widget=>{
			return widget.name.toLowerCase().includes(searchfield.toLowerCase())
		})

		return !widgets.length ?
			<h1>Loading</h1> :
		(
			<div className='tc'>
				<h1 className='fl w-75'>drillBench</h1>
				<Selector/>
				{/*<SearchBox searchChange={this.onSearchChange}/>*/}
				<Scroll>
					<CardList widgets={filteredWidgets}/>
				</Scroll>

			</div>
		)

				
	}
}

export default App;