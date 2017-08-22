import React from 'react'

import './_about.scss'

export class AboutContainer extends React.Component {
  render(){
    return (
      <div className='about-container'>
        <div className='about-pic cols'>
          <p>pic here</p>
        </div>
        <div className='about-text cols'>
          <h2 className='pg-title'> ABOUT </h2>
          <p className='pg-emph'> some stuff about me and who i am and what i do and why i do it </p>
          <p className='pg-content'> other stuff about me that is less important or just extra information </p>
          <div id="media-links">
            <div id="linked" className="media-link">
              <a href="https://www.linkedin.com/in/scott-brenden/" className="icon-linkedin"></a>
            </div>
            <div id="facebook" className="media-link">
              <a href="https://www.facebook.com/scott.brenden.1" className="icon-facebook2"></a>
            </div>
            <div id="git" className="media-link">
              <a href="https://github.com/ScottBrenden" className="icon-github"></a>
            </div>
            <div id="twitter" className="media-link">
              <a href="https://twitter.com/ScottBrenden" className="icon-twitter"></a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
