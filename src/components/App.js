import React, {Component} from 'react';
import {
  BrowserRouter as 
  Router, Route, Switch, Redirect
} from 'react-router-dom'

import axios from 'axios';
import Spinner from 'react-spinner-material';

import apiKey from '../config';
import Header from './Header';
import Gallery from './Gallery';
import PageNotFound from './PageNotFound'


class App extends Component {

  state = {
    queryName : null,
    otherImages : [],
    cats : [],
    dogs : [],
    computers : [],
    isLoading: false
  }

  componentDidMount() {
    this.performSearch('cats');
    this.performSearch('dogs');
    this.performSearch('computers'); 
  }

  performSearch = ( query ) => {
    this.setState({ isLoading : true }, () => {
      axios(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
          if (query === 'cats') {
            this.setState({ cats : response.data.photos.photo, isLoading : false })
          } else if (query === 'dogs') {
              this.setState({ dogs : response.data.photos.photo, isLoading : false })
          } else if (query === 'computers') {
              this.setState({ computers : response.data.photos.photo, isLoading : false })
          } else {
              this.setState({ otherImages : response.data.photos.photo, queryName : query, isLoading : false })
          }
        }) 
      .catch(error => console.log(error)) 
    })   
  }


  render () {
      const { otherImages, cats, dogs, computers, queryName, isLoading } = this.state
  

    return (
      <Router>
        <Header onSearch={this.performSearch}/>
        <div className="container">
          <Switch>
            <Route exact path='/' render={() => (isLoading) ? <Spinner size={50} spinnerColor={"#B22222"} spinnerWidth={2} visible={true} /> 
              : <Redirect to='/cats' /> } />

            <Route exact path='/search/:name' render={() => (isLoading) ? <Spinner size={50} spinnerColor={"#B22222"} spinnerWidth={2} visible={true} /> 
              : <Gallery results={otherImages} name={queryName} /> } />

            <Route exact path='/cats' render={() => (isLoading) ? <Spinner size={50} spinnerColor={"#B22222"} spinnerWidth={2} visible={true} /> 
              : <Gallery results={cats} name='Cats' /> } />

            <Route exact path='/dogs' render={() => (isLoading) ? <Spinner size={50} spinnerColor={"#B22222"} spinnerWidth={2} visible={true} /> 
              :  <Gallery results={dogs} name='Dogs' /> } />

            <Route exact path='/computers' render={() => (isLoading) ? <Spinner size={50} spinnerColor={"#B22222"} spinnerWidth={2} visible={true} /> 
              : <Gallery results={computers} name='Computers' /> } />

            <Route component={PageNotFound}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
