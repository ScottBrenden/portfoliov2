import React from 'react'

export class MeteoriteMapper extends React.Component {
  render(){
    return(
      <div id='mm' className='project'>
        <div id='mm-pic' className='project-pic cols'>
          <div className='project-title-box'>
            <h1 className='pg-title project-title'>Meteorite Mapper</h1>
          </div>
        </div>
        <div className='project-info-odd cols'>
          <p className='pg-emph'>Meteorite Mapper is a web app that allows for the viewing of meteorite landing locations on a global map. </p>
          <p className='pg-content'>Using NASA's meteorite landings API, and the Google maps API the app displays 3000 filterable meteorite landing sites. When clicked on each site will display some basic information about that meteorite.</p>
          <p className='pg-content'>The app is written in JavaScript, using NodeJS jQuery, Ajax, pageJS and Express. In order to prevent unnecessary calls to NASA's API a SQL database was set up for data persistence after the initial call.</p>
          <div className='btn-div'>
            <a href='#' className='btn-link'>Deployed version</a>
          </div>
        </div>
      </div>
    )
  }
}
