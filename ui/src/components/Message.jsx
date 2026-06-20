import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { useRef, useEffect } from "react";

function Message({ message }) {
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [message]);
  return (
    <div
      className={`message ${
        message.role === "user" ? "user-message" : "assistant-message"
      }`}
    >
      <ReactMarkdown>
        {/* <SyntaxHighlighter language="javascript"> */}
        {message.content}
        {/* </SyntaxHighlighter> */}
      </ReactMarkdown>
      <div ref={messagesEndRef} />
    </div>
  );
}

export default Message;
