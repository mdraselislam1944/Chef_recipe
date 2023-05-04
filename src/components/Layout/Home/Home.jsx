/* eslint-disable no-unused-vars*/ 
import React, { useEffect, useState } from 'react';
import Bannar from './Bannar/Bannar';
import { useLoaderData } from 'react-router-dom';
import ChefCard from '../../ChefCard/ChefCard';
import Spinner from 'react-bootstrap/Spinner';

import image from '../../../assets/chef3.jpg';

import { Button, Card } from 'react-bootstrap';

const Home = () => {
    const chefRecipes=useLoaderData();
    const [favoriteRecipe,setFavoriteRecipe]=useState();
    useEffect(()=>{
        fetch('http://localhost:5000/favoriteRecipe')
        .then(res=>res.json())
        .then(data=>setFavoriteRecipe(data));
    },[])
    console.log(favoriteRecipe);
    return (
        <div className='container'>
           <Bannar></Bannar>
           <div className='row'>
           {
            chefRecipes.map(chefRecipe=><ChefCard
            key={chefRecipe._id} chefRecipe={chefRecipe}
            ></ChefCard>)
           }
           </div>
           <h1 className='text-center mt-5 mb-2 '>The best recipe in the Bangladesh</h1>
           <div className='row'>
           {
    favoriteRecipe?
    favoriteRecipe.map(favoriteRecipe=><div key={favoriteRecipe.recipeName} className='col-12 col-sm-4'>
      < Card className='col-12 col-sm-4 container my-3 py-5 mx-2' style={{ width: '100vw',height:'44rem' }}>
      <Card.Img style={{ width: '100vw',height:'20rem' }} variant="top" src={favoriteRecipe?.image}/>
      <Card.Body>
        <Card.Title>{favoriteRecipe?.recipeName}</Card.Title>
        <Card.Text>
            {favoriteRecipe?.description}
        </Card.Text>
      </Card.Body>
    </Card>
    </div>)
    : <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>

  }
      </div>

      <h1 className='text-center mt-5 mb-3 '>Our Provided service in the Bangladesh</h1>
      <div className='d-flex flex-column flex-md-row my-5'>
      <div className='my-auto mx-5'>
      <ul>
     <h3>
     Recipe services can be useful for people who are looking for new and interesting recipes to try, as well as for those who are trying to plan their meals and grocery shopping more efficiently. Many recipe services also offer mobile apps, making it easy for users to access recipes and meal planning tools on the go.
     </h3>
              <li>Convenience: Recipe services make it easy to search for and find recipes that fit your needs, whether you are looking for a specific ingredient or meal type. You can access a wide range of recipes from your computer or mobile device, making it easy to plan your meals and grocery shopping from anywhere.</li>
              <li>
              Variety: Recipe services offer a vast collection of recipes from different cuisines and cultures, so you can explore new flavors and ingredients that you may not have tried before. You can also filter recipes by dietary preferences or restrictions, ensuring that you find recipes that fit your lifestyle and preferences.
              </li>
              <li>User-generated content: Many recipe services allow users to rate and review recipes, providing valuable insights and feedback about the recipes taste, difficulty level, and overall appeal. User-generated content can help you choose the best recipes to try and avoid recipes that may not be as successful.</li>
              <li>User-generated content: Many recipe services allow users to rate and review recipes, providing valuable insights and feedback about the recipes taste, difficulty level, and overall appeal. User-generated content can help you choose the best recipes to try and avoid recipes that may not be as successful.</li>
            </ul>
      </div> 
    <div >
       <img className='rounded w-100'  src={image} alt="" /> 
    </div> 
      </div>

      </div>
    );
};

export default Home;