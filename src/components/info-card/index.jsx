import { Card } from "../../globalStyles";
import "./index.jsx";

const InfoCard = ({ user, setFav, fav }) => {
  const addFav = (e) => {
    let verify = fav.find((user) => user.name === e.target.value);

    if (verify === undefined) {
      setFav([...fav, user]);
    }
  };

  return (
    <Card>
      <img
        alt={user.name}
        src={user.image ? user.image : user.img}
        style={{ width: "100px" }}
      />
      <h5>{user.name}</h5>
      <button onClick={addFav} value={user.name}>
        Adicionar aos favoritos
      </button>
    </Card>
  );
};

export default InfoCard;
