import React from 'react'
import { Button } from './ui/button'

export const SearchButton = () => {
  return (
    <>
       <label className="relative flex">
          <Button>Pesquisar</Button>
          <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-r-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Digite o valor sem utilizar pontos ou traços..." type="text" name="search"/>
        </label>
        
    </>
  )
}
