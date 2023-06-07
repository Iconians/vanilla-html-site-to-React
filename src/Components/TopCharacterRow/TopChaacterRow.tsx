import * as React from "react";
import "./TopCharacterRow.css";
import { topCharacterRowInterface } from "../../interfaces";

export class TopCharacterRow extends React.Component<topCharacterRowInterface> {
  render() {
    const { name, skillset, votes, bgColor } = this.props;

    return (
      <tr className={bgColor} key={name}>
        <td>{name}</td>
        <td>{skillset}</td>
        <td>{votes}</td>
      </tr>
    );
  }
}
