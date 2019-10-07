import React from "react";

const PrintType = props => {
  const handlePrintType = event => {
    props.printType(event.target.value);
  };

  return (
    <React.Fragment>
      <label htmlFor='print-drop-down' style={{margin: "3px"}}>
        Print Type:
      </label>
      <select
        onChange={handlePrintType}
        value={props.printTypeValue}
        id='print-drop-down'
        style={{margin: "3px"}}
      >
        <option value='all'> all</option>
        <option value='books'> books</option>
        <option value='magazines'> magazines</option>
      </select>
    </React.Fragment>
  );
};

export default PrintType;
