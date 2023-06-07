import "./App.css";
import "./reset.css";
import { CharacterCards } from "./Components/CharacterCards/CharacterCards";
import { NavListItem } from "./Components/NavListItem/NavListItem";
import { TopCharacterRow } from "./Components/TopCharacterRow/TopChaacterRow";
import { characterCardData, listItemData, topCaracterRowData } from "./data";

function App() {
  return (
    <>
      <header>
        <h1>Fullmetal Alchemist</h1>
        <nav>
          {listItemData.map((item) => {
            return <NavListItem key={item.li} text={item.li} />;
          })}
        </nav>
      </header>
      <section id="character-ratings">
        <h4>Top Characters</h4>
        <table>
          <tr>
            <th>Name</th>
            <th>Skillset</th>
            <th>Votes</th>
          </tr>
          {topCaracterRowData.map((character) => {
            return (
              <TopCharacterRow
                key={character.name}
                name={character.name}
                skillset={character.skillset}
                votes={character.votes}
                bgColor={character.bgColor}
              />
            );
          })}
        </table>
      </section>
      <section id="character-cards">
        {characterCardData.map((character) => {
          return (
            <CharacterCards
              key={character.name}
              name={character.name}
              nickName={character.nickName}
              imgUrl={character.imgUrl}
              desc={character.desc}
            />
          );
        })}
      </section>
    </>
  );
}

export default App;
