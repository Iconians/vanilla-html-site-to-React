import "./App.css";
import "./reset.css";
import { NavListItem } from "./Components/NavListItem/NavListItem";
import { TopCharacterRow } from "./Components/TopCharacterRow/TopChaacterRow";
import { Character, data, listItemData } from "./data";
import { CharacterCards } from "./Components/CharacterCards/CharacterCards";

export interface CharacteArray {
  data: Character[];
}

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
      <TopCharacterRow data={data} />
      <CharacterCards data={data} />
    </>
  );
}

export default App;
