// Import Actions
import { TOGGLE_ADD_POST, TOGGLE_SEARCH_PAGE } from './AppActions';

// Initial State
const initialState = {
  showAddPost: false,
  showSearchPage: false,
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_ADD_POST:
      return {
        showAddPost: !state.showAddPost,
        showSearchPage: state.showSearchPage,
      };

    case TOGGLE_SEARCH_PAGE:
      return {
        showSearchPage: !state.showSearchPage,
        showAddPost: state.showAddPost,
      };

    default:
      return state;
  }
};

/* Selectors */

// Get showAddPost
export const getShowAddPost = state => state.app.showAddPost;
export const getShowSearchPage = state => state.app.showSearchPage;

// Export Reducer
export default AppReducer;
