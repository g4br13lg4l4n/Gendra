import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import Grid from '@material-ui/core/Grid'


const useStyles = makeStyles( theme => ({
    card: {
      maxWidth: 345,
    },
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  })
)

 const ContainerCard = (props) => {
  const classes = useStyles()

  return (
    <Grid item xs={6} sm={3}>
      <Card className={classes.card}>
        { props.children }
      </Card>
    </Grid>
  )
}

export default ContainerCard