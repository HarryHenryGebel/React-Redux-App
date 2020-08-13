import {FETCH_BOOK} from "./actions";

const initialState = {
  goodreadsKey: process.env.REACT_APP_GOODREADS_KEY,
  goodreadsSecret: process.env.REACT_APP_GOODREADS_SECRET
};

export default function reducer (state = initialState, action) {
  switch(action.command) {
  case FETCH_BOOK:
    return state;
  default:
    // return state if it is called by redux, otherwise throw error
    if (action.type.includes("@@redux"))
      return {...state,
              isFetching: true,
              error: null};
    else
      throw Error(`Invalid action "{$action.type}"`);
  }
}
