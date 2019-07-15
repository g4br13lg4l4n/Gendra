import React, { Component } from 'react'
import Characters from './pages/Characters'
import Episodes from './pages/Episodes'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Layout from  './components/Layout'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Layout>
            <Switch>
              <Route exact path='/' component={Characters} />
              <Route path='/episodes' component={Episodes} />
            </Switch>
          </Layout>
        </Router>
      </div>
    )
  }
}

export default App;
