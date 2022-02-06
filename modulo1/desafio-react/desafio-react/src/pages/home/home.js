import axios from "axios";
import React, {useState, useEffect} from "react";
import { useHistory} from 'react-router-dom';
import styled from "styled-components";
import PokeCard from "../../components/pokemon-card/pokemon-card";


const HomePageContainer = styled.div`
    height: 100vh;
    width: 100vw;
   
`;

const HomePage = () => {

    const [pokemons, setPokemons] = useState([
        { name: 'charmander', url: ''}, 
        { name: 'bulbasaur', url: ''}, 
        { name: 'pikachu', url: ''}
    ]);

    console.log(pokemons, `POKEMONS AQUII`)

    const history = useHistory();


    useEffect(() => {
        getPokemons()

    }, [])

    const getPokemons = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon')
        .then((res) => {
            setPokemons(res.data.results)
        }).catch((err) => {
            console.log(err)
        })
    }
    const onClickPokemon = (name) => {
        history.push(`/details/${name}`)
    }

    return (
        <HomePageContainer>
            {pokemons.map((pokemonElement, index) => {
                return (
                    <PokeCard onClick={() => onClickPokemon(pokemonElement.name)}
                    key={index}
                    pokemon={pokemonElement}
                    />
                )
            })}

        </HomePageContainer>
    )
}
export default HomePage