import { Layout } from '@/components/layouts';
import { GetStaticPaths } from 'next'
import { GetStaticProps, NextPage } from 'next';
import React from 'react'
import { pokeApi } from '../../../api';
import { Pokemon } from '../../../interfaces';
import PokemonDetails from '@/components/pokemons/PokemonDetails';
import { getPokemonInfo } from '../../../utils';

interface Props {
  pokemon: Pokemon
}

export const PokemonPage: NextPage<Props> = ({ pokemon }) => {
  console.log('pokemon', pokemon)
  return (
    <Layout title={pokemon.name}>
      <PokemonDetails pokemon={pokemon} />
    </Layout>
  );
};



export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const pokemon151 = [...Array(151)].map((value, index) => `${index + 1}`)

  return {
    paths: pokemon151.map((id) => ({
      params: { id }
    })),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {

  const { id } = params as { id: string }
  
  return {
    props: {
      pokemon: await getPokemonInfo(id),
    }
  }
}


export default PokemonPage

