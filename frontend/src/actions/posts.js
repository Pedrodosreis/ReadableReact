import { getPosts, votePost } from '../utils/API.js';

export const REQUEST_POST = 'REQUEST_POST';
export const RECEIVE_POST = 'RECEIVE_POST';

export const requestPosts = () => {
  return {
    type: REQUEST_POST,
  }
}

export const receivePosts = (posts) => {
  return {
    type: RECEIVE_POST,
    posts
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

export const voteScore = (id, option) => {
  return dispatch => {
    return votePost(id, option)
      .then(post => getPosts()
        .then(posts => dispatch(receivePosts(posts))))
  }
}