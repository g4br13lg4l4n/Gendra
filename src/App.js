import React, { Component } from 'react'
import Container from '@material-ui/core/Container'
import NavBar from './components/NavBar.js'
import ListCharacter from './components/ListCharacter'
import Box from '@material-ui/core/Box'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <Box m={4}>
          <Container>
            <ListCharacter/>
          </Container>
        </Box>
      </div>
    );
  }
}

export default App;
