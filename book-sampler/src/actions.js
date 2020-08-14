import requester from "easier-requests";

export const FETCH_BOOK = "FETCH_BOOK";

const goodreadsKey = process.env.REACT_APP_GOODREADS_KEY;
//      goodreadsSecret = process.env.REACT_APP_GOODREADS_SECRET;

let lastRequestTime = 0;
export function fetchBook (title, author) {
  return function (dispatch) {
    async function _fetchBook() {
      debugger;
      try {
        const id = requester.createUniqueID(),
              params = {key: goodreadsKey, title: title};
        if (author) // author is optional
          params.author = author;

        await requester.get("https://www.goodreads.com/book/title.json",
                            id,
                            params);
        console.log(requester.response(id));
      }
      catch (error) {
        console.log(error);
        throw error;
      }
      finally {
        lastRequestTime = Date.now();
      }
    }
    dispatch({type: FETCH_BOOK, title: title});

    // per TOS, limit requests to 1 per second
    const nextRequestTime = lastRequestTime + 1000,
          timeUntilRequest = nextRequestTime - Date.now();
    setTimeout(_fetchBook, timeUntilRequest);
  };
}
