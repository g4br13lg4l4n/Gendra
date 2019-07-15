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
import Loading from './Loading'

export default class ListCharacter extends Component {
  constructor(props){
    super(props)
    this.state = {
      character: false,
      info: {
        count: 10,
        pages: 1,
        rowsPerPage: 1
      },
      currentPage: 0,
      loading: true
    }
  }

  componentWillMount() {
    this.loadCharacter()
  }

  async loadCharacter() {
    let resp = await axios.get(`https://rickandmortyapi.com/api/character/`)
    this.setState({
      character: resp.data.results,
      info: resp.data.info,
      loading: false
    })
  }

  renderCards() {
    let { character } = this.state
  
    if(character) {
      return character.map((a, i) => {
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

  async handlePaginate(event, newPage) {
    
    this.setState({
      loading: true
    })
    let page = this.state.currentPage === 0 ? newPage = 2 : newPage
    let resp = await axios.get(`https://rickandmortyapi.com/api/character/?page=` + page)

    newPage = newPage === 1 ? 0 : newPage
    this.setState({
      character: resp.data.results,
      info: resp.data.info,
      loading: false,
      currentPage: newPage   
    })
  }

  render() {
    let { character, info, loading, currentPage } = this.state
    return(
      <div>
        { this.renderCards() && 
          !loading ?
          (
          <div>
            <Typography variant="h2" gutterBottom>
              Episodes
            </Typography>
            <Grid container spacing={3}>
              { this.renderCards() }
            </Grid>
            <TablePagination
              rowsPerPageOptions={[]}
              component="div"
              count={ info.count }
              rowsPerPage={ character.length }
              page={ currentPage }
              backIconButtonProps={{
                'aria-label': 'Previous Page',
              }}
              nextIconButtonProps={{
                'aria-label': 'Next Page',
              }}
              onChangePage={(event, newPage) => this.handlePaginate(event, newPage)}
            />
          </div>
          ) : <Loading/>
          } 
      </div>
    )
  }
}