import Message from "./Message";
import { useEffect, useRef } from "react";

function ChatWindow({ messages, loading }) {
  const chatRef = useRef();

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);
  return (
    <div ref={chatRef} className="chat-window">
      {messages.map((message, index) => (
        <Message key={index} message={message} />
      ))}
      {/* Loader 1 */}
      {/* {loading && <div className="loader-message">🤖 Analyzing...</div>} */}
      {/* Loader 2 */}
      {loading && (
        <div className="typing">
          <span></span>
          <span></span>
          <span></span>
        </div>
      )}
    </div>
  );
}

export default ChatWindow;
