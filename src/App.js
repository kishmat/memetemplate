import React from 'react'
import Home from './components/Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Post from './components/Post';

function App() {
  return(
    <div>

      <Router>
        <div>
          <Switch>
          <Route path='/memetemplate' exact component={Home}/>
          <Route path='/memetemplate/post' exact component={Post}/>
          </Switch>
        </div>
      </Router>
    </div>

   
  )
}

export default App;
