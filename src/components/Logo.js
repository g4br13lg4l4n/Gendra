import React from 'react'
import Icon from '../../public/icon-256x256.png'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  imageIcon: {
    width: 40,
    height: 'auto'
  }
}))


export default function Logo () {
  const style = useStyles()
  return (<img src={Icon} className={style.imageIcon} alt="Logo"/>)
}