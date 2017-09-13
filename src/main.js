import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route, Link} from 'react-router-dom'
import './styles/_reset.scss'
import './styles/_main.scss'
import './vendor/icons.css'

import {AboutContainer} from './component/about-container'
import {ProjectsContainer} from './component/projects-container/projects'
import {landingContainer} from './component/landing-container'
// import {Navbar} from './component/navbar-container'
// import {HamburgerMenu} from '../node_modules/react-hamburger-menu/dist'


class App extends React.Component{

  render(){
    let logo = '/imgs/SBtreelogoblk.png'
    return(
      <main>
        <header>
          <nav>
            <div id='name-logo' className='nav-items'>
              <h1 id='name'> Scott Brenden </h1>
              <div className='nav-logo'></div>
            </div>
            <div className='icon-align-justify menu-icon'></div>
            <a href='/'><div className='nav-items nav-pgs'> HOME </div></a>
            <a href='/about'><div className='nav-items nav-pgs'> ABOUT </div></a>
            <a href='/projects'><div className='nav-items nav-pgs'> PROJECTS </div></a>
          </nav>
        </header>
        <BrowserRouter>
          <div>
            <Route exact path='/' component={landingContainer} />
            <Route exact path='/about' component={AboutContainer} />
            <Route exact path='/projects' component={ProjectsContainer} />
          </div>
        </BrowserRouter>
      </main>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
