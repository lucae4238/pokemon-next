import React from 'react'
import { Container, Text, Image } from "@nextui-org/react"

const NoFavorites = () => {
  return (
    <Container css={{
      display: "flex",
      flexDirection: "column",
      height: "calc(100vh - 100px)",
      alignItems: "center",
      justifyContent: "center",
      alignSelf: "center"
    }}>
      <Text h1>No hay favoritos</Text>
      <Image               loading="lazy" alt="icono de la app" width={250} height={250} css={{ opacity: 0.5 }} src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" />
    </Container>
  )
}

export default NoFavorites