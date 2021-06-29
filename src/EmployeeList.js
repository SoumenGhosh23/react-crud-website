
import React from 'react';
import { Button } from 'react-bootstrap';
import MaterialTable from 'material-table';
import { Alert } from 'bootstrap';
import Login from './Login';

class EmployeeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      employees: [],
      response: {}
    }
  }

  componentDidMount() {
    const apiUrl = 'http://localhost/bcit/index.php/Reactapi/employees';

    fetch(apiUrl)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            employees: result
          });
        },
        (error) => {
          this.setState({ error });
        }
      )
  }

  deleteProduct(productId) {
    const { employees } = this.state;

    const apiUrl = 'http://localhost/bcit/index.php/Reactapi/deleteEmployee';
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
            response: result,
            employees: employees.filter(product => product.id !== productId)
          });
        },
        (error) => {
          this.setState({ error });
        }
      )
  }

  render() {
    const { error, employees } = this.state;

    if (error) {
      return (
        <div>Error: {error.message}</div>
      )
    } else {
      return (
        <div>
         <div className="title">Employees List</div>
        <br/>
          <MaterialTable
            title="Employee Table"
            columns={[
              { title: 'Name', field: 'name' },
              { title: 'position', field: 'position' },
              { title: 'office', field: 'office' },
              { title: 'Extn', field: 'extn', },
              { title: 'salary', field: 'salary', },
            ]}
            data={employees}
            actions={[
              {
                icon: 'edit',
                tooltip: 'Edit employee',
                onClick: (event, rowData) => {
                  this.props.editProduct(rowData.id)
                }
              },

              {
                icon: 'delete',
                tooltip: 'Delete employee',
                onClick: (event, rowData) => {
                  this.deleteProduct(rowData.id)
                }
              }
            ]}
            options={{
              actionsColumnIndex: -1
            }}
          />
          <br></br>
          {/* <a href={<Login />}><Button variant="primary" onClick={() => this.logout()}>Logout</Button></a> */}
          <a href={<Login/>}><button className="add-button" onClick={() => this.logout()}>Logout</button></a>

        </div>
      )
    }
  }
}

export default EmployeeList;

