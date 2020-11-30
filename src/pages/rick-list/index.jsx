import { CardsContainer } from "../../globalStyles";
import InfoCard from "../../components/info-card";
import { useState } from "react";
import "./index.css";

const RickList = ({ rickCharList, setFav, fav }) => {
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
      <div className="rickHeader">
        <h2>Personagens de Rick e Morty</h2>
        <input
          placeholder="Buscar personagem"
          value={input}
          onChange={handleInput}
        />
      </div>
      <CardsContainer className="rickList">
        {rickCharList.map((page) =>
          filtered
            ? page
                .filter((actual) => actual.name?.toLowerCase().includes(input))
                .map((user, index) => (
                  <InfoCard key={index} user={user} setFav={setFav} fav={fav} />
                ))
            : page.map((user, index) => (
                <InfoCard key={index} user={user} setFav={setFav} fav={fav} />
              ))
        )}
      </CardsContainer>
    </>
  );
};

export default RickList;
