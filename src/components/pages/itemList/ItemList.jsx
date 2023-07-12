import React from 'react'
import { ItemCard } from '../../common/itemCard/ItemCard'


const ItemList = ( { item } ) => {
  return (
    <div>
      <ItemCard product={item} />
    </div>
  )
}

export default ItemList