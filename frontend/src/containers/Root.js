import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from './App'
import Home from "../views/Home";
import Login from "../views/Login";

const Root = ({ store }) => (
    <Provider store={store}>
      <Router>
        <Route exact path="/" component={App} />
        <Route path="/login" component={Login} />
        <Route path="/home" component={Home} />
      </Router>
    </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root
