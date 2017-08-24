import React from 'react'
import {LookingToGame} from './projects/looking-to-game.js'
import {Decarbonate} from './projects/decarbonate.js'
import {MeteoriteMapper} from './projects/meteorite-mapper.js'

import './_projects.scss'

export class ProjectsContainer extends React.Component {
  render(){
    return(
      <div className='projects-container'>
        <LookingToGame />
        <Decarbonate />
        <MeteoriteMapper />
      </div>
    )
  }
}
