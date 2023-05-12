import React, { useEffect, useState } from 'react'

import { Grid, Card, Button, Container, Text } from '@nextui-org/react'
import Image from "next/image"

import confetti from "canvas-confetti"

import { Pokemon } from '../../../interfaces'
import { localFavorites } from '../../../utils'

interface PokemonDetailsProps {
  pokemon: Pokemon
}
const PokemonDetails: React.FC<PokemonDetailsProps> = ({ pokemon }) => {

  const [isInFavorites, setisInFavorites] = useState(false)

  const onToggleFavorite = () => {
    localFavorites.toggleFavorites(pokemon.id)
    setisInFavorites(prev => !prev)

    confetti({
      zIndex: 9999,
      particleCount: 100,
      spread: 160,
      angle: -100,
      origin: {
        x: 1,
        y: 0
      }
    })
  }


  useEffect(() => {
    setisInFavorites(localFavorites.existsInFavorites(pokemon.id))
  }, [])


  return (
    <Grid.Container css={{ marginTop: "5px" }} gap={2}>
      <Grid xs={12} sm={4}>
        <Card isHoverable css={{ padding: "30px" }}>
          <Card.Body>
            <Card.Image
              src={pokemon.sprites.other?.dream_world.front_default || '/no-imgage.png'}
              alt={pokemon.name}
              width={'100%'}
              height={200}
            />
          </Card.Body>
        </Card>
      </Grid>
      <Grid xs={12} sm={8}>
        <Card>
          <Card.Header css={{ display: "flex", justifyContent: "space-between" }}>
            <Text h1 transform='capitalize'>
              {pokemon.name}
            </Text>
            <Button
              onPress={onToggleFavorite}
              color="gradient"
              ghost={!isInFavorites}
            >
              {!isInFavorites ? "Guardar en favoritos" : "En Favoritos"}
            </Button>
          </Card.Header>
          <Card.Body>
            <Text size={30}>Sprites: </Text>
            <Container direction='row' display='flex' gap={0}>
              <Image
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
                width={100}
                height={100}
              />
              <Image
                src={pokemon.sprites.back_default}
                alt={pokemon.name}
                width={100}
                height={100}
              />
              <Image
                src={pokemon.sprites.front_shiny}
                alt={pokemon.name}
                width={100}
                height={100}
              />
              <Image
                src={pokemon.sprites.back_shiny}
                alt={pokemon.name}
                width={100}
                height={100}
              />

            </Container>
          </Card.Body>
        </Card>
      </Grid>
    </Grid.Container>
  )
}

export default PokemonDetails