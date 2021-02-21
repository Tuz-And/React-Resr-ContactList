import React from "react";
import { Link } from "react-router-dom";
import "./ContactItem.css";
import {deleteContac} from '../../../Actions/ContactListActions';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import deleteData from './DeleteContactItem';


class ContactItem extends React.Component {
  state = {
    id: this.props.id,
    name: this.props.name,
    surname: this.props.surname,
    role: this.props.role,
    avatar: this.props.avatar,
    // created: this.props.created,
    status: this.props.status,
    email: this.props.email,
    gender: this.props.gender,
  };


  render() {
    const { id, avatar, role, name, email, gender, surname } = this.state;
    const { status } = this.props;
    // const { onStatusChange} = this.props;

    const URL = `https://api.randomuser.me/portraits/${gender}/${avatar}.jpg`;

    let statusStyle = "label label-default";

    if (status === "Active") {
      statusStyle = "label label-success";
    } else if (status === "Inctive") statusStyle = "label label-default";
    else if (status === "Banned") statusStyle = "label label-danger";
    else if (status === "Pending") statusStyle = "label label-warning";
    return (
      <tr className='bg-light mt-2 '>
        <td>
          <img src={URL} alt="" />
          
          
        </td>
        <td>
          <h4>{name}</h4>
          <h4>{surname}</h4>
          
            
          
        </td>
        <td>
          <span className="user-subhead">{role}</span>
        </td>
        <td className="text-center">

            {status}
          
        </td>
        <td>
          <a href="#">{email}</a>
        </td>
        <td>
          {/* <Link to="/edit" className="table-link" onClick={this.props.onEdit}>
            <span className="fa-stack">
              <i className="fa fa-square fa-stack-2x"></i>
              <i className="fa fa-pencil fa-stack-1x fa-inverse"></i>
            </span>
          </Link> */}
          <a href="#" className="table-link danger">
        
            <span className="fa-stack" onClick={() => this.props.deleteContac(id)}>
              <i className="fa fa-square fa-stack-2x"></i>
              <i className="fa fa-trash-o fa-stack-1x fa-inverse"></i>
            </span>
          </a>
        </td>
      </tr>
    );
  }
}



function mapDispatchToProps (dispatch){
  return bindActionCreators({deleteContac: deleteContac},dispatch);
}

export default connect( undefined, mapDispatchToProps)(ContactItem);
