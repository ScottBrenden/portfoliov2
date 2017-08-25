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
  constructor(props){
    super(props)
    this.state = {
      windowWidth: window.innerWidth
    }

    handleResize() {
      this.setState({windowWidth: window.innerWidth})
    }

    componentDidMount() {
      window.addEventListener('resize', this.handleResize.bind(this))
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.handleResize.bind(this))
    }
  }

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
            <div className='nav-items nav-pgs'> <a href='/'> HOME </a></div>
            <div className='nav-items nav-pgs'> <a href='/about'> ABOUT </a></div>
            <div className='nav-items nav-pgs'> <a href='/projects'> PROJECTS </a></div>
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

// <HamburgerMenu isOpen={this.state.open} menuClicked={this.handleClick.bind(this)} className='menu-icon' />
