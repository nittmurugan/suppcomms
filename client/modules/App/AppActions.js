// Export Constants
export const TOGGLE_ADD_POST = 'TOGGLE_ADD_POST';
export const TOGGLE_SEARCH_PAGE = 'TOGGLE_SEARCH_PAGE';

// Export Actions
export function toggleAddPost() {
  return {
    type: TOGGLE_ADD_POST,
  };
}

export function toggleSearchPage() {
  return {
    type: TOGGLE_SEARCH_PAGE,
  };
}
