import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getMealById } from '../api';
import Preloader from '../components/Preloader';

export default function Recipe() {
  const [recipe, setRecipe] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  useEffect(() => {
    getMealById(id).then(data => setRecipe(data.meals[0]));
  }, [id]);

  const {
    strMeal,
    strCategory,
    strArea,
    strInstructions,
    strMealThumb,
    strYoutube
  } = recipe;

  return (
    <>
      <button onClick={goBack} className='btn light-green darken-3'>
        ↩ Go Back
      </button>
      {!recipe.idMeal ? (
        <Preloader />
      ) : (
        <div className='recipe'>
          <h2>{strMeal}</h2>
          <img src={strMealThumb} alt={strMeal} />
          <p>
            <b>Category: </b>{strCategory}
          </p>
          <p>
            <b>Area: </b> {strArea ? strArea : ''}
          </p>
          <p>
            <b>Recipe:</b> {strInstructions}
          </p>
          <table className="centered">
            <thead>
              <tr>
                <th className='center'>Ingredient</th>
                <th className='center'>Measure</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(recipe).map(key => {
                if (key.includes('Ingredient') && recipe[key]) {
                  return (
                    <tr key={key}>
                      <td>{recipe[key]}</td>
                      <td>
                        {recipe[`strMeasure${key.slice(13)}`]}
                      </td>
                    </tr>
                  )
                }
                return null;
              })}
            </tbody>
          </table>
          {strYoutube ? (
            <div className='row'>
              <iframe title={id} src={'https://www.youtube.com/embed/' + strYoutube.slice(-11)} allowFullScreen frameBorder="0">
              </iframe>
            </div>) : null}
        </div>
      )}
    </>
  );
}
