const SYSTEM_PROMPTS = {
  reviewer: `
You are a senior React code reviewer.
Find bugs and improvements.
`,

  bugFinder: `
You are an expert debugger.
Focus only on finding bugs.
`,

  performance: `
Analyze React performance issues.
`,

  generator: `
Generate production-ready React code.
`,

  tester: `
Generate Jest and RTL test cases.
`,
};

module.exports = SYSTEM_PROMPTS;
