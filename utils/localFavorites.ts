
const FAVORITES = 'favorites'

export const toggleFavorites = (id: number) => {

  let favorites: number[] = JSON.parse(localStorage.getItem(FAVORITES) || '[]')

  if (favorites.includes(id)) {
    favorites = favorites.filter(pokeId => pokeId !== id)
  } else {
    favorites.push(id)
  }

  localStorage.setItem(FAVORITES, JSON.stringify(favorites))

}

export const existsInFavorites = (id: number): boolean => {
  if (typeof window === 'undefined') return false;


  const favorites: number[] = JSON.parse(localStorage.getItem(FAVORITES) || '[]')
  return favorites.includes(id)

}

const pokemons = (): number[] => {
  return JSON.parse(localStorage.getItem(FAVORITES) || "[]")
}

export default {
  toggleFavorites,
  pokemons,
  existsInFavorites
}