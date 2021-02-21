export const getContactList = (contactList) => {
  return {
    type: "LOAD_CONTACT_LIST",
    payload: contactList,
  };
};

export const getCurrentContact = (currentContact) => {
  return {
    type: "SET_CURRENT_CONTACT",
    payload: currentContact,
  };
};


export const deleteContac = (contactId) => {
  // alert('delete contact id: ' + contactId)
  return {
    type: "DELETE_CONTACT",
    payload: contactId,
  };
};
