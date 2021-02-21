import React from "react";




function deleteData(item) {
    return fetch('http://localhost:8000/api/contacts/' + item, {
      method: 'delete'
    })
    .then(response => response.json());
  }


export default deleteData;