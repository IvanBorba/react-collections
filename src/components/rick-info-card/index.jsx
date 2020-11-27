import { Card } from "../../globalStyles";
import "./index.css";

const RickInfoCard = ({ user, setRickFav, rickFav }) => {
  const addRickFav = (e) => {
    let verify = rickFav.find((user) => user.name === e.target.value);

    if (verify === undefined) {
      setRickFav([...rickFav, user]);
    }
  };

  return (
    <Card>
      <img alt={user.name} src={user.image} className="userImg" />
      <h5>{user.name}</h5>
      <button onClick={addRickFav} value={user.name}>
        Adicionar aos favoritos
      </button>
    </Card>
  );
};

export default RickInfoCard;
