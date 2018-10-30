import React, { Component } from 'react';
import './App.css';
import data from './data';
import Accordion from './components/Accordion';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Accordion data={data} />
			</div>
		);
	}
}

export default App;
