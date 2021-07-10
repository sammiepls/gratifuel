import React, { useState, useEffect } from "react";

interface Props {
  handleSetName: (name: string) => void;
}

export const Onboarding = ({ handleSetName }: Props) => {
  const [name, setName] = useState("");

  const handleSubmit = () => {
    chrome.storage.sync.set({ name });
    handleSetName(name);
  };

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) =>
    setName(e.currentTarget.value);

  return (
    <div>
      <h2>Hi, what's your name?</h2>
      <form onSubmit={handleSubmit}>
        <input
          value={name}
          onChange={handleInputChange}
          placeholder="My name is..."
        />
        <button className="submit-btn">Submit</button>
      </form>
    </div>
  );
};
