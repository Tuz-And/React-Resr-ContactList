import React, { Fragment } from "react";
import ContactItem from "./ContactItem/ContactItem";
import ContactListService from "../../Services/ContactListService";
import Loader from "../Spinner/Spinner";
import Header from "../Header/header";
import deleteData from './ContactItem/DeleteContactItem';
import { Redirect } from "react-router-dom";



// Actions
import { getContactList, deleteContac } from "../../Actions/ContactListActions";

// Connect to redux
import { connect } from "react-redux";

const contactListService = new ContactListService();

class ContactList extends React.Component {
  state = {
    flag:true
  }

  componentDidMount() {
    // console.log('delContactReducer +++++++++++ ',this.props.delContact)
    
    const { getContactList } = this.props;
    
    contactListService
      .updateData()
      .then((data) => {
        // console.log("LIST ", data.List);
        getContactList(data.List);
      })
      .catch((err) => console.log(err));

      
  }

  componentDidUpdate(prevProps) {
    console.log('delContactReducer +++++++++++ ',this.props.contactId)

    if (prevProps.contactId!== this.props.contactId) {
      deleteData(this.props.contactId);
      // this.setState(flag=!prevstate);
 
    }
    // useState();
  }

  render() {
    // console.log("props++++++++++++ ", this.props);
    const { List = [], loading = true ,contactId=null} = this.props;
    console.log("props++++++++++++ ", contactId);
    // if(contactId!==null){
    //   deleteData(contactId)
    // }
    if (loading) {
      return <Loader />;
    }
    return (
      <Fragment>
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="main-box clearfix">
                <div className="table-responsive">
                  <table className="table user-list">
                    <thead>
                      <tr>
                        <th>
                          <span>User</span>
                        </th>
                        <th>
                          <span>Created</span>
                        </th>
                        <th className="text-center">
                          <span>Status</span>
                        </th>
                        <th>
                          <span>Email</span>
                        </th>
                        <th>&nbsp;</th>
                      </tr>
                    </thead>
                    <tbody>
                      {List.length !== 0 ? (
                        List.map((item) => {
                          return (
                            <ContactItem
                              key={item.id}
                              id={item.id}
                              name={item.name}
                              role={item.role}
                              avatar={item.avatar}
                              created={item.created}
                              status={item.status}
                              email={item.email}
                              gender={item.gender}
                            />
                          );
                        })
                      ) : (
                        <h2>Contact list is empty.</h2>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

  const mapStateToProps = ({ contactListReducer }) => {
    const { List, loading ,contactId} = contactListReducer;
  return ({ List, loading,contactId} )
};

const mapDispatchToProps = {
  getContactList,
  // deleteContac,

};
export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
