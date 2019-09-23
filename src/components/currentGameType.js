import React from 'react';
import Solo from './miniComponents/solo';
import Dou from './miniComponents/dou';
import Squad from './miniComponents/squad';

const currentGameType = props => {
  return (
    <div>
      <p>
        test current index: {props.index} and content: {props.content}
      </p>
      <Solo index={props.index} content={props.content} />
      <Dou index={props.index} content={props.content} />
      <Squad index={props.index} content={props.content} />
    </div>
  );
};

export default currentGameType;
