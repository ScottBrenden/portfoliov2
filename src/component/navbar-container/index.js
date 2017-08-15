import React from 'react'
import {Link} from 'react-router-dom'

export class Navbar extends React.Component{

  render(){
    return(
      <div>
        <p> ScottBrenden </p>
        <ul>
          <li> <Link to='/'> HOME </Link></li>
          <li> <Link to='/about'> ABOUT </Link></li>
          <li> <Link to='/projects'> PROJECTS </Link></li>
        </ul>
      </div>
    )
  }
}
