import React, { Component } from 'react'
import NavBar from './NavBar'
import NavAside from './NavAside'

import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
//import Characters from '../pages/Characters'

export default class Layout extends Component {
  constructor (props) {
    super(props)
    this.state = {
      search: false,
      searchVal: ''
    }
  }

  handleSearch(){
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render () {
    //let { searchVal } = this.state
    return (
      <div className='body'>
        <NavBar handleSearch={ () => this.handleSearch() }/>
        <Box m={4} >
          <Grid container spacing={6}>
            <Grid item xs={2} sm={2}>
              <NavAside/>
            </Grid>
            <Grid item xs={10} sm={10}>
              <Container>
                { this.props.children }
              </Container>
            </Grid>
          </Grid>
        </Box>
      </div>
    )
  }
  
}