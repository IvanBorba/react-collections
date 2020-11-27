import { useState } from "react";
import { CardsContainer } from "../../globalStyles";
import PokeInfoCard from "../poke-info-card";
import "./index.css";

const PokeList = ({ pokeCharList, pokeFav, setPokeFav }) => {
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
                  <PokeInfoCard
                    key={index}
                    user={user}
                    pokeFav={pokeFav}
                    setPokeFav={setPokeFav}
                  ></PokeInfoCard>
                );
              })
          : pokeCharList.map((user, index) => {
              return (
                <PokeInfoCard
                  key={index}
                  user={user}
                  pokeFav={pokeFav}
                  setPokeFav={setPokeFav}
                ></PokeInfoCard>
              );
            })}
      </CardsContainer>
    </>
  );
};

export default PokeList;
