import { FaCode, FaBug, FaRocket } from "react-icons/fa";

function Sidebar({ agentType, setAgentType }) {
  const AGENTS = [
    "reviewer",
    "bugFinder",
    "performance",
    "generator",
    "tester",
  ];
  return (
    <div className="sidebar">
      <h2>🤖 Analyzer AI</h2>

      <button>
        <FaCode />
        Code Review
      </button>

      <button>
        <FaBug />
        Bug Finder
      </button>

      <button>
        <FaRocket />
        Performance
      </button>

      <div className="files">
        <h3>Uploaded Files</h3>

        <div className="file">📄 Login.jsx</div>
        <div className="file">📄 AuthService.js</div>
        <div className="file">📄 Store.js</div>
      </div>
    </div>
  );
}

export default Sidebar;
