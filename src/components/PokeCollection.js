import { Component } from "react";
import PokeCard from "./shared/PokeCard";

import './PokeCollection.css'



 
class PokeCollection extends Component {
  render() {
    return (
      <>

            <h2 className={this.props.isWinner ? "Poke-Winner ":"Poke-Lose"}>{this.props.isWinner ? 'You Win' : 'You Lose'}</h2>
            <h2>{this.props.exp}</h2>
        <div className="PokeCollection">
            {this.props.pokemon.map((pokemon)=>{
                 return <PokeCard key={pokemon.id} id={pokemon.id} name={pokemon.name} experience={pokemon.base_experience} type={pokemon.type} />                 
               
            })}
        </div>
      </>
    );
  }
}

export default PokeCollection;
