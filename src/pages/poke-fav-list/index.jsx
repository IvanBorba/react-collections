import { CardsContainer } from "../../globalStyles";
import FavCard from "../../components/fav-card";
import "./index.css";

const PokeFavList = ({ fav, setFav }) => {
  return (
    <>
      <div className="pokeFavHeader">
        <h3>Pokemons favoritos</h3>
      </div>
      <CardsContainer className="pokeFavList">
        {fav.map((user, index) => (
          <FavCard key={index} user={user} fav={fav} setFav={setFav} />
        ))}
      </CardsContainer>
    </>
  );
};

export default PokeFavList;
