import { React, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Container, Grid } from '@mantine/core'
import ItemList from './ItemList'
import { products } from './../../../productsMock'

const ItemListContainer = () => {

  const [ items, setItems ] = useState([])
  const { categoryName } = useParams()

  useEffect( () => {

    const getProducts = (category) => {
      return new Promise((resolve, reject) => {
        setTimeout( () => {
          resolve(category ? products.filter( p => p.category === category) : products)
        }, 200)
      })
    }
    
    getProducts(categoryName).then((response) => {
      setItems(response)
    })

  }, [categoryName])

  return (
    <Container>
      <Grid>
        { items.map( (item, idx) => {
          return <Grid.Col key={idx} xs={4}>
            <ItemList item={item} />
          </Grid.Col>
        })}
      </Grid>
    </Container>
  )
}

export default ItemListContainer