import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route} from 'react-router-dom'
import './styles/main.scss'

import {AboutContainer} from './component/about-container'
import {ProjectsContainer} from './component/projects-container/projects'

// class Navbar extends React.Component{
//   constructor(props){
//       super(props)
//       this.state = {}
//
//       this.handleClick = this.handleClick.bind(this)
//   }
//
//   handleClick(){
//     console.log('did a click')
//     this.setState(prevState => {})
//   }
//
//   render(){
//     return(
//       <div>
//
//       </div>
//     )
//   }
// }

class Home extends React.Component{
  constructor(props){
    super(props)
    this.state = {
    }
  }

  render(){
    return(
      <div>
        // <Navbar className="home-nav" />
        <h1> Scott Brenden</h1>
        <BrowserRouter>
          <div>
            <Route exact path='/about' component={AboutContainer} />
            <Route exact path='/projects' component={ProjectsContainer} />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

ReactDOM.render(<Home />, document.getElementById('root'))
// const container = document.createElement('div')
// document.body.appendChild(container)
// ReactDOM.render(<Home />, container)
