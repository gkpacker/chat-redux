import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMessages, selectChannel } from '../actions';

class ChannelList extends Component {
  componentWillReceiveProps = (nextProps) => {
    const { selectedChannel, fetchMessages } = this.props;

    if (selectedChannel !== nextProps.selectedChannel) {
      fetchMessages(nextProps.selectedChannel);
    }
  }

  handleClick = (channel) => {
    const { selectChannel } = this.props;

    selectChannel(channel);
  }

  renderList = () => {
    const { selectedChannel, channels } = this.props;

    return channels.map((channel) => {
      return (
        <li
          key={channel}
          onClick={() => this.handleClick(channel)}
          className={(channel === selectedChannel) ? 'active' : ''}
        >
          {channel}
        </li>
      )
    });
  }

  render() {
    return (
      <div className='channels-container'>
        <span>Redux Chat</span>
        <ul>
          {this.renderList()}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { selectedChannel, channels } = state;

  return { selectedChannel, channels };
}

const mapDispatchToProps = (dispatch) => {
  return (
    bindActionCreators(
      { fetchMessages, selectChannel },
      dispatch
    )
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);
