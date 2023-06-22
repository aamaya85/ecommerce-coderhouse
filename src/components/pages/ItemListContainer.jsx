import React from 'react'
import ItemList from './ItemList'

const ItemListContainer = () => {

  const greeting = "Aquí va la lista de productos!" 

  return (
    <ItemList greeting={greeting}/>
  )
}

export default ItemListContainer