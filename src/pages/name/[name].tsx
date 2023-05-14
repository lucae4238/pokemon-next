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
  return (
    <Layout title={pokemon.name}>
      <PokemonDetails pokemon={pokemon} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { name }: {name: string} = ctx.params as any

  if(name !== name.toLowerCase()){
    return {
      redirect: {
        destination: `/name/${name.toLowerCase()}`,
        permanent: true
      }
    }
  }

  const pokemon = await getPokemonInfo(name)
  
  if(!pokemon){
    return {
      redirect: {
        destination: "/",
        permanent: true
      }
    }
  }
  
  return {
    props: {
      pokemon,
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
    fallback: "blocking"
  }
}

export default PokemonByNamePage