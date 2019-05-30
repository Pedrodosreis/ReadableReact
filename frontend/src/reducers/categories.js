export const REQUEST_CATEGORIES = 'REQUEST_CATEGORIES';
export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';


export default function categories(state = {}, action) {
  const { categories } = action;
  switch (action.type) {
    case RECEIVE_CATEGORIES:
      return categories
    default:
      return state
  }
}