




import React, { Component } from 'react';
import './App.css';
import { Container, Button, Alert } from 'react-bootstrap';
import EmployeeList from './EmployeeList';
import AddEmployee from './AddEmployee';
import Login from './Login';
import Registration from './Registration';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAddEmployee: false,
      error: null,
      response: {},
      product: {},
      isEditProduct: false,
      isLogin: true

    }
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.login = this.login.bind(this);

  }
  login(email, pass) {

    console.log(email);
    console.log(pass);

    let apiUrl;


    apiUrl = 'http://localhost/bcit/index.php/Reactapi/login';

    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    let formData = { "email": email, "password": pass };
    console.log(formData);
    const options = {
      method: 'POST',

      body: JSON.stringify(formData),
      myHeaders
    };

    fetch(apiUrl, options)

      .then(res => res.json())
      .then(result => {

        if (result.status == 200) {
          this.setState({ isLogin: false })

        }
        else {
          alert("Invalid emailid or password")

        }

      },
        (error) => {
          this.setState({ error });
          alert("Invalid email id")
        }
      )


  }





  onCreate() {
    this.setState({ isAddEmployee: true });
  }

  onFormSubmit(data) {
    let apiUrl;

    if (this.state.isEditProduct) {
      apiUrl = 'http://localhost/bcit/index.php/Reactapi/editEmployee';
    } else {
      apiUrl = 'http://localhost/bcit/index.php/Reactapi/createEmployee';
    }

    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    const options = {
      method: 'POST',
      body: JSON.stringify(data),
      myHeaders
    };

    fetch(apiUrl, options)
      .then(res => res.json())
      .then(result => {
        this.setState({
          response: result,
          isAddEmployee: false,
          isEditProduct: false
        })
      },
        (error) => {
          this.setState({ error });
        }
      )
  }

  editProduct = (productId) => {

    const apiUrl = 'http://localhost/bcit/index.php/Reactapi/getEmployee';
    const formData = new FormData();
    formData.append('productId', productId);

    const options = {
      method: 'POST',
      body: formData
    }

    fetch(apiUrl, options)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            product: result,
            isEditProduct: true,
            isAddEmployee: true
          });
        },
        (error) => {
          this.setState({ error });
        }
      )
  }

  render() {

    let productForm;
    if (this.state.isAddEmployee || this.state.isEditProduct) {
      productForm = <AddEmployee onFormSubmit={this.onFormSubmit} product={this.state.product} />
    }

    return (
      <div className="App">
        {(this.state.isLogin == true) ?
          <Login login={this.login} /> :

          <Container>
            
           
            {!this.state.isAddEmployee && <div> <br/><button className="add-button" onClick={() => this.onCreate()}>Add</button> </div>}
            {this.state.response.status === 'success' && <div><br /><Alert variant="info">{this.state.response.message}</Alert></div>}
            {!this.state.isAddEmployee && <EmployeeList editProduct={this.editProduct} />}
            {productForm}
            {this.state.error && <div>Error: {this.state.error.message}</div>}
          </Container>
        }
      </div>
    );
  }
}

export default App;

