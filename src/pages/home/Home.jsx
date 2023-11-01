import React, { useContext } from 'react'
import Layout from '../../components/layout/Layout'
import myContext from '../../context/data/myContext'
import HeroSection from '../../components/heroSection/heroSection';
import Filter from '../../components/filter/Filter';
import ProductCard from '../../components/productCard/ProductCard';
import Track from '../../components/track/Track';
import Testimonial from '../../components/testimonials/Testimonials';
import { useDispatch, useSelector } from 'react-redux';
import {addToCart,deleteFromCart} from '../../redux/cartSlice'
import { Link } from 'react-router-dom';

function Home() {

  const context = useContext(myContext);
  const dispatch = useDispatch();
  const cart = useSelector((state)=>state.cart);
  console.log('cart',cart)


  const addCartItem = ()=>{
    dispatch(addToCart('shirt'))
  }

  const deleteCartItem =()=>{
    dispatch(deleteFromCart('test delete'))
  }

  return (
    <Layout>
     
      <HeroSection/>
      <Filter/>
      <ProductCard/>
      <div className="flex justify-center -mt-10 mb-4">
        <Link to={'/allproducts'}>
          <button className=' bg-gray-300 px-5 py-2 rounded-xl'>See more</button>
        </Link>
      </div>
      <Track/>
      <Testimonial/>
    </Layout>
  )
}

export default Home