import React from 'react';

const Message = ({ author, created_at, content }) => {
  return(
    <div className='message'>
      <div className="title">
        <p><strong>{author}</strong> - <em>{created_at}</em></p>
      </div>
      <div className="content">
        <p>{content}</p>
      </div>
    </div>
  )
}

export default Message;
