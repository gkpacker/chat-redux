import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Message from '../components/message';
import MessageForm from './message_form';
import { fetchMessages } from '../actions';

class MessageList extends Component {
  componentWillMount() {
    const { selectedChannel, fetchMessages } = this.props;

    fetchMessages(selectedChannel);
  }

  renderList = () => {
    const { messages } = this.props;

    return messages.map(message => <Message author={message.author} key={message.created_at} created_at={message.created_at} content={message.content} />);
  }

  render() {
    return (
      <div className='message-list' >
        <div className="messages">
          {this.renderList()}
        </div>
        <div className="message-form">
          <MessageForm />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { currentUser, messages, selectedChannel } = state;

  return ({ currentUser, messages, selectedChannel });
}

function mapDispatchToProps(dispatch) {
  return (
    bindActionCreators(
      { fetchMessages },
      dispatch
    )
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
