import React, {useState, useEffect} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getFilteredCategory } from '../api';
import MealsList from '../components/MealsList';
import Preloader from '../components/Preloader';


export default function Category() {
  const {name} = useParams();
  const [meals, setMeals] = useState([]);

  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  useEffect(() => {
    getFilteredCategory(name).then(data => setMeals(data.meals))
  }, [name]);

  return (
    <>
      <button onClick={goBack} className="btn light-green darken-3" style={{marginBottom: "20px"}}>↩ Go Back</button>
      {!meals.length ? <Preloader / > : <MealsList meals={meals}/>}
    </>
  )
}
