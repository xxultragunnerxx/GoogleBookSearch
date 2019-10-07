import React from "react";

const ResultsDescription = props => {
  return (
    <React.Fragment>
      <section>
        <h2>{props.title}</h2>
        <p>Author: {props.author}</p>
        <p>Price: {props.children}</p>
        <p>Description: {props.description}</p>
      </section>
    </React.Fragment>
  );
};

export default ResultsDescription;
