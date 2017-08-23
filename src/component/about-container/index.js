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
          <p className='pg-emph'> My name is Scott Brenden. I am a full-stack JavaScript web developer. </p>
          <p className='pg-content'> Growing up I became a huge baseball fan (Go Mariners!). Later on in life I relized this was largely due to my pasion for statistics and data in general. After years of working in a veriaty of constomer service rolls I noticed how much room for improvement there is how a lot data is compiled or presented. This was a significant factor in my decision to make the career change to becoming a developer.</p>
          <p className='pg-content'> My passions as a developer are building well designed data bases, and displaying them in attractive and intuitive ways to users. Creating meaningful and well designed data bases that are intuitive to use is incredably important. Even well constructed data however can be made meaningless if poorly displayed to a user. </p>
          <h2 className='sub-section'>Follow me at these places to learn more:</h2>
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
