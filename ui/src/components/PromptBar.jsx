import { useState } from "react";

function PromptBar({ onSend }) {
  const [prompt, setPrompt] = useState("");

  const submit = () => {
    onSend(prompt);
    setPrompt("");
  };

  return (
    <div className="prompt-bar">
      <input
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Ask about your project..."
      />

      <button onClick={submit}>Send</button>
    </div>
  );
}

export default PromptBar;
