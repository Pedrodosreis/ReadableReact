import { getPosts, votePost, getPost, unvotePost, addPost } from '../utils/API.js';

export const REQUEST_POST = 'REQUEST_POST';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';
export const ADD_POST = 'ADD_POST';

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

export const getAllPosts = (category) => {
  return dispatch => {
    dispatch(requestPosts());
    return getPosts(category)
      .then(posts => dispatch(receivePosts(posts)))
  }
}

export const editPost = (post) => {
  return dispatch => {
    return editPost(post)
      .then(post => getPosts()
        .then(posts => dispatch(receivePosts(posts))))
  }
}

export const voteScore = (id, category, sort) => {
  return dispatch => {
    console.log(id)
    return votePost(id)
      .then(post => getPosts(category)
        .then(posts => {
          posts = posts.sort(function (a,b) {
           return a.voteScore < b.voteScore ? -1 : a.voteScore > b.voteScore ? 1 : 0 ;
          })

          dispatch(receivePosts(posts))
        }))
  }
}

export const unvoteScore = (id, category, sort) => {
  return dispatch => {
    console.log(id)
    return unvotePost(id)
      .then(post => getPosts(category)
        .then(posts => {
          posts = posts.sort(function (a,b) {
           return a.voteScore < b.voteScore ? -1 : a.voteScore > b.voteScore ? 1 : 0 ;
          })

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
           return a.voteScore < b.voteScore ? -1 : a.voteScore > b.voteScore ? 1 : 0 ;
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