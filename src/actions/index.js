export const FECTH_MESSAGES = 'FECTH_MESSAGES';
export const CREATE_MESSAGE = 'CREATE_MESSAGE';

export function fetchMessages(channel) {
  const promise = fetch(`https://wagon-chat.herokuapp.com/${channel}/messages`)
    .then(response => response.json());

  return {
    type: FECTH_MESSAGES,
    payload: promise
  };
}

export function createMessage(channel, author, content) {
  const body = JSON.stringify({ author, content })
  const promise = fetch(
    `https://wagon-chat.herokuapp.com/${channel}/messages`,
    { method: 'POST', body }
  ).then(response => response.json());

  return {
    type: CREATE_MESSAGE,
    payload: promise
  };
}
