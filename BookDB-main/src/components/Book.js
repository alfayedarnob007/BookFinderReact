import React from "react";
import { Link } from "react-router-dom";

const Book = (props) => {
  console.log("Those are Book props: ",props)
  const BookTitle = props.data.volumeInfo.title;
  const BookAuthor = props.data.volumeInfo.authors;
  const ImageSource = props.data.volumeInfo.imageLinks;
  return (
    <div>
      <div className="col s12 m4">
        <div className="card">
          <div className="card-image">
            {ImageSource === undefined ? (
              <img
                src="https://picsum.photos/200/300"
                alt=""
                style={{ width: "100", height: "200" }}
              />
            ) : (
              <img
                src={ImageSource.thumbnail}
                style={{ width: "100", height: "200" }}
                alt=""
              />
            )}
          </div>
          <div style={{ backgroundColor: "white" }}>
            <span className="card-title" style={{ color: "black" }}>
              {BookTitle}
            </span>
          </div>
          <div style={{ backgroundColor: "yellow" }}>
            <span
              className="card-title"
              style={{ fontSize: 20, color: "black" }}
            >
              {BookAuthor}
            </span>
          </div>
          <div className="card-action">
            <Link
              to={{ pathname: "/book/" + props.data.id, bookId: props.data.id }}
              style={{ color: "white" }}
            >
              See More!!!
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
