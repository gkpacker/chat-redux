import React from 'react';
import MessageList from '../containers/message_list';
import ChannelList from '../containers/channel_list';

const App = () => {
  return (
    <div className="app messaging-wrapper">
      <div className="logo-container">
        <img src="assets/images/lewagon_logo.png" alt="" className="messaging-logo" />
      </div>
      <ChannelList />
      <MessageList />
    </div>
  );
};

export default App;
