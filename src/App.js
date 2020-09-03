import React from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import SignInAndSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up.component'
import {Switch,Route} from 'react-router-dom'
import Header from './components/header/header.component'


function App() {
  return (
    <div>
      <Header/>
      <Switch>
          <Route exact path = '/' component = {Homepage}/>
          <Route exact path = '/shop' component = {ShopPage}/>
          <Route exact path = '/signin' component = {SignInAndSignUpPage}/>

        </Switch>
      </div>
      
  );
}

export default App;
