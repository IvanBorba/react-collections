import { CardsContainer } from "../../globalStyles";
import PokeFavCard from "../poke-fav-card";
import "./index.css";

const PokeFavList = ({ pokeFav, setPokeFav }) => {
  return (
    <>
      <div className="pokeHeader">
        <h3>Pokemons favoritos</h3>
      </div>
      <CardsContainer className="pokeList">
        {pokeFav.map((user, index) => (
          <PokeFavCard
            key={index}
            user={user}
            pokeFav={pokeFav}
            setPokeFav={setPokeFav}
          />
        ))}
      </CardsContainer>
    </>
  );
};

export default PokeFavList;
