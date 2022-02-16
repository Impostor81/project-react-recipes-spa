import React from 'react';
import { useNavigate } from 'react-router-dom';


export default function About() {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <>
      <button onClick={goBack} className="btn light-green darken-3" style={{marginBottom: "20px"}}>↩ Go Back</button>
      <h3 className='center'>About us</h3>
      <p>
        React Recipes SPA is here to help you cook delicious meals with less stress and more joy. We offer recipes and cooking advice for home cooks, by home cooks. Helping create “kitchen wins” is what we`re all about.
      </p>
      <p>
        React Recipes SPA was founded in 2022 by O.M. as a home cooking online catalog to record most popular recipes. Today, React Recipes SPA has grown into a trusted resource for home cooks with hundreds tested recipes, guides, and meal plans, drawing over 15 million readers each month from around the world. We`re supported by a diverse group of recipe developers, food writers, recipe and product testers, photographers, and other creative professionals.
      </p>
    </>
  )
}