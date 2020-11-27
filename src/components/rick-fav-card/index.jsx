import { Card } from "../../globalStyles";
import { useState } from "react";

const RickFavCard = ({ user, setRickFav, rickFav }) => {
  const [removed, setRemoved] = useState(false);

  const removeRickFav = (e) => {
    let index = rickFav
      .map((user) => {
        return user.name;
      })
      .indexOf(e.target.value);
    setRickFav(rickFav.splice(index, 1));
    setRickFav(rickFav);
    setRemoved(true);
  };

  return (
    <Card>
      <img alt={user.name} src={user.image} className="userImg" />
      <h5>{user.name}</h5>
      <button onClick={removeRickFav} value={user.name}>
        Remover
      </button>
      {removed && <p style={{ color: "red" }}>Removido</p>}
    </Card>
  );
};

export default RickFavCard;
