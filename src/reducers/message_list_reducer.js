import { FECTH_MESSAGES } from '../actions';
import { CREATE_MESSAGE } from '../actions';

export default function(state = [], action) {
  switch (action.type) {
    case FECTH_MESSAGES:
      return action.payload.messages;
    case CREATE_MESSAGE:
      let newState = state.slice(0);
      newState.push(action.payload);

      return newState;
    default:
      return state;
  }
}
