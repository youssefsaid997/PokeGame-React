import { Component } from "react";
import PokeCollection from "./PokeCollection";

const arrayOfPokemons =[
    {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
    {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
    {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
    {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
    {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
    {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
    {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
    {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
  ]


class PokeGame extends Component{


    render(){
        let handOne = []
        let handTwo = [...arrayOfPokemons]
        while(handOne.length<handTwo.length){
            let randIndex = Math.floor(Math.random() * handTwo.length);
            let pokemon = handTwo.splice(randIndex,1)[0];
            handOne.push(pokemon)
        }

        let handOneValue =handOne.reduce((exp , pokemon)=> exp +pokemon.base_experience,0)
        let handTwoValue =handTwo.reduce((exp , pokemon)=>exp +pokemon.base_experience,0)

        return(
            <>
            <h1>Hello in PokeGame</h1>
            <div>
              
                <PokeCollection pokemon={handOne} exp={handOneValue} isWinner={handOneValue>handTwoValue} />

            </div>
            <div>
                <PokeCollection pokemon={handTwo} exp={handTwoValue} isWinner={handTwoValue > handOneValue} />

            </div>
            </>
        )
    }
}

export default PokeGame