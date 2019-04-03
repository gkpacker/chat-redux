import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { createMessage } from '../actions';

class MessageForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };
  }

  componentDidMount() {
    this.messageBox.focus();
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { createMessage, selectedChannel, currentUser } = this.props;
    const { value } = this.state;

    createMessage(selectedChannel, currentUser, value)

    this.setState({ value: '' });
    this.messageBox.focus();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className='form-group channel-editor'>
        <input
          autoComplete="off"
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          className='form-control'
          ref={input => this.messageBox = input}
        />
        <button type='submit'>Send</button>
      </form>
    );
  }
}

function mapStateToProps(state) {
  const { currentUser, selectedChannel } = state;

  return { currentUser, selectedChannel };
}

function mapDispatchToProps(dispatch) {
  return (
    bindActionCreators(
      { createMessage },
      dispatch
    )
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);
