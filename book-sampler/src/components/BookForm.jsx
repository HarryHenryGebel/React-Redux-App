import React, {useState} from "react";
import {connect} from "react-redux";
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';

import {fetchBook} from "../actions";

const initialValues = {author: "", title: ""};

function BookForm (props) {
  const [values, setValues] = useState(initialValues);

  function onChange(event) {
    const {id, value} = event.target;

    setValues({...values, [id]: value});
  }

  return (
    <>
      <Box m={1}>
        <TextField fullWidth
                   id="title"
                   label="Title"
                   onChange={onChange}
                   required
                   value={values.title}
                   variant="outlined"/>
      </Box>
      <br/>
      <Box m={1}>
        <TextField fullWidth
                   id="author"
                   label="Author"
                   onChange={onChange}
                   value={values.author}
                   variant="outlined"/>
      </Box>
      <br/>
      <Box m={1}>
        <Button disabled={values.title.trim() === ""}
                onClick={() => {
                  props.fetchBook(values.title.trim(), values.author.trim());
                  setValues(initialValues);
                }}
                startIcon={<SearchIcon />}
                variant="contained">
          Search
        </Button>
      </Box>
    </>
  );
}
export default connect(null, {fetchBook})(BookForm);
