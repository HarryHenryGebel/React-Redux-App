import {FETCH_BOOK} from "./actions";

const initialState = {
  isFetching: false,
  error: ""
};

export default function reducer (state = initialState, action) {
  switch(action.command) {
  case FETCH_BOOK:
    return {...state,
            isFetching: true,
            error: null};
  default:
    // return state if it is called by redux, otherwise throw error
    if (action.type.includes("@@redux"))
      return state;
    else
      throw Error(`Invalid action "{$action.type}"`);
  }
}
