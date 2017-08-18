import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route, Link} from 'react-router-dom'
import './styles/_reset.scss'
import './styles/_main.scss'

import {AboutContainer} from './component/about-container'
import {ProjectsContainer} from './component/projects-container/projects'
import {landingContainer} from './component/landing-container'
// import {Navbar} from './component/navbar-container'


class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
    }
  }

  render(){
    return(
      <main>
        <header>
          <nav>
            <h1 id='name'> Scott Brenden </h1>
            <ul id='nav-bar'>
              <li className='nav-items'> <a href='/'> HOME </a></li>
              <li className='nav-items'> <a href='/about'> ABOUT </a></li>
              <li className='nav-items'> <a href='/projects'> PROJECTS </a></li>
            </ul>
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
// const container = document.createElement('div')
// document.body.appendChild(container)
// ReactDOM.render(<Home />, container)
