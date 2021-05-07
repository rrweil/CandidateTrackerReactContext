import React, { Component } from 'react';
import { Route } from 'react-router';
import Layout from './Layout'
import Home from './Pages/Home';
import AddCandidate from './Pages/AddCandidate';
import Pending from './Pages/Pending';


export default class App extends Component {

  render() {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route exact path='/addcandidate' component={AddCandidate} />
        <Route exact path='/pending' component={Pending}/>
      </Layout>
    );
  }
}
