// Load Pokemon
export function loadPokemon(pokemon) {
  return {
    type: 'LOAD_POKEMON',
    pokemon
  }
}

// Filter Pokemon
export function filterPokemon(filter, filteredPokemon) {
  return {
    type: 'FILTER_POKEMON',
    filter,
    filteredPokemon
  }
}

// Update Filter
export function updateFilter(filter) {
  return {
    type: 'UPDATE_FILTER',
    filter,
  }
}
