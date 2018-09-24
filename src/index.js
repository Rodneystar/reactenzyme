
import React from 'react'
import ReactDOM from 'react-dom'
import App from "./containers/App.js";
import 'bootstrap/dist/css/bootstrap.min.css';

function render() {

	ReactDOM.render(
			<App />,
		document.getElementById('root')
	)
};

render();
