import React, { Component } from 'react';
import Solo from './miniComponents/solo';
import Duo from './miniComponents/duo';
import Squad from './miniComponents/squad';

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
    }
  }

  render() {
    return <div>{this.handleGameType(this.props.content)}</div>;
  }
}

export default currentGameType;
