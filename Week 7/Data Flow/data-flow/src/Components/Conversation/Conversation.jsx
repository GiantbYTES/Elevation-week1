import "./Conversation.css";

export function Conversation({ convo, sender, displayConvo }) {
  console.log(convo);
  return (
    <div className="Conversation">
      {convo.map((m) => (
        <div>
          {m.sender === "self" ? <span>Me: </span> : <span>{sender}: </span>}"
          {m.text}"
        </div>
      ))}
      <button className="back" onClick={() => displayConvo("")}>
        Back
      </button>
    </div>
  );
}

export default Conversation;
