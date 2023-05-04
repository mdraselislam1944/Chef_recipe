/* eslint-disable no-unused-vars*/ 
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import {
    FaCheck,
    FaHandPointRight,
  } from "react-icons/fa";
import { Link } from 'react-router-dom';

const ChefCard = (prob) => {
    const {ChefPicture,ChefName,YearsOfExperience,NumbersOfRecipes,Likes,ViewRecipesButton,_id}=prob.chefRecipe;
    // for(let i of prob.chefRecipe.Recipes){
    //   console.log(typeof(i));
    // }
    return (
      <div className='col-12 col-sm-4 my-2'>
        <Card style={{ width: '26rem'}}>
        <Card.Img style={{ width: '26rem',height:'20rem' }} variant="top" src={ChefPicture}/>
        <Card.Body>
          <Card.Title>{ChefName}</Card.Title>
          <Card.Text>
            <p>{YearsOfExperience}</p>
            <div className="d-flex  justify-content-between align-items-center">
                <p>Total recipes: {NumbersOfRecipes}</p>
                <p><FaHandPointRight></FaHandPointRight> {Likes}</p>
            </div>
          </Card.Text>
          <Link to={`/chefRecipe/${_id}`}><Button variant="primary">{ViewRecipesButton}</Button></Link>
        </Card.Body>
      </Card>
      </div>
    );
};

export default ChefCard;