import { getComments, addComment, increaseCommentScoreAPI } from '../utils/API.js';
import { decreaseCommentScoreAPI, getComment, updateComment, removeComment } from '../utils/API.js';


export const REQUEST_COMMENTS = 'REQUEST_COMMENTS';
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const ADD_COMMENT = 'ADD_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const INCREASE_COMMENT_SCORE = 'INCREASE_COMMENT_SCORE';
export const DECREASE_COMMENT_SCORE = 'DECREASE_COMMENT_SCORE';

export const requestComments = () => {
  return {
    type: REQUEST_COMMENTS,
  }
}

export const receiveComments = (comments) => {
  return {
    type: RECEIVE_COMMENTS,
    comments
  }
}

export const getCommentsByPostId = (postId) => {
	return dispatch => {
	  	dispatch(requestComments());
	    getComments(postId)
	    .then(comments => {
	    	dispatch(receiveComments(comments))
	    });	
	}
}

export const getCommentById = (id) => {
  return dispatch => {
      dispatch(requestComments());
      getComment(id)
      .then(comment => {
        dispatch(receiveComments(comment))
      });
  }
}

export const sendComment = (data) => (dispatch) => {
  try {
    addComment(data)
    dispatch({
      type: ADD_COMMENT,
      comment: data
    });
  }
  catch(err) {
    console.error("Error removing comment", err)
  }
}

export const increaseCommentScore = (id) => (dispatch) => {
    increaseCommentScoreAPI(id)
      .then(data => getComments(data.parentId)
      .then(comments => {
        dispatch(receiveComments(comments))
      }
  ))
}


export const decreaseCommentScore = (id) => (dispatch) => {
    decreaseCommentScoreAPI(id)
    .then(data => getComments(data.parentId)
      .then(comments => {
        dispatch(receiveComments(comments))
      }
  ))
}

export const editComment = (data) => (dispatch) => {
    updateComment(data)
    dispatch({
      type: EDIT_COMMENT,
      comment: data
    });
}

export const deleteComment = (id) => (dispatch) => {
    removeComment(id)
    dispatch({
      type: REMOVE_COMMENT,
      id
    });
}

