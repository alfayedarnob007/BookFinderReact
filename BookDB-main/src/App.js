import React, { useState } from "react";
import Searchbar from "./components/Searchbar";
import BookList from "./components/BookList";
import { getBooksbyTerm } from "./api/GBDB";
import Pagination from "./components/Pagination";
import Select from "react-select";


const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [sort,setSort]=useState("relevance")

  const handleChange = (event) => {
    console.log(event.target.value);
    setSearchTerm(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await getBooksbyTerm(searchTerm, setBooks, currentPage, setTotalPages,sort);
    
  };

  const nextPage = async (page_number) => {
    let startIndex = 20 * (page_number - 1);
    setCurrentPage(page_number);
    await getBooksbyTerm(searchTerm, setBooks, startIndex, setTotalPages,sort);
  };

  const options = [
    { value: 'relevance', label: 'relevance' },
    { value: 'newest', label: 'newest' }
  ]

  return (
    <div>
      <Searchbar handleChange={handleChange} handleSubmit={handleSubmit} />
      <div style={{width:"8%",marginLeft:"90%"}}>
        <Select options={options} onChange={async (option)=>{
          await getBooksbyTerm(searchTerm, setBooks, currentPage, setTotalPages,option.value);
        }}/>
      </div>
      <BookList books={books} />
      {totalPages > 1 ? (
        <Pagination
          nextPage={nextPage}
          currentPage={currentPage}
          totalPages={totalPages}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default App;
