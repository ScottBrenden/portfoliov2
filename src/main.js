import React from 'react'
import ReactDOM from 'react-dom'
import './styles/main.scss'

class Navbar extends React.Component{
  constructor(props){
      super(props)
      this.state = {
        count: 0
      }

      this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    console.log('did a click')
    this.setState(prevState => {count: prevState.count++})
  }

  render(){
    return(
      <div>
        <p onClick={this.handleClick}> about </p>
        <p onClick={this.handleClick}> home </p>
        <p onClick={this.handleClick}> projects </p>
        <p>{this.state.count}</p>
      </div>
    )
  }
}

class Home extends React.Component{
  constructor(props){
    super(props)
    this.state = {

    }
  }



  render(){
    return(
      <div>
        <Navbar className="home-nav" />
        <h1> Scott Brenden</h1>
      </div>
    )
  }
}


ReactDOM.render(<Home />, document.getElementById('root'))
