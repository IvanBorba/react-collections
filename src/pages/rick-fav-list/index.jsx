import { CardsContainer } from "../../globalStyles";
import FavCard from "../../components/fav-card";
import "./index.css";

const RickFavList = ({ fav, setFav }) => {
  return (
    <>
      <div className="rickFavHeader">
        <h3>Favoritos de Rick e Morty</h3>
      </div>
      <CardsContainer className="rickFavList">
        {fav.map((user, index) => (
          <FavCard key={index} user={user} fav={fav} setFav={setFav} />
        ))}
      </CardsContainer>
    </>
  );
};

export default RickFavList;
