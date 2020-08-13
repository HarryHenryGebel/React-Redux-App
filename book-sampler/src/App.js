import React from 'react';

export const goodreadsKey = process.env.REACT_APP_GOODREADS_KEY,
             goodreadsSecret = process.env.REACT_APP_GOODREADS_SECRET;

export default function App() {
  debugger;
  return (
    <>
      <p>{goodreadsKey} {goodreadsSecret}</p>
    </>
  );
}
