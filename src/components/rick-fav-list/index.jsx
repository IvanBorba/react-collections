import { CardsContainer } from "../../globalStyles";
import RickFavCard from "../rick-fav-card";
import "./index.css";

const RickFavList = ({ rickFav, setRickFav }) => {
  return (
    <>
      <div className="rickFavHeader">
        <h3>Favoritos de Rick e Morty</h3>
      </div>
      <CardsContainer className="rickFavList">
        {rickFav.map((user, index) => (
          <RickFavCard
            key={index}
            user={user}
            rickFav={rickFav}
            setRickFav={setRickFav}
          />
        ))}
      </CardsContainer>
    </>
  );
};

export default RickFavList;
