import './Recipe.css';

import React from 'react'
import { useFetch } from '../../hooks/useFetch';
import {useParams } from 'react-router-dom';
import { useTheme } from '../../hooks/useTheme';

export default function Recipe() {
  const {id} = useParams();
  const url = 'http://localhost:3000/recipes/'+ id;
  const {data, isPending, error} = useFetch(url);

  const {mode} = useTheme();

  return (
    <div className={`recipe ${mode}`}>
      {error && <p className='error'>{error}</p>}
      {isPending && <h3 className='loading'>Loading...</h3>}
      {data && (
        <>
          <h2 className='page-title'>{data.title}</h2>
          <p>Takes {data.cookingTime} to cook.</p>
          <ul>
            {data.ingredients.map(ing => <li key={ing}> {ing}</li>)}
          </ul>
          <p className='method'>{data.method}</p>
        </>
      )}
    </div>
  )
}
