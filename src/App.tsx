import React, { useState, useEffect, useCallback } from "react";
import "./App.css";

function App() {
  const [gratifuels, setGratifuels] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const getGratifuels = () => {
    chrome.storage.sync.get("gratifuels", (data) => {
      if (data.gratifuels) {
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

  useEffect(() => {
    storeGratifuels();
  }, [gratifuels, storeGratifuels]);

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) =>
    setInput(e.currentTarget.value);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input !== "") {
      setGratifuels((state) => [...state, input]);
      setInput("");
    }
  };

  return (
    <div className="App">
      <header>
        <h1 className="heading">Gratifuel</h1>
      </header>
      <main>
        <h1 className="heading">Hi name.</h1>
        <p>What are you grateful for today?</p>
        <button onClick={clearGratifuels}>Clear gratifuels</button>

        <form onSubmit={handleSubmit}>
          <input
            value={input}
            onChange={handleInputChange}
            type="text"
            placeholder="I am doing okay"
          />
          <button className="submit-btn">I am grateful!</button>
        </form>
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
