import React, { Component } from 'react';
import Solo from './miniComponents/solo';
import Duo from './miniComponents/duo';
import Squad from './miniComponents/squad';

class currentGameType extends Component {
  constructor(props) {
    super(props);
  }

  handleGameType(type) {
    switch (type) {
      case 'solo':
        return <Solo data={this.props.data} index={this.props.index} />;
      case 'duo':
        return <Duo />;
      case 'squad':
        return <Squad />;
    }
  }

  render() {
    console.log(this.props.data);
    return <div>{this.handleGameType(this.props.content)}</div>;
  }
}

export default currentGameType;
