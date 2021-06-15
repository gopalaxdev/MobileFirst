import React from 'react';
import './App.css';
import './bootstrap.css'
import Login from './components/Login/login'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ProtectedRoute from './components/protectedRoutes'
import HomePage from './components/HomePage'
import AddPage from './components/AddPage'
import Logout from './components/Logout'
import JokesSpot from './components/JokesSpot'
import { checkAuthentication } from './redux/action'
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

import { RootState } from './redux/configureStore'
import { IUser } from './type';

import Header from './components/Header'

function App() {

  const dispatch = useDispatch();
  const [loading, setLoading] = useState<boolean>(true);

  //check Loggin 

  const checkLoggedIn = async () => {
    console.log(await dispatch(await checkAuthentication()));
  }

  useEffect(() => {
    async function fetchData() {
      console.log('Inside Use Effect')
      await checkLoggedIn()

      setLoading(false)
    }
    fetchData()

  }, []);

  let state = useSelector((state: RootState): IUser => {
    return state.userReducer;
  });
  ;
  const isAuth = state['isAuth'];
  console.log(isAuth)


  return (
    < div className="app" >
      {!loading ?
        < Router >
          <Header />
          < Switch >
            <Route exact path='/' component={Login} />

    // Table Showing purpose
            <ProtectedRoute exact path='/viewTask' component={HomePage} />

    // Add/Edit the task
            <ProtectedRoute exact path='/editTask' component={AddPage} />
            <ProtectedRoute exact path='/logout' component={Logout} />
            <ProtectedRoute exact path='/jokesSpot' component={JokesSpot} />
          </Switch >
        </Router >
        : <div>....Some Null{console.log('here In Loading')}</div>
      }
    </div >

  );
}

export default App;
