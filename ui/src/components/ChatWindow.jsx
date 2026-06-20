import Message from "./Message";

function ChatWindow({ messages, loading }) {
  return (
    <div className="chat-window">
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
