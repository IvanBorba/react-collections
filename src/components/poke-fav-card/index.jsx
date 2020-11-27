import { Card } from "../../globalStyles";
import { useState } from "react";
import "./index.css";

const RickFavCard = ({ user, setPokeFav, pokeFav }) => {
  const [removed, setRemoved] = useState(false);

  const removePokeFav = (e) => {
    let index = pokeFav
      .map((user) => {
        return user.name;
      })
      .indexOf(e.target.value);
    setPokeFav(pokeFav.splice(index, 1));
    setPokeFav(pokeFav);
    setRemoved(true);
  };

  return (
    <Card>
      <img alt={user.name} src={user.img} className="userImg" />
      <h5>{user.name}</h5>
      <button onClick={removePokeFav} value={user.name}>
        Remover
      </button>
      {removed && <p style={{ color: "red" }}>Removido</p>}
    </Card>
  );
};

export default RickFavCard;
