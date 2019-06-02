import { getPosts, votePost, getPost, unvotePost, addPost, removePost, updatePost } from '../utils/API.js';

export const REQUEST_POST = 'REQUEST_POST';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';
export const ADD_POST = 'ADD_POST';
export const EDIT_POST = 'EDIT_POST';
export const REMOVE_POST = 'REMOVE_POST';

export const requestPosts = () => {
  return {
    type: REQUEST_POST,
  }
}

export const receivePosts = (posts) => {
  return {
    type: RECEIVE_POSTS,
    posts
  }
}

export const receivePost = (post) => {
  return {
    type: RECEIVE_POST,
    post
  }
}

export const getAllPosts = (category, sort = false) => {
  return dispatch => {
    dispatch(requestPosts());
    return getPosts(category)
      .then(posts => {
        if(sort) {
           posts = posts.sort(function (a,b) {
           return a.timestamp < b.timestamp ? -1 : a.timestamp > b.timestamp ? 1 : 0 ;
          })
        }
        dispatch(receivePosts(posts))
      })
  }
}

export const getPostById = (id) => {
  return dispatch => {
    return getPost(id)
      .then(post => dispatch({
        type: RECEIVE_POST,
        post
      }))
  }
}

export const voteScore = (id, category, sort, allPosts) => {
  return dispatch => {
    return votePost(id)
      .then(post => (allPosts ? getPosts(category) : getPost(id))
        .then(posts => {
          if(sort) {
          posts = posts.sort(function (a,b) {
           return a.timestamp < b.timestamp ? -1 : a.timestamp > b.timestamp ? 1 : 0 ;
          })
          }

          dispatch(receivePosts(posts))
        }))
  }
}

export const unvoteScore = (id, category, sort, allPosts) => {
  return dispatch => {
    return unvotePost(id)
      .then(post => (allPosts ? getPosts(category) : getPost(id))
        .then(posts => {
          if(sort) {
          posts = posts.sort(function (a,b) {
           return a.timestamp < b.timestamp ? -1 : a.timestamp > b.timestamp ? 1 : 0 ;
          })
          }

          dispatch(receivePosts(posts))
        }))
  }
}

export const sortByVote = (category, sort) => {
  return dispatch => {
    dispatch(requestPosts());
    return getPosts(category)
      .then(posts => {
        if(sort) {
           posts = posts.sort(function (a,b) {
           return a.timestamp < b.timestamp ? -1 : a.timestamp > b.timestamp ? 1 : 0 ;
          })
        }
        dispatch(receivePosts(posts))
      })
  }
}

export const sendPost = (data) => async (dispatch) => {
  try {
    await addPost(data)
    dispatch({
      type: ADD_POST,
      post: data
    });
  }
  catch(err) {
    console.error("Error adding new post", err)
  }
}

export const deletePost = (id) => (dispatch) => {
  try {
    removePost(id)
    dispatch({
      type: REMOVE_POST,
      id
    });
  }
  catch(err) {
    console.error("Error removing post", err)
  }
}

export const editPost = (data) => (dispatch) => {
    updatePost(data)
    dispatch({
      type: EDIT_POST,
      post: data
    });
}