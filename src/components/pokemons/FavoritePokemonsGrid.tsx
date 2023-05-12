import React, { FC } from 'react'
import { Grid } from "@nextui-org/react"
import { FavoritePokemonsCard } from './FavoritePokemonsCard'

interface FavoritePokemonsGridProps {
  pokemons: number[]
}
export const FavoritePokemonsGrid: FC<FavoritePokemonsGridProps> = ({ pokemons }) => {
  return (
    <Grid.Container gap={2} direction="row" justify="flex-start">
      {
        pokemons.map((id) => (
        <FavoritePokemonsCard id={id} key={id} />
        ))
      }
    </Grid.Container>
  )
}
