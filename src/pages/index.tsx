
import { Layout } from '@/components/layouts'
import { Button, Grid, } from '@nextui-org/react'
import { GetStaticProps } from 'next'
import { NextPage } from 'next/types'
import { pokeApi } from '../../api'
import { PokemonListResponse, SmallPokemon } from '../../interfaces'
import { PokemonCard } from '@/components/pokemons'

interface Props {
  pokemons: SmallPokemon[]
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
  return (
    <Layout title='Listado de Pokemons'>

      <div>Home</div>
      <Button color={"gradient"}>holis</Button>
      <Grid.Container gap={2} justify='flex-start'>
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </Grid.Container>
    </Layout>
  )
}


export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data: { results } } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151')

  const pokemons: SmallPokemon[] = results.map((item, index) => ({
    ...item,
    id: index + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index + 1}.svg`
  }))


  return {
    props: {
      pokemons
    }
  }
}

export default HomePage