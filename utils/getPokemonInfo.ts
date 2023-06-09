import { pokeApi } from "../api"
import { Pokemon } from "../interfaces"

export const getPokemonInfo = async (nameOrId: string) => {

  try {
    const { data: { name, id: pokemonId, sprites } } = await pokeApi.get<Pokemon>(`/pokemon/${nameOrId}`)

    return {
      name, id: pokemonId, sprites
    }


  } catch (error) {
    return null

  }
}