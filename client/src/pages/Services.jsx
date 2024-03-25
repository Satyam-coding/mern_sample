import React, { useEffect, useState } from 'react'
import Card from "../components/Card";
import "../assets/Services.css"
import { Loader } from './Loader';
import { useProvider } from "../Provider/Service_API_Provider";
const Services = () => {

  const { state } = useProvider();
  const { loading, api_data } = state;

  if (loading) {
    return (
      <Loader />
    )
  }
  return (

    <>

      <div className='container'>
        {
          api_data.map((curr) => {
            const { id, title, price, description, category, images } = curr;

            return (
              <Card key={id} title={title} price={price} description={description} category={category.name} image={images[0]} />
            )
          })};
      </div>


    </>
  );
}

export default Services