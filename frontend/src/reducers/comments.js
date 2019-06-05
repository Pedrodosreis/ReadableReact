export const REQUEST_COMMENTS = 'REQUEST_COMMENTS';
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const ADD_COMMENT = 'ADD_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const INCREASE_COMMENT_SCORE = 'INCREASE_COMMENT_SCORE';
export const DECREASE_COMMENT_SCORE = 'DECREASE_COMMENT_SCORE';

function deleteComment(state, id) {
  return state.filter(c => {
    return c.id !== id
  })  
}


export default function comments(state = {}, action) {
  
  switch (action.type) {
    case RECEIVE_COMMENTS:
      return action.comments
    case ADD_COMMENT:
      let comment = {
        author: action.comment.author,
        body: action.comment.body,
        deleted: false,
        id: action.comment.id,
        parentDeleted: false,
        parentId: action.comment.parentId,
        timestamp: new Date().getTime(),
        voteScore: 1,
      }

      return state.concat(comment)
    case INCREASE_COMMENT_SCORE:
      return state
    case DECREASE_COMMENT_SCORE:
      return state;
    case EDIT_COMMENT:
      return action.comment;
    case REMOVE_COMMENT:
      return deleteComment(state, action.id);
    default:
      return state
  }
}