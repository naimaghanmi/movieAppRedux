import React from 'react';
import './App.css';
import MovieList from './component/movieList'
import {movies} from './data.js'
import Add from './component/Add'
import Search from './component/search'
import {Route,Switch} from 'react-router-dom'
import description from './component/description'
import 'antd'
class App extends React.Component {
state={
  movie_list:movies


  }
  render(){
  return (
    <div className="App">
    <Search/>
     
    <Add/>
    
    <Switch>
      <Route exact path="/" component={MovieList}/>
      <Route exact path="/description/:id" component={description}/>

    </Switch>
    </div>
  );
}
}

export default App;
