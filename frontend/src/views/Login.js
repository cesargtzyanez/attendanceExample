import React, {Component} from 'react';
import {Field, reduxForm, submit} from 'redux-form';
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';
import {GET_ALL} from "../redux/actionTypes";
import Button from "react-bootstrap/Button";

class Login extends Component {

  submitHandler = (values) => {
    console.log('values', values);
   //dispatch({type: 'GET_ALL'})
  };

  render() {
    const { handleSubmit } = this.props;
    return (
        <form className="container form-group" onSubmit={handleSubmit(this.submitHandler.bind(this))}>
          <div className="row">
            <div className="col-4 offset-4">
              <Field
                  placeholder="Username"
                  className="form-control"
                  name="username"
                  component="input"
                  type="text"/>
            </div>
          </div>
          <div className="row">
            <div className="col-4 offset-4">
              <Field
                  placeholder="Password"
                  className="form-control"
                  name="password"
                  component="input"
                  type="password"/>
            </div>
          </div>
          <div className="row">
            <div className="col-4 offset-4">
              <Button type="submit">Login</Button>
            </div>
          </div>
        </form>
    );
  }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

Login = connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);

export default reduxForm({
  form: 'login'
})(Login)
