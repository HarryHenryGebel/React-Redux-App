export const FETCH_BOOK = "FETCH_BOOK";

export function fetchBook (dispatch, title) {
  dispatch({command: FETCH_BOOK, title: title});
}
