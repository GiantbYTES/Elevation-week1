import "./List.css";
import Contact from "../Contact/Contact";

export function List({ key, contacts, displayConvo }) {
  return (
    <div className="List">
      {contacts.map((c, id) => (
        <Contact key={id} contact={c} displayConvo={displayConvo} />
      ))}
    </div>
  );
}

export default List;
