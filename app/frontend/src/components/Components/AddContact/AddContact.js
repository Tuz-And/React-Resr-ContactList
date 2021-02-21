import React from "react";
import { Redirect } from "react-router-dom";
import "./AddContact.css";
import Header from "../Header/header";


class AddContact extends React.Component {
  state = {
    name: "",
    surname: "",
    role: "",
    avatar: "",
    status: "activ",
    email: "",
    gender: "",
    isRedirect: false,

  };

  getName = (event) => {
    this.setState({
      name: event.target.value,
    });
    console.log(this.state.name)
  };
  getRole = (event) => {
    this.setState({
      role: event.target.value,
    });
  };
  getAvatar = (event) => {
    this.setState({
      avatar: event.target.value,
    });
  };
  getSurname = (event) => {
    this.setState({
      surname: event.target.value,
    });
  };
  getEmail = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  getGender = (event) => {
    this.setState({
      gender: event.target.value,
    });
  };


  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
          isRedirect: true,
        });
      
    fetch('http://localhost:8000/api/contacts/', {
      method: 'POST',
      headers: {
                "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: this.state.name,
        surname: this.state.surname,
        role: this.state.role,
        avatar: this.state.avatar,
        status: this.state.status,
        email: this.state.email,
        gender: this.state.gender,
      })
      })
      .then(function(response) {
        console.log(response)
        return response.json();
      });
    }


  render() {
    if (this.state.isRedirect) {
      return <Redirect to="/" />;
    }
    return (
      <div className="container">
        <div className="row">
          <Header />
          <div className="col-md-12">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    onChange={this.getName}
                  />
                </div>
              </div>
              <div className="form-group">
                <div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Role"
                    onChange={this.getRole}
                  />
                </div>
              </div>
              <div className="form-group">
                <div>
                  <input
                    type="number"
                    min="1"
                    max="99"
                    className="form-control"
                    placeholder="Avatar"
                    onChange={this.getAvatar}
                  />
                </div>
              </div>
              <div className="form-group">
                <div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="surname"
                    onChange={this.getSurname}
                  />
                </div>
              </div>

              <div className="form-group">
                <div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email"
                    onChange={this.getEmail}
                  />
                </div>
              </div>
              <div className="form-group">
                <div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Gender"
                    onChange={this.getGender}
                  />
                </div>
              </div>

              <div className="form-group">
                <div>
                  <button type="submit" className="btn btn-default">
                    Add contact
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AddContact;
