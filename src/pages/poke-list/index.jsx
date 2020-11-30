import { useState } from "react";
import { CardsContainer } from "../../globalStyles";
import InfoCard from "../../components/info-card";
import "./index.css";

const PokeList = ({ pokeCharList, fav, setFav }) => {
  const [input, setInput] = useState("");
  const [filtered, setFiltered] = useState(false);

  const handleInput = (e) => {
    setInput(e.target.value);
    setFiltered(true);
    if (input === "") {
      setFiltered(false);
    }
  };

  return (
    <>
      <div className="pokeHeader">
        <h2>Pokemons</h2>
        <input
          placeholder="Buscar pokemon"
          value={input}
          onChange={handleInput}
        />
      </div>
      <CardsContainer className="pokeList">
        {filtered
          ? pokeCharList
              .filter((user) => user.name?.toLowerCase().includes(input))
              .map((user, index) => {
                return (
                  <InfoCard
                    key={index}
                    user={user}
                    fav={fav}
                    setFav={setFav}
                  ></InfoCard>
                );
              })
          : pokeCharList.map((user, index) => {
              return (
                <InfoCard
                  key={index}
                  user={user}
                  fav={fav}
                  setFav={setFav}
                ></InfoCard>
              );
            })}
      </CardsContainer>
    </>
  );
};

export default PokeList;
