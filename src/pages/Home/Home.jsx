import React from 'react';
import Banner from '../../components/Banner/Banner';
import Cards from '../../components/Cards/Cards';
import { useLoaderData } from 'react-router';

const Home = () => {
  const data = useLoaderData()
  return (
    <div className='bg-base-200'>
      <Banner></Banner>
      <Cards data={data}></Cards>
    </div>
  );
};

export default Home;