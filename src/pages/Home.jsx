import React, {useState, useEffect} from 'react';
import { getAllCategories } from '../api';
import CategoryList from '../components/CategoryList';
import Preloader from '../components/Preloader';
import Search from '../components/Search';


export default function Home() {
  const [catalog, setCatalog] = useState([]);
  const [filteredCatalog, setFilteredCatalog] = useState([]);

  const handleSearch = (str) => {
    setFilteredCatalog(
      catalog.filter(item => item.strCategory.toLowerCase().includes(str.toLowerCase()))
    )
  }

  useEffect(() => {
    getAllCategories().then(data => {
      setCatalog(data.categories);
      setFilteredCatalog(data.categories);
    });
  }, []);

  return (
    <>
      <Search cb={handleSearch}/>
      <h1 className='home-title'>Categories</h1>
      {!catalog.length ? <Preloader /> : (
        <CategoryList catalog={filteredCatalog} />
      )}
    </>
  )
}
