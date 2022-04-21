import Categories from "../Categories/Categories";
import SliderComponent from '../Slider/Slider';
const Home = () => {
  return (
    <div className="Home">
    <Categories/>
    <SliderComponent  Category="nonFiction" />
    <SliderComponent Category="fiction" />
    <SliderComponent  Category="childrens" />
    <SliderComponent  Category="selfImprovment" />
    <SliderComponent  Category="books" />
    </div>
  );
}
export default Home;
