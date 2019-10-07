import React from "react";
import ResultsDescription from "./ResultsDescription";
import ResultsImage from "./ResultsImage";

const ResultsList = props => {
  if (!props.resultsAPI.items) {
    return null;
  }

  return (
    <div>
      {props.resultsAPI.items.map((items, index) => {
        if (items.saleInfo.saleability === "NOT_FOR_SALE") {
          return null;
        }

        /* if (items.saleInfo.retailPrice.amount === 0) {
          return "Free Ebook";
        } else {
          return items.saleInfo.retailPrice;
        } */

        return (
          <React.Fragment key={index}>
            <ResultsImage image={items.volumeInfo.imageLinks.thumbnail} />
            <ResultsDescription
              title={items.volumeInfo.title}
              author={items.volumeInfo.authors}
              /* price={} */
              description={items.volumeInfo.description}
            >{() => {
              if (items.saleInfo.retailPrice.amount === 0) {
                return "Free Ebook";
              } else {
                return items.saleInfo.retailPrice;
              }}
            }</ResultsDescription>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default ResultsList;

/* price={items.saleInfo.retailPrice.amount} */
