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
          <NavLink to="/"><MenuItem><Logo image={Rick}/> Characters</MenuItem></NavLink>
          <NavLink to="/episodes"><MenuItem><Logo image={Morty}/> Episodes </MenuItem></NavLink>
        </MenuList>
      </Paper>
  )
}

export default withRouter(NavAside)


