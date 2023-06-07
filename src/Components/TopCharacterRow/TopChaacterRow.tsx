import * as React from "react";
import "./TopCharacterRow.css";
import { CharacteArray } from "../../App";

export class TopCharacterRow extends React.Component<CharacteArray> {
  render() {
    const { data } = this.props;
    const sortedCharacters = data.sort((a, b) => b.votes - a.votes);
    {
      return (
        <section id="character-ratings">
          <h4>Top Characters</h4>
          <table>
            <tbody>
              <tr>
                <th>Name</th>
                <th>Skillset</th>
                <th>Votes</th>
              </tr>
              {sortedCharacters.map((character, index) => {
                if (index < 5) {
                  return (
                    <tr
                      className={index % 2 != 0 ? "light" : "dark"}
                      key={character.name}
                    >
                      <td>{character.name}</td>
                      <td>{character.skillset.map((skill) => skill + ", ")}</td>
                      <td>{character.votes}</td>
                    </tr>
                  );
                }
              })}
            </tbody>
          </table>
        </section>
      );
    }
  }
}
