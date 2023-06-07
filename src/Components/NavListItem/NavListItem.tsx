interface NavListItemProps {
  text: string;
}

export const NavListItem = ({ text }: NavListItemProps) => {
  return <li key={text}>{text}</li>;
};
