export const REQUEST_POST = 'REQUEST_POST';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';
export const ADD_POST = 'ADD_POST';


export default function posts(state = {}, action) {
  switch (action.type) {

    case RECEIVE_POSTS:
      return action.posts
    case RECEIVE_POST:
      return action.post
    case ADD_POST:
      return action.post
    default:
      return state
  }
}