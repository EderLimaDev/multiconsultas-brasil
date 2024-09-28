import React from 'react'
import { BuscaCep } from '../../components/BuscaCep'
import { NavMenuOptions } from '../../components/NavMenuOptions';

export const Home = () => {
  return (
    <div>
      <div className='m-10 text-lg font-bold'>
          <h3>O que vamos consultar hoje ?</h3>
          <NavMenuOptions />

          <BuscaCep />
      </div>
    </div>
  )
}
