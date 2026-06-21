import { useState } from "react";
import Sidebar from "./components/Sidebar.jsx";
import ChatWindow from "./components/ChatWindow.jsx";
import PromptBar from "./components/PromptBar.jsx";
import axios from "axios";
import "./App.css";

function App() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "👋 Welcome to Project Analyzer AI. Upload files and ask me anything.",
    },
  ]);
  const [agentType, setAgentType] = useState("reviewer");
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  console.log(agentType, "////");
  const sendMessage = async (prompt) => {
    if (!prompt.trim()) return;

    const userMessage = {
      role: "user",
      content: prompt,
    };

    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:5000/analyze", {
        prompt,
        agentType,
      });
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: response.data.answer,
        },
      ]);
    } catch (error) {
      console.error(error);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Something went wrong.",
        },
      ]);
    }
    setLoading(false);
    setPrompt("");
  };

  return (
    <div className="app">
      <Sidebar agentType={agentType} setAgentType={setAgentType} />
      <div className="main">
        <ChatWindow messages={messages} loading={loading} />
        <PromptBar onSend={sendMessage} />
      </div>
    </div>
  );
}

export default App;
