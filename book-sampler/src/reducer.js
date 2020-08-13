const initialState = {
  goodreadsKey: process.env.REACT_APP_GOODREADS_KEY,
  goodreadsSecret: process.env.REACT_APP_GOODREADS_SECRET
};

export default function reducer (state = initialState, action) {
  return initialState;
}
