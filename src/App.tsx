import React, { useState, useEffect, useCallback } from "react";
import "./App.css";
import { Form } from "./screens/Form";

function App() {
  const [gratifuels, setGratifuels] = useState<string[]>([]);
  const [input, setInput] = useState("");

  // chrome.runtime.onMessage.addListener(function (
  //   request,
  //   sender,
  //   sendResponse
  // ) {
  //       displayGratifuel();
  //   console.log(
  //     sender.tab
  //       ? "from a content script:" + sender.tab.url
  //       : "from the extension"
  //   );
  //   if (request.greeting === "hello") sendResponse({ farewell: "goodbye" });
  // });

  const getGratifuels = () => {
    chrome.storage.sync.get("gratifuels", (data) => {
      if (data.gratifuels) {
        console.log(data.gratifuels);
        setGratifuels(data.gratifuels);
      }
    });
  };

  const storeGratifuels = useCallback(() => {
    chrome.storage.sync.set({ gratifuels: [...gratifuels, input] });
  }, [input, gratifuels]);

  const clearGratifuels = () => {
    chrome.storage.sync.clear();
    setGratifuels([]);
  };

  useEffect(() => {
    getGratifuels();
  }, []);

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) =>
    setInput(e.currentTarget.value);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input !== "") {
      setGratifuels((state) => [...state, input]);
      storeGratifuels();
      setInput("");
    }
  };

  return (
    <div className="App">
      <header>
        <h1 className="heading">Gratifuel</h1>
      </header>
      <main>
        <Form
          clearGratifuels={clearGratifuels}
          handleSubmit={handleSubmit}
          handleInputChange={handleInputChange}
          input={input}
        />
        <ul>
          {gratifuels.map((g) => (
            <li>{g}</li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
