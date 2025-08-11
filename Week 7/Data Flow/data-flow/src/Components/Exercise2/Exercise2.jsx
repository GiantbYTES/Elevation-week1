import "./Exercise2.css";
import List from "../List/List";
import Conversation from "../Conversation/Conversation";
import { useState } from "react";

export function Exercise2() {
  const [convs, setConvs] = useState({
    displayConversation: null,
    conversations: [
      {
        with: "Laura",
        convo: [
          { text: "Hi", sender: "self" },
          { text: "You there?", sender: "self" },
          { text: "Yeah, hi, what's up?", sender: "other" },
        ],
      },
      {
        with: "Dad",
        convo: [
          { text: "Have you finished your school work yet?", sender: "other" },
          { text: "Yes.", sender: "self" },
          { text: "What do you mean, yes?", sender: "other" },
          { text: "??", sender: "self" },
        ],
      },
      {
        with: "Shoobert",
        convo: [
          { text: "Shoobert!!!", sender: "self" },
          { text: "Dude!!!!!!!!", sender: "other" },
          { text: "Shooooooooo BERT!", sender: "self" },
          { text: "You're my best friend", sender: "other" },
          { text: "No, *you're* my best friend", sender: "self" },
        ],
      },
    ],
  });

  function displayConvo(name) {
    setConvs((oldConvs) => ({
      ...oldConvs,
      displayConversation: name,
    }));
  }

  return (
    <div className="Exercise2">
      {convs.displayConversation ? (
        <Conversation
          convo={
            convs.conversations.filter(
              (c) => c.with === convs.displayConversation
            )[0].convo
          }
          sender={convs.displayConversation}
          displayConvo={displayConvo}
        />
      ) : (
        <List
          contacts={convs.conversations.map((c) => c.with)}
          displayConvo={displayConvo}
        />
      )}
    </div>
  );
}

export default Exercise2;
