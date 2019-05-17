import React, {Component} from 'react';
import {
  BrowserRouter,
  Route, Switch
} from 'react-router-dom'

import axios from 'axios';

import Header from './Header'
import PageNotFound from './PageNotFound';
import apiKey from '../config';


class App extends Component {

  state = {
    result : [],
    searchQuery : 'cats',
    isLoading: true
  }

  componentDidMount() {
    const { searchQuery } = this.state;
    this.performSearch(searchQuery)
  }

  performSearch = ( query ) => {
    axios(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=12&format=json&nojsoncallback=1`)
      .then(response => this.setState({
        result : response.data.photos.photo,
        isLoading : false
      }))
      .catch(error => console.log(error))
      this.setState({ searchQuery : query })
  }


  render () {
    const { result, searchQuery, isLoading } = this.state
  
    return (
      <BrowserRouter>
        <div className="container">
          <Switch>
            <Header onSearch={this.performSearch} 
                    results={result} 
                    name={searchQuery} 
                    loading={isLoading}/>
            <Route component={PageNotFound} />
          </Switch>  
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
