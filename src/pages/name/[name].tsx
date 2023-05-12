import React, { FC } from 'react'

import { GetStaticPaths, GetStaticProps } from 'next'

import { Layout } from '@/components/layouts'
import PokemonDetails from '@/components/pokemons/PokemonDetails'

import { Pokemon, PokemonListResponse } from '../../../interfaces'
import { pokeApi } from '../../../api'
import { getPokemonInfo } from '../../../utils'

interface PokemonByNamePageProps {
  pokemon: Pokemon
}

const PokemonByNamePage: FC<PokemonByNamePageProps> = ({ pokemon }) => {
  console.log('pokemon', pokemon)
  return (
    <Layout title={pokemon.name}>
      <PokemonDetails pokemon={pokemon} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { name } = ctx.params as any

  
  return {
    props: {
      pokemon: await getPokemonInfo(name),
    }
  }
}

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  // const { data } = await  // your fetch function here 
  const { data } = await pokeApi.get<PokemonListResponse>(`/pokemon?limit=151`)
  const pokemonPaths = data.results.map(item => ({
    params: {
      name: item.name
    }
  }))

  return {
    paths: pokemonPaths,
    fallback: false
  }
}

export default PokemonByNamePage