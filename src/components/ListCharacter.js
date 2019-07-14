import React, { Component } from 'react'
import axios from 'axios'

import Grid from '@material-ui/core/Grid'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import ContainerCard from './ContainerCard'
import TablePagination from '@material-ui/core/TablePagination'

export default class ListCharacter extends Component {
  constructor(props){
    super(props)
    this.state = {
      character: false,
      offset: 1
    }
  }

  componentWillMount() {
    this.loadCharacter()
  }

  async loadCharacter() {
    let resp = await axios.get(`https://rickandmortyapi.com/api/character/`)
    this.setState({
      character: resp.data
    })
  }

  renderCards() {
    let { character } = this.state
  
    if(character) {
      return character.results.map((a, i) => {
        return (
          <ContainerCard key={i}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt={ a.name }
                height="140"
                image={ a.image }
                title={ a.name }
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  { a.name }
                </Typography>
                <Grid container spacing={6}>
                  <Grid item xs={6} sm={6}>
                    <Typography variant="body2" color="primary" component="p">
                      SPECIES
                    </Typography>
                    <Typography variant="body2" color="primary" component="p">
                      STATUS
                    </Typography>
                    <Typography variant="body2" color="primary" component="p">
                      GENDER
                    </Typography>
                  </Grid>

                  <Grid item xs={6} sm={6}>
                    <Typography variant="body2" color="textSecondary" component="p">
                      { a.species }
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      { a.status }
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      { a.gender }
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </ContainerCard>
        )
      })        
    }
  }

  handlePaginate() {
    console.log('entra')
  }

  handleChangeRowsPerPage() {

  }

  render() {
    let { character } = this.state
    return(
      <Grid container spacing={3}>
        { character && this.renderCards() } 
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={10}
          rowsPerPage={5}
          page={1}
          backIconButtonProps={{
            'aria-label': 'Previous Page',
          }}
          nextIconButtonProps={{
            'aria-label': 'Next Page',
          }}
          onChangePage={() => this.handlePaginate()}
          onChangeRowsPerPage={() => this.handleChangeRowsPerPage()}
        />
      </Grid>
    )
  }
}