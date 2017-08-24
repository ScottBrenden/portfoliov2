import React from 'react'

export class Decarbonate extends React.Component {
  render(){
    return (
      <div className='project'>
        <div className='project-pic cols'>
          <div className='project-title-box'>
            <h1 className='pg-title project-title'>Decarbonate</h1>
          </div>
        </div>
        <div className='project-info-even cols'>
          <p className='pg-emph'>Every time a person travles to an event, near or far, they have create a carbon footprint. Decarbonate allows for the calculation, and offestting of that footprint.</p>
          <p className='pg-content'></p>
          <div className='btn-div'>
            <a href='#' className='btn-link'>Github</a>
          </div>
        </div>
      </div>
    )
  }
}
