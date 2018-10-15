
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from "./containers/App.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.css'
import configureStore from './store/configureStore'
import {Provider} from 'react-redux'

const store = configureStore()
function render() {

	ReactDOM.render(
	  <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
		document.getElementById('app')
	)
};

render();
