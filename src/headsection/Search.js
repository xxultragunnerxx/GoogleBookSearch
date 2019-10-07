import React, {Component} from "react";
import BookType from "./BookType";
import PrintType from "./PrintType";

class Search extends Component {
  render() {
    return (
      <>
        <div
          style={{backgroundColor: "gray", textAlign: "center", padding: "2px"}}
        >
          <label style={{margin: "3px"}}>Search:</label>
          <input
            onChange={this.props.userQuery}
            type='text'
            defaultValue={this.props.searchValue}
            style={{margin: "3px"}}
          ></input>
          <button
            onClick={this.props.clickHandler}
            type='submit'
            style={{margin: "3px"}}
          >
            Search
          </button>
          <section
            className='drop-downs'
            style={{
              backgroundColor: "#d3d3d3",
              textAlign: "center",
              padding: "2px",
              borderBottom: "1px solid black",
            }}
          >
            <PrintType
              printType={this.props.printType}
              printTypeValue={this.props.printTypeValue}
            />
            <BookType
              filterHandler={this.props.filterHandler}
              bookType={this.props.bookType}
            />
          </section>
        </div>
      </>
    );
  }
}

export default Search;
