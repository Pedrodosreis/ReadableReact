export const REQUEST_POST = 'REQUEST_POST';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';
export const ADD_POST = 'ADD_POST';
export const REMOVE_POST = 'REMOVE_POST';

export const SORT_BY_DATE = 'SORT_BY_DATE';
export const EDIT_POST = 'EDIT_POST';

  function isArray (value) {
    return value && typeof value === 'object' && value.constructor === Array;
  }

function editPost(state, post) {
  if(typeof state === 'object') {
    return state
  }

  state.map(p => {
    if(p.id === post.id) {
      p.voteScore = post.voteScore;
    }
    return p;
  })
  return state;
}

function removePost(state, post) {
  if(typeof state === 'object') {
    return state
  }
  
  return state.filter(p => {
    return p.id !== post.id
  })
}

export default function posts(state = {}, action) {
  switch (action.type) {
    case RECEIVE_POSTS:
      return action.posts
    case RECEIVE_POST:
      return action.post
    case EDIT_POST:
      let newState = editPost(state, action.post)
      return newState
    case ADD_POST:
        let post = {
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
        let removeState = removePost(state, action.post)
        return removeState
      case SORT_BY_DATE:
        if(action.sort) {
           state = state.sort(function (a,b) {
           return a.timestamp < b.timestamp ? -1 : a.timestamp > b.timestamp ? 1 : 0 ;
          })
        } else {
           state = state.sort(function (a,b) {
           return a.timestamp < b.timestamp ? 1 : a.timestamp > b.timestamp ? -1 : 0 ;
           })
        }
        return state
    default:
      return state
  }
}