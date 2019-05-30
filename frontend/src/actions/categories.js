import { getCategories } from '../utils/API.js';

export const REQUEST_CATEGORIES = 'REQUEST_CATEGORIES';
export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';

export const requestCategories = () => {
  return {
    type: REQUEST_CATEGORIES,
  }
}

export const receiveCategories = (categories) => {
  return {
    type: RECEIVE_CATEGORIES,
    categories
  }
}

export const getAllCategories = () => {
  return dispatch => {
    dispatch(requestCategories());
    return getCategories()
      .then(categories => dispatch(receiveCategories(categories)))
  }
}