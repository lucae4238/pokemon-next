import { Layout } from '@/components/layouts';
import { GetStaticPaths } from 'next'
import { GetStaticProps, NextPage } from 'next';
import React from 'react'
import { Pokemon } from '../../../interfaces';
import PokemonDetails from '@/components/pokemons/PokemonDetails';
import { getPokemonInfo } from '../../../utils';

interface Props {
  pokemon: Pokemon
}

export const PokemonPage: NextPage<Props> = ({ pokemon }) => {
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
    fallback: "blocking"
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {

  const { id } = params as { id: string }

  const pokemon = await getPokemonInfo(id)

  if(!pokemon){
    return {
      redirect: {
        destination: "/",
        permanent: false
      }
    }
  }
  
  return {
    props: {
      pokemon,
    },
    revalidate: 86400
  }
}


export default PokemonPage

