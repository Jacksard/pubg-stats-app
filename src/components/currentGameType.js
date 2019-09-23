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
        return <Solo />;
      case 'duo':
        return <Duo />;
      case 'squad':
        return <Squad />;
    }
  }

  render() {
    return (
      <div>
        this: {this.props.content} {this.props.index}
        {this.handleGameType(this.props.content)}
      </div>
    );
  }
}

export default currentGameType;

/* return (
  <div>
    <p>
      test current index: {props.index} and content: {props.content}
    </p>

    <Solo index={props.index} />
    <Dou index={props.index} />
    <Squad index={props.index} />
  </div>
);
}
} */
