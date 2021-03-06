import React from 'react'

export class Decarbonate extends React.Component {
  render(){
    return (
      <div id='dm' className='project'>
        <div id='dm-pic' className='project-pic cols'>
          <div className='project-title-box'>
            <h1 className='pg-title project-title'>Decarbonate</h1>
          </div>
        </div>
        <div className='project-info-even cols'>
          <p className='pg-emph'>Every time a person travels to an event, near or far, they have create a carbon footprint. Decarbonate allows for the calculation, and offsetting of that footprint.</p>
          <p className='pg-content'>In today's world climate change is an import issue. Carbon footprints are a big part of that, which is what this project attempts to address. Sign in through your Eventbrite account, click on an event, and after providing your starting location and method of transport you will be shown the cost of offsetting that trip. You are then provided with places to pay that offset.</p>
          <p className='pg-content'>My contributions were on the back-end utilizing JavaScript, NodeJS, Express, REST API built using Eventbrite API and Brighter Planet API.</p>          <div className='btn-div'>
            <a href='https://github.com/Carbon-Inc' className='btn-link'>Github</a>
          </div>
        </div>
      </div>
    )
  }
}
