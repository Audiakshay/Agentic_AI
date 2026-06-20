import { config } from "../config/config.js";

export const askAI = async (prompt) => {
  const { gorqApiKey, gorqModel, backendUrl } = config;
  console.log(config, "conf///");
  const response = await fetch(`${backendUrl}/chat/completions`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${gorqApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: gorqModel,
      messages: [
        {
          role: "system",
          content: "You are a senior React developer and debugging expert.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
    }),
  });

  const data = await response.json();

  return data.choices[0].message.content;
};
