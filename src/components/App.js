import React, {Component} from 'react';
import {
  BrowserRouter,
  Route,
} from 'react-router-dom'

import axios from 'axios';

import Search from './Search';
import Nav from './Nav';
import Gallery from './Gallery';
import apiKey from '../config';


class App extends Component {

  state = {
    result : [],
    searchQuery : ''
  }

  componentDidMount() {
    const { searchQuery } = this.state;
    this.performSearch(searchQuery);
  }

  performSearch = ( query ) => {
    axios(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=12&format=json&nojsoncallback=1`)
      .then(response => this.setState({
        result : response.data.photos.photo
      }))
      .catch(error => console.log(error))
      this.setState({ searchQuery : query })
  }


  render () {
    const { result, searchQuery } = this.state
  
    return (
      <BrowserRouter>
        <div className="container">

          <Route path='/' render={ () => <Search onSearch={this.performSearch}/> } />
          <Route exact path='/search/:name'  Component ={ Search } />
          <Route path='/' render={ () => <Nav onSearch={this.performSearch}/> } />
          <Route path='/' render={ () => <Gallery results={result} name={searchQuery} /> } /> 

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
