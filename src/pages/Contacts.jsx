import React from 'react';
import { useNavigate } from 'react-router-dom';


export default function Contacts() {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <>
      <button onClick={goBack} className="btn light-green darken-3" style={{marginBottom: "20px"}}>↩ Go Back</button>
      <h3 className='center'>Contacts</h3>
      <p>
        React Recipes SPA is headquartered in Kherson, UA. We have no phone number, no landline phones in our company and are paper-free. While this might frustrate some it helps us keep focused on what matters the most: collecting recipes you dream about.
      </p>
      <p>
        We are great at reading anything you write about us. Post to Twitter, Facebook, write a blog post or an article, and we`re likely to see and learn from what you share. If you have a question you don`t see answered here, have an idea for collaboration, or want to share something else, please feel free to email us and we will get back to you as soon as we can.
      </p>
    </>
  )
}