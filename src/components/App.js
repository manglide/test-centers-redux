import React, {useState, useEffect } from 'react';
import '../assets/css/App.css';

import API from '../services'

import ErrorBoundary from '../errors'
import { connect } from 'react-redux'

import { setlogin, setlogout } from '../actions'

function mapStateToProps(state) {
  return {
    login: state.login,
    logout: state.logout
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setlogin: payload => dispatch(setlogin(payload)),
    setlogout: payload => dispatch(setlogout(payload))
  };
}

function App(props) {
  const[centers, setCenters] = useState([])
  const[error, setErrors] = useState(null)
  useEffect(() => {
    API.getCovidStats()
    .then((response) => {
      if(!response.ok) {
        throw new Error("Error Fetching Network Resource");
      }
      return response.json();
    })
    .then((data) => {
      setCenters(data.data)
    })
    .catch((error) => {
      setErrors(error)
    })
  }, [])
  const setLoginBtn = (event) => {
    props.setlogin({
      login: true,
      logout: false
    })
  }
  const setLogoutBtn = (event) => {
    props.setlogout({
      login: false,
      logout: true
    })
  }
  return (
    <ErrorBoundary message={error}>
      <div className="App">
        <ul>
        {
          props.login ?
          centers.map((item, index) => (
            <li key={item.id}>{item.reg_fac_name}</li>
          ))
          :
          <>
          </>
        }
        {
          props.login ?
          <button onClick={setLogoutBtn}>Click to Log Out</button>
          :
          <button onClick={setLoginBtn}>Click to Login</button>
        }
        </ul>
      </div>
    </ErrorBoundary>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
