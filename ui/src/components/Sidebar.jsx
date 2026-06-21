import { FaCode, FaBug, FaRocket, FaMagic, FaVial } from "react-icons/fa";

function Sidebar({ agentType, setAgentType, files = [] }) {
  const AGENTS = [
    {
      key: "reviewer",
      label: "Code Review",
      icon: <FaCode />,
    },
    {
      key: "bugFinder",
      label: "Bug Finder",
      icon: <FaBug />,
    },
    {
      key: "performance",
      label: "Performance",
      icon: <FaRocket />,
    },
    {
      key: "generator",
      label: "Code Generator",
      icon: <FaMagic />,
    },
    {
      key: "tester",
      label: "Test Generator",
      icon: <FaVial />,
    },
  ];

  return (
    <div className="sidebar">
      <h2>🤖 Analyzer AI</h2>

      {AGENTS.map((agent) => (
        <button
          key={agent.key}
          className={`agent-btn ${agentType === agent.key ? "active" : ""}`}
          onClick={() => setAgentType(agent.key)}
        >
          {agent.icon}
          <span>{agent.label}</span>
        </button>
      ))}

      <div className="files">
        <h3>Uploaded Files</h3>

        {files.length > 0 ? (
          files.map((file, index) => (
            <div key={index} className="file">
              📄 {file.name}
            </div>
          ))
        ) : (
          <div className="empty-files">No files uploaded</div>
        )}
      </div>
    </div>
  );
}

export default Sidebar;
