import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <h1 className="heading">Gratifuel</h1>
      </header>
      <main>
        <h1 className="heading">Hi name.</h1>
        <p>What are you grateful for today?</p>

        <form>
          <input type="text" placeholder="I am doing okay" />
          <button className="submit-btn">I am grateful!</button>
        </form>
      </main>
    </div>
  );
}

export default App;
