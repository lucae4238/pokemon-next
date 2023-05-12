import { Layout } from "@/components/layouts"
import NoFavorites from "@/components/ui/NoFavorites"
import { useEffect, useState } from "react"
import { localFavorites } from "../../../utils"
import { FavoritePokemonsGrid } from "@/components/pokemons"

const FavoritesPage = () => {
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([])


  useEffect(() => {
    setFavoritePokemons(localFavorites.pokemons())
  }, [])


  return (
    <Layout title="Favorites">
      {!favoritePokemons.length ?
        <NoFavorites /> : <FavoritePokemonsGrid pokemons={favoritePokemons} />
      }
    </Layout>
  )
}

export default FavoritesPage