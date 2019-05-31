import { getComments, addComment } from '../utils/API.js';


export const REQUEST_COMMENTS = 'REQUEST_COMMENTS';
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const ADD_COMMENT = 'ADD_COMMENT';

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
	  try {
	  	dispatch(requestComments());
	    const comments = getComments(postId)
	    .then(comments => {
	    	dispatch(receiveComments(comments))
	    });	    
	  } catch(err) {
	    console.error("Error getting posts", err)
	  }
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
