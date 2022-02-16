import React from 'react';
import CategoryItem from './CategoryItem';


export default function CategoryList(props) {
  const {catalog = []} = props;

  return (
    <div className='list'>
      {catalog.map(item => <CategoryItem key={item.idCategory} {...item} />)}
    </div>
  )
}
