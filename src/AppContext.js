import axios from "axios";
import React, { useEffect, useState } from "react";
const AppContext = React.createContext({});
const AppProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [nonFiction, setNonFiction] = useState([]);
  const [childrens, setChildren] = useState([]);
  const [selfImprovment, setSelfImprovment] = useState([]);
  const [fiction, setFiction] = useState([]);
  const [books, setBooks] = useState([]);
  useEffect(() => {
    getNonFiction();
    getCategories();
    getFiction();
    getSelfImprovment();
    getChildrens();
    getBooks();
  }, []);

  const getBooks = async () => {
    const booksArray = [];
    axios.all([axios.get('./Apis/Data/books/book1.json'),
           axios.get('./Apis/Data/books/book2.json'),
           axios.get('./Apis/Data/books/book3.json'),
           axios.get('./Apis/Data/books/book4.json'),
           axios.get('./Apis/Data/books/book5.json'),
           axios.get('./Apis/Data/books/book6.json'),
           axios.get('./Apis/Data/books/book7.json'),
           axios.get('./Apis/Data/books/book8.json'),
           axios.get('./Apis/Data/books/book9.json'),
          ])
     .then(axios.spread((book1, book2, book3, book4, book5, book6, book7,book8, book9) => {  
      booksArray.push(book1.data)
      booksArray.push(book2.data)
      booksArray.push(book3.data)
      booksArray.push(book4.data)
      booksArray.push(book5.data)
      booksArray.push(book6.data)
      booksArray.push(book7.data)
      booksArray.push(book8.data)
      booksArray.push(book9.data) }))
     .catch(error => console.log(error.response));
     setBooks(booksArray)
  }

  const getCategories = async () => {
    const categoriesData = await fetch("./Apis/Data/categories.json");
    const { categories } = await categoriesData.json();
    setCategories(categories);
  };
  const getChildrens = async () => {
    const childrensData = await fetch("./Apis/Data/categories/children.json");
    const { books } = await childrensData.json();
    setChildren(books);
  };
  const getNonFiction = async () => {
    const nonFictionData = await fetch("./Apis/Data/categories/nonfiction.json");
    const { books } = await nonFictionData.json();
    setNonFiction(books);
  };
  const getSelfImprovment = async () => {
    const selfImprovmentData = await fetch("./Apis/Data/categories/self_improvement.json");
    const { books } = await selfImprovmentData.json();
    setSelfImprovment(books);
  };
  const getFiction = async () => {
    const fictionData = await fetch("./Apis/Data/categories/fiction.json");
    const { books } = await fictionData.json();
    setFiction(books);
  };

  return (
    <AppContext.Provider
      value={{
        categories,
        childrens,
        fiction,
        nonFiction,
        selfImprovment,
        books
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export { AppContext, AppProvider };
