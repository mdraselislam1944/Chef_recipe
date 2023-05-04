/* eslint-disable no-unused-vars*/ 
import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../../../../assets/1.jpg';
import img2 from '../../../../assets/2.jpg';
import img3 from '../../../../assets/3.jpg';

const Bannar = () => {
    return (
      <div className='row my-3'>
        <div className='col-12 col-sm-4  rounded  my-auto py-5'>
          <div className='pt-5'>
          <h3 className='pt-5'>Food lover Bangladesh</h3>
          </div>
          <div className='pb-5'>
            <p className='pb-5'>It is a largest website of chef recipe in Bangladesh.Here you can see all chef and their recipes items.Also hired them to special cooking in your any celebrating ceremony and other culture</p>
          </div>
        </div>
        <div className='col-12 col-sm-8'>
        <Carousel variant="dark">
      <Carousel.Item>
        <img className='w-100' style={{height:'34em' }}  src={img1} alt="" />
        <Carousel.Caption>
          <h5>Kacci Biriani</h5>
          <p>Kacci Biriani is one of the most favorite recipes in our country.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className='w-100' style={{height:'34rem' }} src={img2} alt="" />
        <Carousel.Caption>
          <h5>Poreta</h5>
          <p>Poreta is the delicious food in our country.It is eat in the morning and other time.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className='w-100' style={{height:'34rem' }} src={img3} alt="" />
        <Carousel.Caption>
          <h5>Khicuri recipe</h5>
          <p>
            Khicuri is one of the most favorite and delicious food in our country
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>
      </div>
    );
};

export default Bannar;