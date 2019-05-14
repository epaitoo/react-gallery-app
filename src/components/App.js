import React, {Component} from 'react';


import axios from 'axios';

import Search from './Search';
import Nav from './Nav';
import Gallery from './Gallery';
import apiKey from '../config';



class App extends Component {

  state = {
    result : []
  }

  componentDidMount() {
    this.performSearch();
  }

  performSearch = ( query ) => {
    axios(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=12&format=json&nojsoncallback=1`)
      .then(response => this.setState({
        result : response.data.photos.photo
      }))
      .catch(error => console.log(error))
  }


  render () {
    const { result } = this.state
  
    return (
    
        <div className="container">
          <Search onSearch={this.performSearch}/> 
          <Nav onSearch={this.performSearch}/>
          <Gallery results={result}/> 
        </div>
    );
  }
}

export default App;
