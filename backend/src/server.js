const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const axios = require("axios");
const SYSTEM_PROMPTS = require("./services/groqService");

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

const upload = multer({
  dest: "uploads/",
});

app.post("/analyze", upload.array("files"), async (req, res) => {
  try {
    const { prompt, agentType } = req.body;

    let projectContext = "";

    const files = req.files || [];

    for (const file of files) {
      const content = fs.readFileSync(file.path, "utf8");

      projectContext += `
FILE: ${file.originalname}

${content}

========================
`;
    }

    const response = await axios.post(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        model: "llama-3.1-8b-instant",
        messages: [
          {
            role: "system",
            content: SYSTEM_PROMPTS[agentType],
          },
          {
            role: "user",
            content: `
PROJECT:

${projectContext}

QUESTION:

${prompt}
`,
          },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
          "Content-Type": "application/json",
        },
      },
    );

    res.json({
      answer: response.data.choices[0].message.content,
    });
  } catch (err) {
    console.error(err);

    res.status(500).json({
      error: err.message,
    });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
