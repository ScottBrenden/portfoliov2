import React from 'react'

import './_about.scss'

export class AboutContainer extends React.Component {
  render(){
    return (
      <div className='about-container'>
        <div className='about-pic'>
          <p>pic here</p>
        </div>
        <div className='about-text'>
          <h2 className='pg-title'> ABOUT </h2>
          <p className='pg-emph'> some stuff about me and who i am and what i do and why i do it </p>
          <p className='pg-content'> other stuff about me that is less important or just extra information </p>
        </div>
      </div>
    )
  }
}
