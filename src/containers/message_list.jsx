import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Message from '../components/message';
import MessageForm from './message_form';
import { fetchMessages } from '../actions';

class MessageList extends Component {
  componentDidMount() {
    this.fetchMessages();

    this.refresher = setInterval(this.fetchMessages, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.refresher);
  }

  fetchMessages = () => {
    const { selectedChannel, fetchMessages } = this.props;

    fetchMessages(selectedChannel);
  }

  renderList = () => {
    const { messages } = this.props;

    return messages.map(message => <Message message={message} key={message.created_at} />);
  }

  render() {
    const { selectedChannel } = this.props;

    return (
      <div className='channel-container'>
        <div className="channel-title">
          <span>Channel #{selectedChannel}</span>
        </div>
        <hr/>
        <div className="channel-content">
          {this.renderList()}
        </div>
        <MessageForm />
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
