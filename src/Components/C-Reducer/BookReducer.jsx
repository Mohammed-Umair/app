export const BookReducer = (
  state = { books: [], cart: [], selectedBooks: [] },
  action
) => {
  if (action.type === "Add-Book") {
    return { ...state, books: [...action.data, ...state.books] };
  }
  if (action.type === "Selected-Products") {
    return { ...state, selectedBooks: [action.data] };
  }
  if (action.type === "Add-Cart") {
    return { ...state, cart: [action.data, ...state.cart] };
  }
  if (action.type === "Remove-Product") {
    const filtered = state.cart.filter((item) => item !== action.data);
    return { ...state, cart: filtered };
  }
  return state;
};
