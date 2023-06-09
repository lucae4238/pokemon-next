import React, { FC } from 'react'
import { Card, Grid } from "@nextui-org/react"
import { useRouter } from 'next/router'
import Link from 'next/link'

interface FavoritePokemonsCardProps {
  id: number
}

export const FavoritePokemonsCard: FC<FavoritePokemonsCardProps> = ({ id }) => {
  const router = useRouter()

  const onFavoriteClicked = () => {

    router.push(`/pokemon/${id}`)

  }
  return (
    <Grid xs={6} sm={3} md={2} xl={1} key={id} onClick={onFavoriteClicked}>
      <Card isHoverable isPressable css={{ padding: 10 }}>
        <Card.Image
        loading='lazy'
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
          width={"100%"}
          height={140}
        />

      </Card>
    </Grid>
  )
}
