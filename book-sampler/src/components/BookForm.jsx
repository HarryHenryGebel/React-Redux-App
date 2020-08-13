import React, {useState} from "react";
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';

const initialValues = {author: "", title: ""};

export default function BookForm () {
  const [values, setValues] = useState(initialValues);

  function onChange(event) {
    const {id, value} = event.target;

    setValues({...values, [id]: value});
  }

  return (
    <>
      <Box m={1}>
        <TextField fullwidth
                   id="title"
                   label="Title"
                   onChange={onChange}
                   required
                   value={values.title}
                   variant="outlined"/>
      </Box>
      <br/>
      <Box m={1}>
        <TextField fullwidth
                   id="author"
                   label="Author"
                   onChange={onChange}
                   value={values.author}
                   variant="outlined"/>
      </Box>
      <br/>
      <Box m={1}>
        <Button disabled={values.title.trim() === ""}
                onClick={() => true}
                startIcon={<SearchIcon />}
                variant="contained">
          Search
        </Button>
      </Box>
    </>
  );
}
