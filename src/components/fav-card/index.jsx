import { Card } from "../../globalStyles";
import { useState } from "react";

const FavCard = ({ user, setFav, fav }) => {
  const [removed, setRemoved] = useState(false);

  const removeFav = (e) => {
    let index = fav
      .map((user) => {
        return user.name;
      })
      .indexOf(e.target.value);
    setFav(fav.splice(index, 1));
    setFav(fav);
    setRemoved(true);
  };

  return (
    <Card>
      <img
        alt={user.name}
        src={user.image ? user.image : user.img}
        style={{ width: "120px", height: "98px" }}
      />
      <h5>{user.name}</h5>
      <button onClick={removeFav} value={user.name}>
        Remover
      </button>
      {removed && <p style={{ color: "red" }}>Removido</p>}
    </Card>
  );
};

export default FavCard;
