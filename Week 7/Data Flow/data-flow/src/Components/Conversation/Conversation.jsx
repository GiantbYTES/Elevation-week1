import "./Conversation.css";

export function Conversation({ convo, sender }) {
  console.log(convo);
  return (
    <div className="Conversation">
      {convo.map((m) => (
        <div>
          {m.sender === "self" ? <span>Me: </span> : <span>{sender}: </span>}"
          {m.text}"
        </div>
      ))}
      <p></p>
    </div>
  );
}

export default Conversation;
