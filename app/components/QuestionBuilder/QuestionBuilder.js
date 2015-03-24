import React from 'react';
import TemplateLibrary from './TemplateLibrary'

class QuestionBuilder extends React.Component {
  getInitialState() {
    return {
      stores: []
    }
  }

  render() {
    return (
      <div>
        <h1>Question building</h1>
        <TemplateLibrary />
        { this.state.stores.map(function(store) {
          return (
            <Question />
          );
        }) }
      </div>
    );
  }
}

export default QuestionBuilder;
