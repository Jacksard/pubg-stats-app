import React, { Component } from 'react';
import Solo from '../GameType/solo';
import Duo from '../GameType/duo';
import Squad from '../GameType/squad';
import './CurrentGameType.css';

class currentGameType extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleGameType(type) {
    switch (type) {
      case 'solo':
        return (
          <Solo
            data={this.props.data}
            index={this.props.index}
            view={this.props.view}
          />
        );
      case 'duo':
        return (
          <Duo
            data={this.props.data}
            index={this.props.index}
            view={this.props.view}
          />
        );
      case 'squad':
        return (
          <Squad
            data={this.props.data}
            index={this.props.index}
            view={this.props.view}
          />
        );
      default:
        return null;
    }
  }

  render() {
    return (
      <div className='currentGameType'>
        {this.handleGameType(this.props.content)}
      </div>
    );
  }
}

export default currentGameType;
