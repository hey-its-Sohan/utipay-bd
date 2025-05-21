import React from 'react';
import Banner from '../../components/Banner/Banner';
import Cards from '../../components/Cards/Cards';
import { useLoaderData } from 'react-router';
import AboutUs from '../../components/AboutUs/AboutUs';
import Partners from '../../components/Partners/Partners';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  const data = useLoaderData()
  return (
    <div className='bg-base-200'>
      <Banner></Banner>
      <Cards data={data}></Cards>
      <AboutUs></AboutUs>
      <Partners></Partners>
      <Footer></Footer>
    </div>
  );
};

export default Home;