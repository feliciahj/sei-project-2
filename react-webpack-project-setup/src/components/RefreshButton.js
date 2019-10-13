import React from 'react'

class RefreshButton extends React.Component {
  constructor() {
    super()

    this.state = {
    }
    this.handleClick = this.handleClick.bind(this)
  }
  
  handleClick() {
    location.reload()
  }

  render() {
    return (
      <button className="buttons" onClick={this.handleClick}>Refresh</button>
    )
  }
}

export default RefreshButton