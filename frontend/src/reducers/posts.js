export const REQUEST_POST = 'REQUEST_POST';
export const RECEIVE_POST = 'RECEIVE_POST';

export default function posts(state = {}, action) {
  const { posts } = action;
  switch (action.type) {
    case RECEIVE_POST:
      return posts
    default:
      return state
  }
}