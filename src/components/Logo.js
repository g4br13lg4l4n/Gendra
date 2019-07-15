import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  imageIcon: {
    width: 40,
    height: 'auto'
  }
}))


 const Logo = (props) => {
  const style = useStyles()
  return (<img src={props.image} className={style.imageIcon} alt="Logo"/>)
}

export default Logo