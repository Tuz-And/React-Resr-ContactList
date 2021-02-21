import React from "react";
import { Redirect } from "react-router-dom";
import Header from '../Header/header'

class EditContact extends React.Component {
  state = {
    id: this.props.currentContact.id,
    name: this.props.currentContact.name,
    role: this.props.currentContact.role,
    avatar: this.props.currentContact.avatar,
    status: this.props.currentContact.status,
    email: this.props.currentContact.email,
    gender: this.props.currentContact.gender,
    isRedirect: false,
  };

  getName = (event) => {
    this.setState({
      name: event.target.value,
    });
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
  getStatus = (event) => {
    this.setState({
      status: event.target.value,
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

  onSendData = (event) => {
    event.preventDefault();
    const {
      name,
      role,
      avatar,
      status,
      email,
      gender,
      
      id,
    } = this.state;
    this.props.onEditCurrentContact(
      name,
      role,
      avatar,
      status,
      email,
      gender,
      
      id
    );
    this.setState({
      isRedirect: true,
    });
  };

  render() {
    // if (this.state.isRedirect) {
    //   return <Redirect to="/" />;
    // }
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

export default EditContact;
