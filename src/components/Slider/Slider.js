import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AppContext } from '../../AppContext';
import { useContext } from "react";
import { Link } from 'react-router-dom';
const SliderComponent =({bookData,Category})=>{
  const {  
    childrens,
    fiction,
    nonFiction,
    selfImprovment, 
    books
  } = useContext(AppContext)
  const data = bookData?bookData: Category === 'fiction'?fiction
  :Category==='childrens'?childrens:
  Category==='selfImprovment'?selfImprovment:Category ==='books'?books:nonFiction
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow:bookData?bookData.length: Category === 'books'?5:6,
        slidesToScroll: 1,
        arrows:true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow:bookData?bookData.length: 3,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow:Category === 'books'?1:2,
              }
            },
          ]
        };
    return(
        
        <div className={`slider-wrapper ${Category}`}>
        <div className="container-lg">
        <h1 className='title'>{Category}</h1>
        <Slider {...settings}>
        {data.map(item =>(
          <Link to={`/bookDetails/${item.title}/${item.id}`}>
             <figure key={item.id} className="p-3">
                 <img alt={item.title} src={item.image} />
                 <figcaption>
                     <p className='figure-title'>{item.title}</p>
                     {item.description &&<p className='description'>{item.description}</p>}
                     <p className='author'>BY {item.author}</p>
                     <p className='review'>REVIWED BY {item.reviewedBy}</p>
                     {item.publishedOn&& <p className='publish'>{item.publishedOn}</p>}
                 </figcaption>
             </figure>
             </Link>
         ))}
        </Slider>
        </div>
      </div>
       
    )
}
export default SliderComponent;