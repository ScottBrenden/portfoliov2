import React from 'react'

export class LookingToGame extends React.Component {
  render(){
    return (
      <div id='ltg' className='project'>
        <div id='ltg-pic' className='project-pic cols'>
          <div className='project-title-box'>
            <h1 className='pg-title project-title'>Looking to Game</h1>
          </div>
        </div>
        <div className='project-info-odd cols'>
          <p className='pg-emph'>Looking to Game is a full-stack web app which provides a place gamers can go in-order to find a play group.</p>
          <p className='pg-content'>Many games have matchmaking lobbies or places to join groups. A significant number of games do not however, and some that do have poorly functioning systems. This is where we come in. Sign up, create a play group or join an existing one.</p>
          <p className='pg-content'>Built on a week deadline, this app utilizes the following: JavaScript, NodeJS, Express, AngularJS, HTML, CSS using SCSS, REST API stored with MongoDB, and built with test driven development.</p>
          <div className='btn-div'>
            <a href='https://ltg-fe-production.herokuapp.com' className='btn-link'>Deployed version</a>
          </div>
        </div>
      </div>
    )
  }
}
