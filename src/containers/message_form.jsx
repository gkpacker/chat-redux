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

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  handleSubmit = (event) => {
    const { createMessage, selectedChannel, currentUser } = this.props;
    const { value } = this.state;

    createMessage(selectedChannel, currentUser, value)
  }

  render() {
    return (
      <form className='form-group row'>
        <input type="text" id='message-content' className='from-control' />
        <input type='submit' value='Send'/>
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
