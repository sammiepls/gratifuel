import React from "react";

interface Props {
  name: string;
  clearGratifuels: () => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  input: string;
  handleInputChange: (e: React.FormEvent<HTMLInputElement>) => void;
}

export const Form = ({
  clearGratifuels,
  handleSubmit,
  input,
  handleInputChange,
  name,
}: Props) => {
  return (
    <>
      <h1 className="heading">Hi {name}.</h1>
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
    </>
  );
};
