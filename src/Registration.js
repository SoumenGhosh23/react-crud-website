import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import Login from './Login'

class Registration extends React.Component {
    constructor(props) {
        super(props);
        this.initialState = {
            name: '',
            email: '',
            password: '',
            repassword: '',

        }
        this.state = this.initialState;

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

        if (this.state.password == this.state.repassword) {

            let apiUrl;
            apiUrl = 'http://localhost/bcit/index.php/Reactapi/registrationApi';
            const myHeaders = new Headers();
            myHeaders.append('Content-Type', 'application/json');
            console.log(this.state);
            const options = {
                method: 'POST',
                body: JSON.stringify(this.state),
                myHeaders
            };
            fetch(apiUrl, options)
                .then(res => res.json())
                .then(result => {
                    this.setState({
                        response: result,
                    })
                },
                    (error) => {
                        this.setState({ error });
                    }
                )
            alert("Succesfully registration your gmail.Go to login page");
            this.setState(this.initialState);
        }
        else
            alert("Password and repassword are not same");


    }

    render() {
        return (
            <>

                <div className="bodybg">
                    <div className="login-div">
                        {/* <div className="logo"></div> */}
                        <div className="title">Registration</div>
                        {/* <div className="sub-title">Here</div> */}
                        <div className="fields">
                            <div className="username"><svg fill="#999" viewBox="0 0 1024 1024"><path className="path1" d="M896 307.2h-819.2c-42.347 0-76.8 34.453-76.8 76.8v460.8c0 42.349 34.453 76.8 76.8 76.8h819.2c42.349 0 76.8-34.451 76.8-76.8v-460.8c0-42.347-34.451-76.8-76.8-76.8zM896 358.4c1.514 0 2.99 0.158 4.434 0.411l-385.632 257.090c-14.862 9.907-41.938 9.907-56.802 0l-385.634-257.090c1.443-0.253 2.92-0.411 4.434-0.411h819.2zM896 870.4h-819.2c-14.115 0-25.6-11.485-25.6-25.6v-438.566l378.4 252.267c15.925 10.618 36.363 15.925 56.8 15.925s40.877-5.307 56.802-15.925l378.398-252.267v438.566c0 14.115-11.485 25.6-25.6 25.6z"></path></svg>
                                <input type="text"
                                    className="user-input"
                                    placeholder="Enter name"
                                    name="name"
                                    value={this.state.name}
                                    onChange={this.handleChange}
                                    autoComplete="off"
                                    required
                                /></div>
                            <div className="username"><svg fill="#999" viewBox="0 0 1024 1024"><path className="path1" d="M896 307.2h-819.2c-42.347 0-76.8 34.453-76.8 76.8v460.8c0 42.349 34.453 76.8 76.8 76.8h819.2c42.349 0 76.8-34.451 76.8-76.8v-460.8c0-42.347-34.451-76.8-76.8-76.8zM896 358.4c1.514 0 2.99 0.158 4.434 0.411l-385.632 257.090c-14.862 9.907-41.938 9.907-56.802 0l-385.634-257.090c1.443-0.253 2.92-0.411 4.434-0.411h819.2zM896 870.4h-819.2c-14.115 0-25.6-11.485-25.6-25.6v-438.566l378.4 252.267c15.925 10.618 36.363 15.925 56.8 15.925s40.877-5.307 56.802-15.925l378.398-252.267v438.566c0 14.115-11.485 25.6-25.6 25.6z"></path></svg>
                                <input type="email"
                                    className="user-input"
                                    placeholder="Email"
                                    name="email"
                                    value={this.state.email}
                                    onChange={this.handleChange}
                                    autoComplete="off"
                                    required
                                /></div>
                            <div className="password"><svg fill="#999" viewBox="0 0 1024 1024"><path className="path1" d="M742.4 409.6h-25.6v-76.8c0-127.043-103.357-230.4-230.4-230.4s-230.4 103.357-230.4 230.4v76.8h-25.6c-42.347 0-76.8 34.453-76.8 76.8v409.6c0 42.347 34.453 76.8 76.8 76.8h512c42.347 0 76.8-34.453 76.8-76.8v-409.6c0-42.347-34.453-76.8-76.8-76.8zM307.2 332.8c0-98.811 80.389-179.2 179.2-179.2s179.2 80.389 179.2 179.2v76.8h-358.4v-76.8zM768 896c0 14.115-11.485 25.6-25.6 25.6h-512c-14.115 0-25.6-11.485-25.6-25.6v-409.6c0-14.115 11.485-25.6 25.6-25.6h512c14.115 0 25.6 11.485 25.6 25.6v409.6z"></path></svg>
                                <input type="password"
                                    className="pass-input"
                                    placeholder="password"
                                    name="password"
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                    autoComplete="off"
                                    required /></div>
                            <div className="password"><svg fill="#999" viewBox="0 0 1024 1024"><path className="path1" d="M742.4 409.6h-25.6v-76.8c0-127.043-103.357-230.4-230.4-230.4s-230.4 103.357-230.4 230.4v76.8h-25.6c-42.347 0-76.8 34.453-76.8 76.8v409.6c0 42.347 34.453 76.8 76.8 76.8h512c42.347 0 76.8-34.453 76.8-76.8v-409.6c0-42.347-34.453-76.8-76.8-76.8zM307.2 332.8c0-98.811 80.389-179.2 179.2-179.2s179.2 80.389 179.2 179.2v76.8h-358.4v-76.8zM768 896c0 14.115-11.485 25.6-25.6 25.6h-512c-14.115 0-25.6-11.485-25.6-25.6v-409.6c0-14.115 11.485-25.6 25.6-25.6h512c14.115 0 25.6 11.485 25.6 25.6v409.6z"></path></svg>
                                <input type="password"
                                    className="pass-input"
                                    placeholder="password"
                                    name="repassword"
                                    value={this.state.repassword}
                                    onChange={this.handleChange}
                                    autoComplete="off"
                                    required /></div>
                        </div>
                        <button className="signin-button" onClick={this.handleSubmit}>Register</button>
                        <div className="link">
                            <a href={<Login />}>Already Registered.Click here</a>


                        </div>
                    </div>
                </div>
            </>

        )
    }
}

export default Registration;