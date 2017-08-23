import React from 'react'

import './_projects.scss'

export class ProjectsContainer extends React.Component {
  render(){
    return(
      <div className='projects-container'>
        <div className='project'>
          <div className='project-pic cols'>

          </div>
          <div className='project-info-odd cols'>
            <h1 className='pg-title'>Looking to Game</h1>
            <p className='pg-emph'></p>
            <p className='pg-content'></p>
          </div>
        </div>
        <div className='project'>
          <div className='project-pic cols'>

          </div>
          <div className='project-info-even cols'>
            <h1 className='pg-title'>Decarbonate</h1>
            <p className='pg-emph'></p>
            <p className='pg-content'></p>
          </div>
        </div>
        <div className='project'>
          <div className='project-pic cols'>

          </div>
          <div className='project-info-odd cols'>
            <h1 className='pg-title'>Meteorite Mapper</h1>
            <p className='pg-emph'></p>
            <p className='pg-content'></p>
          </div>
        </div>
      </div>
    )
  }
}
