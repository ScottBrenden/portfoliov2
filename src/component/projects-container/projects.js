import React from 'react'

import './_projects.scss'

export class ProjectsContainer extends React.Component {
  render(){
    return(
      <div className='projects-container'>
        <div className='project'>
          <div className='project-pic cols'>
            <div className='project-title-box'>
              <h1 className='pg-title project-title'>Looking to Game</h1>
            </div>
          </div>
          <div className='project-info-odd cols'>
            <p className='pg-emph'>Looking to Game is a full-stack web app which provides a place gamers can go inorder to find a play group.</p>
            <p className='pg-content'>Many games have matchmaking lobbies or places to join groups. A significant number of games do not however, and some that do have poorly functioning systems. This is where we come in. Sign up, creat a play group or join an existing one.</p>
            <p className='pg-content'>Built on a week deadline, this app utilizes the following: JavaScript, NodeJS, Express, AngularJS, HTML, CSS using SCSS, RESE API stored with MongoDB, and built with test driven development.</p>
            <div className='btn-div'>
              <a href='#' className='btn-link'>Deployed version</a>
            </div>
          </div>
        </div>
        <div className='project'>
          <div className='project-pic cols'>
            <div className='project-title-box'>
              <h1 className='pg-title project-title'>Decarbonate</h1>
            </div>
          </div>
          <div className='project-info-even cols'>
            <p className='pg-emph'></p>
            <p className='pg-content'></p>
            <div className='btn-div'>
              <a href='#' className='btn-link'>Github</a>
            </div>
          </div>
        </div>
        <div className='project'>
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
      </div>
    )
  }
}
