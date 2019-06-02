export const REQUEST_COMMENTS = 'REQUEST_COMMENTS';
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const ADD_COMMENT = 'ADD_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const INCREASE_COMMENT_SCORE = 'INCREASE_COMMENT_SCORE';
export const DECREASE_COMMENT_SCORE = 'DECREASE_COMMENT_SCORE';

export default function comments(state = {}, action) {
  
  switch (action.type) {
    case RECEIVE_COMMENTS:
      return action.comments
    case ADD_COMMENT:
      return action.comment
    case INCREASE_COMMENT_SCORE:
      return state
    case DECREASE_COMMENT_SCORE:
      return state;
    case EDIT_COMMENT:
      return action.comment;
    case REMOVE_COMMENT:
      return state;
    default:
      return state
  }
}