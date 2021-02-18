import React, { useEffect, useState } from "react";
import { getBookDetails } from "./../api/GBDB";
import { Link } from "react-router-dom";

const BookDetails = (props) => {
  const [currentBook, setCurrentBook] = useState({});
  const [currentBookImage, setCurrentBookImage] = useState("");
  console.log(currentBook);
  useEffect(() => {
    getBookDetails(props.location.bookId, setCurrentBook, setCurrentBookImage);
  }, []);

  return (
    <div>
      <div style={{marginLeft:"30%"}}>
          {currentBookImage == undefined || null ? (
          <img
              src="https://picsum.photos/300/600"
              alt=""
              style={{ width: 300, height: 300 }}
            />
          ) : (
          <img
              src={currentBookImage}
              alt=""
              style={{ width: 300, height: 300 }}
            />
              )}
      </div>
      <div style={{marginLeft:"15%",marginRight:"15%"}}>
        <div>
          <p><b>Title: </b>{currentBook.title}</p>
        </div>
        <div>
          <p><b>Category: </b>{currentBook.categories}</p>
        </div>
        <div>
          <p><b>Description: </b>{currentBook.description}</p>
        </div>
        
        <div>
          <p><b>Authors of the Book :</b> {currentBook.authors}</p>
        </div>
        
        <div>
          <p><b>Published Date : </b> {currentBook.publishedDate}</p>
        </div>
        <div>
          <Link to="/">Go to Home Page!</Link>
        </div>
      </div>
    </div>  

  );
};

export default BookDetails;
