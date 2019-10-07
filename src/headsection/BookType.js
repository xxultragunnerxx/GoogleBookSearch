import React from 'react'

const BookType = props => {
  const handleBookChange = event => {
    props.filterHandler(event.target.value);
  };

  return (
    <React.Fragment>
      <label htmlFor='book-drop-down' style={{margin: "3px"}}>
        Book Type:
      </label>
      <select
        value={props.bookType}
        onChange={handleBookChange}
        id='book-drop-down'
        style={{margin: "3px"}}
      >
        <option value='free-ebooks'>free-ebooks</option>
        <option value='paid-ebooks'>paid-ebooks</option>
        <option value='ebooks'>ebooks</option>
      </select>
    </React.Fragment>
  );
};

export default BookType;
