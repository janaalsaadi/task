
import {Row, Col } from 'react-bootstrap';
import { useContext } from 'react';
import category1 from '../Assest/Images/category1.PNG'
import category2 from '../Assest/Images/category2.PNG'
import category3 from '../Assest/Images/category3.PNG'
import category4 from '../Assest/Images/category4.PNG'
import category5 from '../Assest/Images/category5.PNG'
import category6 from '../Assest/Images/category6.PNG'
import category7 from '../Assest/Images/category7.PNG'
import category8 from '../Assest/Images/category8.PNG'
import { AppContext } from '../../AppContext'
const Categories = () => {
  const { categories } = useContext(AppContext)
    const Images = [category1,category2, category3,category4,category5,category6,category7,category8]
  return (
    <div className='categories-wrapper container-lg'> 
        <h1>Browse <span>Our Most Popular Categories</span></h1>
        <Row>
        {categories.filter(item => item.id < 9).map((item, index) =>(
            <Col md={3} sm={6}>
            <figure className='d-flex'>
                <img alt={item.title} src={Images[index]} />
                <figcaption>
                <p key={item.id} className="title">{item.title}</p>
                <p className="desc">{item.description}</p>
                </figcaption>
            </figure>
            </Col>
        ))}
    </Row>
    </div>
  );
}

export default Categories;
