import axios from "axios";
import {} from "module";

const GoogleBooks = axios.create({
  baseURL: "https://www.googleapis.com/books/v1/",
});

const getBooksbyTerm = (SearchTerm, setBooks, page_number, setTotalPages, sort="relevance") => {
  GoogleBooks.get("/volumes/", {
    params: {
      key: "AIzaSyCJbkAaQqW60bhkPwh5p63v-N_KYk66vSc",
      q: SearchTerm,
      startIndex: page_number,
      maxResults: 20,
      orderBy:sort,
    },
  }).then((response) => {
    console.log(response);
    if (response.data.totalItems > 0) {
      setTotalPages(Math.ceil(response.data.totalItems / 20));
    }
    setBooks(response.data.items);
  });
};

const getBookDetails = (bookID, setCurrentBook, setCurrentBookImage) => {
  GoogleBooks.get("/volumes/" + bookID, {}).then((response) => {
    setCurrentBook(response.data.volumeInfo);
    setCurrentBookImage(response.data.volumeInfo.imageLinks.thumbnail);
  });
};

export { getBooksbyTerm, getBookDetails };

