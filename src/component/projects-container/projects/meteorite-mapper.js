import React from 'react'

export class MeteoriteMapper extends React.Component {
  render(){
    return(
      <div id='mm' className='project'>
        <div className='project-pic cols'>
          <div className='project-title-box'>
            <h1 className='pg-title project-title'>Meteorite Mapper</h1>
          </div>
        </div>
        <div className='project-info-odd cols'>
          <p className='pg-emph'></p>
          <p className='pg-content'></p>
          <div className='btn-div'>
            <a href='#' className='btn-link'>Deployed version</a>
          </div>
        </div>
      </div>
    )
  }
}
