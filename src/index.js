
import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Root from './containers/Root'
import './css/styles.css'

function render() {

	ReactDOM.render(
			<Root />,
		document.getElementById('root')
	)
};

render();
