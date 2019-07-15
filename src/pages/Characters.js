import React, { Component } from 'react'
import ListCharacter from '../components/ListCharacter'

export default class Characters extends Component {

  render() {
    let { search } = this.props
    return (
      <div>
        <ListCharacter search={search}/>
      </div>
    )
  }
}