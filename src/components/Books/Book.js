import { useContext } from "react";
import { Row } from "react-bootstrap";
import { AppContext } from "../../AppContext";
const Book =()=>{
    const {books} = useContext(AppContext)
    const category =window.location.pathname.split('/')[2]
    const id = window.location.pathname.split('/')[3]
    const bookInfo= books.filter(item => item.title === category && item.id == id)
    return(
        <div className="container-lg book-wrapper">
        {bookInfo.map(item =>(
            <figure className="d-flex">
            <img alt={item.title} src={item.image}/>
            <figcaption>
            <h1 className='figure-title'>{item.title}</h1>
            {item.description &&<p className='description'>{item.description}</p>}
            <p className='author'>BY {item.author}</p>
            <p className='review'>REVIWED BY {item.reviewedBy}</p>
            {item.publishedOn&& <p className='publish'>{item.publishedOn}</p>}
            </figcaption>
            
            </figure>
        ))}
        </div>
    )
}
export default Book