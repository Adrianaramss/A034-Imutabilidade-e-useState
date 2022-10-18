import React, {useState} from 'react'
import styled, {createGlobalStyle} from 'styled-components'
import PokemonCard from './Components/PokemonCard/PokemonCard';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`
const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`
function App() {
  const [pokemon, setPokemon] = useState({
    name: "Pichu",
    type: "Electric",
    evolved: false,
    weight: 2,
    color: 'orange',
    image: 'https://archives.bulbagarden.net/media/upload/thumb/b/b9/172Pichu.png/250px-172Pichu.png',
    id: 0
  })

  // Para fazer seus próximos pokemons, crie novos estados!
  function evoluirPokemon1() {
  const pikachu = {
    ... pokemon,
    name: "Pikachu",
    weight: 6,
    color: "orange",
    image:'https://archives.bulbagarden.net/media/upload/thumb/0/0d/025Pikachu.png/250px-025Pikachu.png'

  }
  setPokemon(pikachu)
  }
  
  function voltarPokemon() {
    const pichu = {
      ... pokemon,
      name: "Pichu",
      weight: 2,
      color: 'orange',
      image: 'https://archives.bulbagarden.net/media/upload/thumb/b/b9/172Pichu.png/250px-172Pichu.png',
      
    }
    setPokemon(pichu)
    }

    const [pokemon2, setPokemon2] = useState({
      ...pokemon,
      name: "Togepi",
      type: " Fairy",
      weight: 1.5,
      color: 'red',
      image: 'https://archives.bulbagarden.net/media/upload/thumb/6/6b/175Togepi.png/250px-175Togepi.png'
     
    })

    function evoluirPokemon2() {
      const togepi = {
        ... pokemon,
        name: "Togetic",
        weight: 3.2,
        color: 'red',
        image: 'https://archives.bulbagarden.net/media/upload/thumb/1/11/176Togetic.png/250px-176Togetic.png'
    
      }
      setPokemon2(togepi)
      }
    

      function voltarPokemon2() {
        const togepi = {
          ... pokemon,
          name: "Togetic",
          weight: 3.2,
          color: 'red',
          image: 'https://archives.bulbagarden.net/media/upload/thumb/1/11/176Togetic.png/250px-176Togetic.png'
      
        }
        setPokemon2(togepi)
        }



  return ( <>
  <GlobalStyles/>
    <FlexContainer>
    <PokemonCard
          evoluir={evoluirPokemon1} color={pokemon.color} name={pokemon.name} weight={pokemon.weight}
          image={pokemon.image} type={pokemon.type}
          voltar={voltarPokemon}/>
          
     <PokemonCard
     
     evoluir={evoluirPokemon2} color={pokemon2.color} name={pokemon2.name} weight={pokemon2.weight}
          image={pokemon2.image} type={pokemon2.type}
          voltarPokemon={voltarPokemon2}/>
     
     
    

    </FlexContainer>
  </>
    
  );
}

export default App;
