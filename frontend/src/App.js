import React, {Component} from 'react';
import {Provider} from "react-redux";
import configureStore from "./redux/configureStore";
import './styles/App.scss';
import Button from "react-bootstrap/Button";

const store = configureStore();


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {users: {employees: [9,8,7]}};
  }

  getData() {
    console.log('getData');

    fetch('http://localhost:3000/employees')
        .then(resp => resp.json())
        .then(json => {
          store.dispatch({type: 'GET_ALL', employees: json});
        })
  }

  componentDidMount() {
    store.subscribe(() => {
      // this.setState( store.getState() );
      console.warn('subscriber ',store.getState())
    });

  }

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Button onClick={this.getData} >Get data</Button>
          { this.state.users.employees.map(emp =>
            <h1>yep {emp.username}</h1>
          )}
        </div>
      </Provider>
    );
  }

}

export default App;
