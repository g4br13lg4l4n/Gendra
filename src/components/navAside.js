import React from 'react'
import { withRouter } from 'react-router'
import { NavLink } from 'react-router-dom'

import Paper from '@material-ui/core/Paper'
import MenuItem from '@material-ui/core/MenuItem'
import MenuList from '@material-ui/core/MenuList'

import Logo from './Logo'
import Rick from '../../public/icon-256x256.png'
import Morty from '../../public/icons8-morty-smith-96.png'


 let NavAside = (props) => {
  return (
      <Paper>
        <MenuList>
          <MenuItem><NavLink to="/"><Logo image={Rick}/> Characters</NavLink></MenuItem>
          <MenuItem><NavLink to="/episodes"><Logo image={Morty}/> Episodes </NavLink></MenuItem>
        </MenuList>
      </Paper>
  )
}

export default withRouter(NavAside)


