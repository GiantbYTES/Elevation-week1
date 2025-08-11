import "./List.css";
import Contact from "../Contact/Contact";

export function List({ contacts }) {
  //   console.log(contacts);
  return (
    <div className="List">
      {contacts.map((c, id) => (
        <Contact key={id} contact={c} />
      ))}
    </div>
  );
}

export default List;
