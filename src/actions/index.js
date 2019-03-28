export const FECTH_MESSAGES = 'FECTH_MESSAGES';

export function fetchMessages(channel) {
  const promise = fetch(`https://wagon-chat.herokuapp.com/${channel}/messages`)
    .then(response => response.json());

  return {
    type: FECTH_MESSAGES,
    payload: promise
  };
}
