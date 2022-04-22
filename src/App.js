import "./components/Assest/Style/global.scss";
import Header  from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import BookDetails from "./components/Books/BookDetails";
import Book from "./components/Books/Book";
import { useContext } from "react";
import { AppContext } from "./AppContext";
import PageNotFound from "./components/PageNotFound/PageNotFound";
const App = () => {
  const{books}=useContext(AppContext)

  return (
 
      <div className="App">
      <Header/>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bookDetails/Nam" element={<BookDetails />} />
        <Route path="/bookDetails/Maecenas" element={<BookDetails />} />
        <Route path="/bookDetails/Suspendisse" element={<BookDetails />} />
        {books.map(item=>(
          <Route path={`/bookDetails/${item.title}/${item.id}`} element={<Book />} />
        ))}
        <Route path='*' element={<PageNotFound/>} />
      </Routes>
     <Footer/>
    </div>
  
  );
}
export default App;
