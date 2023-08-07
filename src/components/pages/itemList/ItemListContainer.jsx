import { React, useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Container, Grid, Skeleton, Center } from '@mantine/core'
import ItemList from './ItemList'
import { db } from '../../../firebaseConfig'
import { getDocs, collection, query, where } from "firebase/firestore";
import { notifications } from '@mantine/notifications'
import { IconError404 } from '@tabler/icons-react'

export const ItemListContainer = () => {

  const [ items, setItems ] = useState([])
  const { categoryName } = useParams()
  const navigate = useNavigate()

  useEffect( () => {

    const refCollection = collection(db, "products");
    let querySearch = categoryName ? query(refCollection, where( "category", "==", categoryName)) : collection(db, "products")

    getDocs(querySearch).then((response) => {
      if (!response.empty) {
        let products = response.docs.map((doc) => {
          return {...doc.data(), id: doc.id}
        })
        setItems(products)
      } else {
        notifications.show({
          message: 'La categoría seleccionada no existe 🙁',
          icon: <IconError404 size="1rem" />,
          color: 'teal'
        })
        navigate("/category")
      }
    })

  }, [categoryName, navigate])

  return (
    <Container>
      <Grid>
        { items.length ?
          items.map( (item, idx) => {
            return <Grid.Col key={idx} xs={4}>
              <ItemList item={item} />
            </Grid.Col>
          }) :
            <>
            <Skeleton height={300} ml={3} mr={3} width="32%" radius="xl" />
            <Skeleton height={300} ml={3} mr={3} width="32%" radius="xl" />
            <Skeleton height={300} ml={3} mr={3} width="32%" radius="xl" />
            </>
          
        }
      </Grid>
    </Container>
  )
}
