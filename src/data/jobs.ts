export type Job = {
  slug: string;
  title: string;
  type: "Full-time" | "Part-time" | "Contract" | "Internship";
  location: string;
  tags: string[];
  description: string;
};

// To publish a new opening, add an entry here and redeploy.
// Remove an entry (or the whole list) to take it down.
export const jobs: Job[] = [
  {
    slug: "frontend-engineer",
    title: "Frontend Engineer",
    type: "Full-time",
    location: "Remote",
    tags: ["React", "Next.js", "Tailwind", "Motion"],
    description:
      "Build polished, animated interfaces for client SaaS products — from design handoff to production.",
  },
  {
    slug: "fullstack-developer",
    title: "Full-Stack Developer",
    type: "Contract",
    location: "Remote",
    tags: ["Node.js", "Express", "PostgreSQL", "APIs"],
    description:
      "Own features end to end across our client projects — API design, data modelling, and deployment.",
  },
  {
    slug: "ui-motion-designer",
    title: "UI / Motion Designer",
    type: "Part-time",
    location: "Remote",
    tags: ["Figma", "Design systems", "Micro-interactions"],
    description:
      "Design the look and feel of new products — interfaces, design systems, and the motion that brings them alive.",
  },
];

export const careersEmail = "eaydislamone@gmail.com";
