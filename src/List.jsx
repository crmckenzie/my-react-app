import React, { Component } from 'react'

export default class extends Component {
  constructor() {
    super()

    this.state = { 
      names: [],
      current: ""
    };

    this.onButtonClicked = this.onButtonClicked.bind(this);
  }

  onListChanged() {

  }

  onButtonClicked(){
    var names = this.state.names.concat(this.state.current);
    this.setState({
      names: names
    })
  }

  render() {
    return (
        <div className="content">
          <input onChange={this.onListChanged} />
          <button onClick={this.onButtonClicked} >Submit</button>
          { this.state.names.length == 0 ?
              <div>Nothing here yet :(</div>
              :
              <div>
                <ul>
                  {this.state.names.map(function(listValue){
                    return <li>{listValue}</li>;
                  })}                  
                  </ul>
              </div>
          }
        </div>
      );
  }
}