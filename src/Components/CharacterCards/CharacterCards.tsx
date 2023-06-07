import { characterCardInterface } from "../../interfaces";
import "./CharacterCards.css";

export const CharacterCards = ({
  name,
  nickName,
  imgUrl,
  desc,
}: characterCardInterface) => {
  return (
    <div className="card" key={name}>
      <div className="card-titles">
        <h3>{name}</h3>
        <h4>{nickName}</h4>
      </div>
      <img src={imgUrl} alt="" />
      <p>{desc}</p>
    </div>
  );
};
