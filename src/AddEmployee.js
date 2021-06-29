
import React from 'react';
import { Row, Form, Col, Button } from 'react-bootstrap';

class AddEmployee extends React.Component {
  constructor(props) {
    super(props);
    this.initialState = {
      id: '',
      name: '',
      position: '',
      office: '',
      extn: '',
      salary: ''
    }

    if (props.product) {
      this.state = props.product
    } else {
      this.state = this.initialState;
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onFormSubmit(this.state);
    this.setState(this.initialState);
  }

  render() {

    let pageTitle;
    if (this.state.id) {
      pageTitle = <div className="title">Edit Employee</div>
    } else {
      pageTitle = <h2>Add Product</h2>
    }

    return (


      <>



        <div className="bodyAdd">
          <div className="login-div">
            <div className="title">{pageTitle}</div>
            <div className="fields">
              <div className="username"><svg fill="#999" viewBox="0 0 1024 1024"></svg>
                <input type="text"
                  className="user-input"
                  type="text"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                  placeholder="Name"
                  autoComplete="off"
                /></div>
              <div className="username"><svg fill="#999" viewBox="0 0 1024 1024"></svg>
                <input type="email"
                  className="user-input"
                  name="office"
                  value={this.state.office}
                  onChange={this.handleChange}
                  placeholder="office"
                /></div>
              <div className="username"><svg fill="#999" viewBox="0 0 1024 1024"></svg>
                <input type="text"
                  className="pass-input"
                  name="position"
                  value={this.state.position}
                  onChange={this.handleChange}
                  placeholder="position" /></div>
              <div className="username"><svg fill="#999" viewBox="0 0 1024 1024"></svg>
                <input type="text"
                  className="pass-input"
                  name="extn"
                  value={this.state.extn}
                  onChange={this.handleChange}
                  autoComplete="off"
                  placeholder="extn" /></div>
              <div className="username"><svg fill="#999" viewBox="0 0 1024 1024"></svg>
                <input type="text"
                  className="pass-input"
                  name="salary"
                  value={this.state.salary}
                  onChange={this.handleChange}
                  placeholder="salary" /></div>
            </div>
            <button className="signin-button" onClick={this.handleSubmit}>Save</button>
          </div>
        </div>
      </>
    )
  }
}

export default AddEmployee;

