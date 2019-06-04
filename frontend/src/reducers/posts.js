export const REQUEST_POST = 'REQUEST_POST';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';
export const ADD_POST = 'ADD_POST';
export const REMOVE_POST = 'REMOVE_POST';

export const SORT_BY_DATE = 'SORT_BY_DATE';
export const EDIT_POST = 'EDIT_POST';

export default function posts(state = {}, action) {
  switch (action.type) {
    case RECEIVE_POSTS:
      return action.posts
    case RECEIVE_POST:
      return action.post
    case EDIT_POST:
      let post = {
        author: action.post.author,
        body: action.post.body,
        category: action.post.category,
        commentCount: action.post.commentCount,
        deleted: action.post.deleted,
        id: action.post.id,
        timestamp: action.post,
        title: action.post.title,
        voteScore: action.post.voteScore + 1,
      }

      let newState  = 
            {
              ...state,
              ...post
            }
      return newState
    case ADD_POST:
        post = {
          [action.post.id]: {
          author: action.post.author,
          body: action.post.body,
          category: action.post.category,
          commentCount: 0,
          deleted: false,
          id: action.post.id,
          timestamp: 545745121,
          title: action.post.title,
          voteScore: 1,
          }
      }      
      return {
        ...state,
        ...post
      }
      case REMOVE_POST:
        return state
      case SORT_BY_DATE:
        console.log(action)
        if(action.sort) {
           state = state.sort(function (a,b) {
           return a.timestamp < b.timestamp ? -1 : a.timestamp > b.timestamp ? 1 : 0 ;
          })
        } else {
           state = state.sort(function (a,b) {
           return a.timestamp < b.timestamp ? 1 : a.timestamp > b.timestamp ? -1 : 0 ;
           })
        }
        console.log(state)
        return state
    default:
      return state
  }
}