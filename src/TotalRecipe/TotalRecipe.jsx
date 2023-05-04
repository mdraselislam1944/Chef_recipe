/* eslint-disable no-unused-vars*/ 
import React from 'react';
import { Button, Card } from 'react-bootstrap';

const TotalRecipe = (prob) => {
    const {recipe_name,ingredients,cooking_method,rating,favorite}=prob.recipes;
    console.log(prob.recipes);
    return (
        <Card className='col-4 container my-3 py-5' style={{ width: '20rem',height:'44rem' }}>
       
      <Card.Header>{recipe_name}</Card.Header>
      <Card.Body>
        <Card.Title>{cooking_method}</Card.Title>
        <Card.Text>
         {rating}
        </Card.Text>
        {
            favorite &&   <Button variant="primary">favorite</Button>
        }
      </Card.Body>
  
        </Card>
    );
};

export default TotalRecipe;