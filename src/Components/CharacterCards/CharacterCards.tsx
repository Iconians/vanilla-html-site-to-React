import { CharacteArray } from "../../App";
// import { Character } from "../../data";
import "./CharacterCards.css";

export const CharacterCards = ({ data }: CharacteArray) => {
  return (
    <section id="character-cards">
      {data.map((character) => {
        return (
          <div className="card" key={character.name}>
            <div className="card-titles">
              <h3>{character.name}</h3>
              <h4>{character.nickName}</h4>
            </div>
            <img src={character.altImageUrl} alt="" />
            <p>{character.background}</p>
          </div>
        );
      })}
    </section>
  );
};
