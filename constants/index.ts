import { CreateAssistantDTO } from "@vapi-ai/web/dist/api";
import { z } from "zod";

export const mappings = {
  "react.js": "react",
  reactjs: "react",
  react: "react",
  "next.js": "nextjs",
  nextjs: "nextjs",
  next: "nextjs",
  "vue.js": "vuejs",
  vuejs: "vuejs",
  vue: "vuejs",
  "express.js": "express",
  expressjs: "express",
  express: "express",
  "node.js": "nodejs",
  nodejs: "nodejs",
  node: "nodejs",
  mongodb: "mongodb",
  mongo: "mongodb",
  mongoose: "mongoose",
  mysql: "mysql",
  postgresql: "postgresql",
  sqlite: "sqlite",
  firebase: "firebase",
  docker: "docker",
  kubernetes: "kubernetes",
  aws: "aws",
  azure: "azure",
  gcp: "gcp",
  digitalocean: "digitalocean",
  heroku: "heroku",
  photoshop: "photoshop",
  "adobe photoshop": "photoshop",
  html5: "html5",
  html: "html5",
  css3: "css3",
  css: "css3",
  sass: "sass",
  scss: "sass",
  less: "less",
  tailwindcss: "tailwindcss",
  tailwind: "tailwindcss",
  bootstrap: "bootstrap",
  jquery: "jquery",
  typescript: "typescript",
  ts: "typescript",
  javascript: "javascript",
  js: "javascript",
  "angular.js": "angular",
  angularjs: "angular",
  angular: "angular",
  "ember.js": "ember",
  emberjs: "ember",
  ember: "ember",
  "backbone.js": "backbone",
  backbonejs: "backbone",
  backbone: "backbone",
  nestjs: "nestjs",
  graphql: "graphql",
  "graph ql": "graphql",
  apollo: "apollo",
  webpack: "webpack",
  babel: "babel",
  "rollup.js": "rollup",
  rollupjs: "rollup",
  rollup: "rollup",
  "parcel.js": "parcel",
  parceljs: "parcel",
  npm: "npm",
  yarn: "yarn",
  git: "git",
  github: "github",
  gitlab: "gitlab",
  bitbucket: "bitbucket",
  figma: "figma",
  prisma: "prisma",
  redux: "redux",
  flux: "flux",
  redis: "redis",
  selenium: "selenium",
  cypress: "cypress",
  jest: "jest",
  mocha: "mocha",
  chai: "chai",
  karma: "karma",
  vuex: "vuex",
  "nuxt.js": "nuxt",
  nuxtjs: "nuxt",
  nuxt: "nuxt",
  strapi: "strapi",
  wordpress: "wordpress",
  contentful: "contentful",
  netlify: "netlify",
  vercel: "vercel",
  "aws amplify": "amplify",
};

export const interviewer: CreateAssistantDTO = {
  name: "Interviewer",
  firstMessage:
    "Hello! Greetings from my side to be joining you for this interview. I'm eager to learn more about your skills and experience. Let's get started!",
  transcriber: {
    provider: "deepgram",
    model: "nova-2",
    language: "en",
  },
  voice: {
    provider: "11labs",
    voiceId: "sarah",
    stability: 0.4,
    similarityBoost: 0.8,
    speed: 0.9,
    style: 0.5,
    useSpeakerBoost: true,
  },
  model: {
    provider: "openai",
    model: "gpt-4",
    messages: [
      {
        role: "system",
        content: `You are a professional job interviewer conducting a real-time voice interview with a candidate. Act like a real human interviewer — warm, casual, and friendly. Speak in **Hinglish** (a natural mix of Hindi and English), just like how real people in India talk during interviews.

INTERVIEW FLOW:
1. Start with a warm introduction: "Hi there! I'm Sarah, and I'll be conducting your interview today. Thanks for taking the time to speak with me."

2. Ask the candidate to introduce themselves: "Before we dive into the technical questions, could you please introduce yourself and tell me about your recent experience?"

3. Listen to their introduction and respond naturally: "That's great!" or "Interesting background!" or "Thanks for sharing that!"

4. Then follow the structured questions:
{{questions}}

RESPONSE GUIDELINES:
- Evaluate each answer for technical accuracy and provide realistic feedback
- For CORRECT answers, respond with phrases like:
  • "That's absolutely right!"
  • "Exactly! Great explanation."
  • "Perfect, you nailed that one."
  • "Spot on! I like how you explained that."
  • "That's a solid answer."

- For PARTIALLY CORRECT answers, respond with:
  • "You're on the right track, but there's a bit more to it."
  • "Good start, can you elaborate on that?"
  • "That's partially correct. What else would you add?"
  • "You got the main idea, but let's dig deeper."

- For INCORRECT answers, respond with:
  • "Hmm, that's not quite right."
  • "Actually, that's not accurate."
  • "I think you might be confusing that with something else."
  • "Not exactly. Let me give you a hint..."
  • "That's off the mark. Want to try again?"

CONVERSATION STYLE:
- Talk like a real human interviewer, not an AI
- Use natural conversation fillers: "Right," "I see," "Interesting," "Okay"
- Show genuine interest in their answers
- Ask follow-up questions when answers are vague
- Keep responses SHORT (1-2 sentences max)
- Sound conversational, not formal

INTERVIEW CONCLUSION:
End with: "That wraps up our interview! Thanks for your time today. We'll be in touch soon with feedback. Have a great day!"

Remember: You're having a real conversation, not reading from a script. Be human, be natural, be genuine.`,
      },
    ],
  },
};

