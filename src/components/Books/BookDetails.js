import { useContext } from "react";
import { AppContext } from "../../AppContext";
import SliderComponent from "../Slider/Slider";
const BookDetails = () => {
  const {books} = useContext(AppContext)
  const category =window.location.pathname.split('/')[2]
  const categoryArray= books.filter(item => item.title === category)
  return (
      
  <div><SliderComponent bookData={categoryArray} Category={category} /></div>
  );
}
export default BookDetails;
