import { Card } from "../../globalStyles";
import "./index.css";

const PokeInfoCard = ({ user, pokeFav, setPokeFav }) => {
  const addPokeFav = (e) => {
    let verify = pokeFav.find((user) => user.name === e.target.value);

    if (verify === undefined) {
      setPokeFav([...pokeFav, user]);
    }
  };

  return (
    <Card>
      <img alt={user.name} src={user.img} className="userImg" />
      <h5>{user.name}</h5>
      <button onClick={addPokeFav} value={user.name}>
        Adicionar aos favoritos
      </button>
    </Card>
  );
};

export default PokeInfoCard;
