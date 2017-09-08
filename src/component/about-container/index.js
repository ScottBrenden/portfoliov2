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
<<<<<<< HEAD
          <p className='pg-content'> I am a Pacific Northwest native, I am a huge football and baseball fan, and I love spending time outdoors. Growing up, I developed my love of baseball (Go Mariners!). Later on in life I realized this was largely due to my passion for statistics and data in general. As I entered the workforce during college, I started to develop an appreciation for well-made websites, particularly in relation to companies and their efficiency. I saw many areas where data could be presented in a more useful manner, which was a significant factor in my decision to make the career change to becoming a developer.</p>
          <p className='pg-content'> Since studying web development, I’ve grown particularly fond of effectively-designed databases and displaying them in appealing and intuitive ways to users. After completing my coding program, I’ve worked to keep up my skills by perfecting some of my earlier projects as well as developing my own website. I’m eager to start in a new career and use what I know as part of a larger goal. </p>
=======
          <p className='pg-content'> Growing up I became a huge baseball fan (Go Mariners!). Later on in life I realized this was largely due to my passion for statistics and data in general. After years of working in a variety of customer service rolls I noticed how much room for improvement there is how a lot data is compiled or presented. This was a significant factor in my decision to make the career change to becoming a developer.</p>          
          <p className='pg-content'> My passions as a developer are building well designed data bases, and displaying them in attractive and intuitive ways to users. Creating meaningful and well designed data bases that are intuitive to use is incredibly important. Even well constructed data however can be made meaningless if poorly displayed to a user. </p>
>>>>>>> de4c46e14f3723960680d2fb2bd7cb846e9a832a
          <h2 className='sub-section'>Follow me at these places to learn more:</h2>
          <div id="media-links">
            <div id="linked" className="media-link card">
              <a href="https://www.linkedin.com/in/scott-brenden/" className="icon-linkedin flip-front"></a>
              <p className='flip-back'>Linked In</p>
            </div>
            <div id="facebook" className="media-link card">
              <a href="https://www.facebook.com/scott.brenden.1" className="icon-facebook2 flip-front"></a>
              <p className='flip-back'>Facebook</p>
            </div>
            <div id="git" className="media-link card">
              <a href="https://github.com/ScottBrenden" className="icon-github flip-front"></a>
              <p className='flip-back'>Github</p>
            </div>
            <div id="twitter" className="media-link card">
              <a href="https://twitter.com/ScottBrenden" className="icon-twitter flip-front"></a>
              <p className='flip-back'>Twitter</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
