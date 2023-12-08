import React from 'react';
import{HomePage,ProductsList} from '../pages';
import { Route,Routes } from 'react-router-dom';
import {ProductDetails} from '../pages/ProductDetails';

export const MyRoutes = () => {
  return (
    <div>
        <Routes >
            <Route  path='/' element={<HomePage />}/>
            <Route  path='/products' element={<ProductsList />}/>
            
            <Route  path='/products/:id' element={<ProductDetails />}/>
        </Routes>
    </div>
  )
}
