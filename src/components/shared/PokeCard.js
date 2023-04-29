import { Component } from "react";
import "./PokeCard.css";
// import imgSrc from '../../assets/poke1.jpg'

const decimel =(num)=>{
    if(num < 10 ){
       return num = `00${num}`
    }else if(num < 100){
       return num = `0${num}`
    }
    else {
        return num
    }

 }

class PokeCard extends Component {
  render() {
    const { id, name, type, experience } = this.props;

    let newID = decimel(id);
    console.log(newID);

    return (
      <>
        <div className="PokeCard">
          <div>
            <img
              className="PokeImg"
              src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${newID}.png`}
              alt="pokeimg"
            />
          </div>
          <div className="PokeData">
            <p>{name}</p>
            <p>{experience}</p>
            <p>{type}</p>
          </div>
        </div>
      </>
    );
  }
}

export default PokeCard;
