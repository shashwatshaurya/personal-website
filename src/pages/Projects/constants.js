export const projects = [
  {
    name: "Personal Website",
    link: "https://shashwatshaurya.github.io/personal-website/",
    description:
      "A portfolio site to showcase my work and have my own space on this internet to speak out my mind and connect with like minded individuals",
    imageUrl: `${process.env.PUBLIC_PATH ?? '/'}images/WebsiteImg.png`,
    altTxt: "Personal Website Image"
  },
  {
    name: "Resume Builder",
    link: "",
    description:
      "A full-stack application for creating and managing professional resumes. Built with Next.js frontend and NestJS backend for a modern, scalable solution. Features component-based architecture, TypeScript for type safety, and SEO-friendly user interface. This is under development, you can help by contributing to the code.",
    imageUrl: `${process.env.PUBLIC_PATH ?? '/'}images/WebsiteImg.png`,
    altTxt: "Resume Builder Image",
    isUnderDevelopment: true
  },
  {
    name: "Component Library",
    link: "",
    description:
      "A react based utility library having peculiar and common UI components. Highly flexible and adaptive. Has support for StoryBook. Active contribution is welcomed.",
    imageUrl: `${process.env.PUBLIC_PATH ?? '/'}images/WebsiteImg.png`,
    altTxt: "Component Library Image",
    isUnderDevelopment: true
  },
];
