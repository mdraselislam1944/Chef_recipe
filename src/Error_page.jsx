/* eslint-disable no-unused-vars*/ 
import React from 'react';
import { Link } from 'react-router-dom';

import page from './assets/NotFoundPage.png';
import { Image } from 'react-bootstrap';

const Error_page = () => {
    return (
        <div>
         <Image src={page} rounded />
        </div>
       
    );
};

export default Error_page;