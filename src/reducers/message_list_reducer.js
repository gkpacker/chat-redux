import { FECTH_MESSAGES } from '../actions';
import { SEND_MESSAGE } from '../actions';

export default function(state, action) {
  if (state === undefined) {
    return []
  }

  switch (action.type) {
    case FECTH_MESSAGES:
      return action.payload.messages;
    case SEND_MESSAGE:
      let newState = state.slice(0);
      newState.push(action.payload);

      return newState;
    default:
      return state;
  }
}
