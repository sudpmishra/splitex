const root = ""
const auth_token = localStorage.getItem("user_auth_token")
export default {
  get: (url, params) => {
    url = root + url
    return fetch(url, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + auth_token
      },
      // body: JSON.stringify(data) // body data type must match "Content-Type" header
    })
      .then((res) => res.json());
  },
  post: (url, body) => {
    url = root + url
    return fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + auth_token
      },
      body: JSON.stringify(body) // body data type must match "Content-Type" header
    })
      .then((res) => res.json())
  },
  put: (url, body) => {
    url = root + url
    return fetch(url, {
      method: 'PUT', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + auth_token
      },
      body: JSON.stringify(body) // body data type must match "Content-Type" header
    })
      .then((res) => res.json());
  },
  delete: (url, params) => {
    url = root + url
    return fetch(url, {
      method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + auth_token
      },
      // body: JSON.stringify(data) // body data type must match "Content-Type" header
    })
      .then((res) => res.json());
  }
}