export const setupAssistant: CreateAssistantDTO = {
  name: "Interview Setup Assistant",
  firstMessage:
    "Hi! I'm here to help you set up your mock interview. I'll ask you a few quick questions to create the perfect interview for you.",
  transcriber: {
    provider: "deepgram",
    model: "nova-2",
    language: "en",
  },
  voice: {
    provider: "11labs",
    voiceId: "sarah",
    stability: 0.4,
    similarityBoost: 0.8,
    speed: 0.9,
    style: 0.5,
    useSpeakerBoost: true,
  },
  model: {
    provider: "openai",
    model: "gpt-4",
    messages: [
      {
        role: "system",
        content: `You are an interview setup assistant. Your job is to collect information to create a personalized mock interview.

Ask these questions in order and be conversational:

1. "What type of interview would you like? You can choose Technical, Behavioral, or Mixed."
2. "What role or position are you preparing for?" 
3. "What's your experience level - Junior, Mid-level, or Senior?"
4. "What technologies or skills should we focus on? For example: React, Python, AWS, etc."
5. "How many questions would you like? I can create between 3 to 10 questions."

IMPORTANT: After they answer each question, briefly acknowledge their answer using their exact words. For example:
- "Great! So we're doing a {{type}} interview."
- "Perfect! {{role}} position it is."
- "Got it! {{level}} level experience."
- "Excellent! We'll focus on {{techstack}}."
- "Perfect! I'll create {{amount}} questions for you."

Variables to extract and use:
- type: Technical/Behavioral/Mixed
- role: Job position/role name
- level: Junior/Mid/Senior
- techstack: Technologies/skills mentioned
- amount: Number of questions (3-10)

After collecting all information, summarize everything clearly: "Alright, I have everything I need. I'm creating a {{type}} interview for a {{role}} position at {{level}} level, focusing on {{techstack}}, with {{amount}} questions. Your interview will be ready shortly!"

Keep responses very short and natural for voice conversation. One sentence responses are perfect.`,
      },
    ],
  },
};

export const feedbackSchema = z.object({
  totalScore: z.number(),
  categoryScores: z.tuple([
    z.object({
      name: z.literal("Communication Skills"),
      score: z.number(),
      comment: z.string(),
    }),
    z.object({
      name: z.literal("Technical Knowledge"),
      score: z.number(),
      comment: z.string(),
    }),
    z.object({
      name: z.literal("Problem Solving"),
      score: z.number(),
      comment: z.string(),
    }),
    z.object({
      name: z.literal("Cultural Fit"),
      score: z.number(),
      comment: z.string(),
    }),
    z.object({
      name: z.literal("Confidence and Clarity"),
      score: z.number(),
      comment: z.string(),
    }),
  ]),
  strengths: z.array(z.string()),
  areasForImprovement: z.array(z.string()),
  finalAssessment: z.string(),
});

export const interviewCovers = [
  "/adobe.png",
  "/amazon.png",
  "/facebook.png",
  "/hostinger.png",
  "/pinterest.png",
  "/quora.png",
  "/reddit.png",
  "/skype.png",
  "/spotify.png",
  "/telegram.png",
  "/tiktok.png",
  "/yahoo.png",
];

export const dummyInterviews: Interview[] = [
  {
    id: "1",
    userId: "user1",
    role: "Frontend Developer",
    type: "Technical",
    techstack: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    level: "Junior",
    questions: ["What is React?"],
    finalized: false,
    createdAt: "2024-03-15T10:00:00Z",
  },
  {
    id: "2",
    userId: "user1",
    role: "Full Stack Developer",
    type: "Mixed",
    techstack: ["Node.js", "Express", "MongoDB", "React"],
    level: "Senior",
    questions: ["What is Node.js?"],
    finalized: false,
    createdAt: "2024-03-14T15:30:00Z",
  },
];
