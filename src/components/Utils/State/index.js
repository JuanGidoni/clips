export const initialState = {
  currentDate: new Date(),
  data: {
    name: "Juan Ignacio Gidoni",
    age: 27,
    role: "Advanced Consultant Engineer",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React",
      "Redux",
      "Github CI/CD",
      "Azure",
      "Jira",
      "Scrum",
    ],
    projects: [
      {
        name: "My portfolio",
        link: "https://github.com/JuanGidoni/justdoit",
        preview: "imageLink",
      },
    ],
    pages: [
      {
        id: "home",
        title: "Welcome",
        url: "/home",
        extras: {
          header: "Welcome to my website",
          p: "Here you can find all about me and my work experience",
        },
      },
      {
        id: "About me",
        title: "About me",
        url: "/aboutme",
        extras: {
          header: "Welcome to my website",
          p: "Here you can find all about me and my work experience",
        },
      },
      {
        id: "projects",
        title: "Projects",
        url: "/projects",
        extras: {
          header: "Welcome to my website",
          p: "Here you can find all about me and my work experience",
        },
      },
      {
        id: "contact",
        title: "Contact me",
        url: "/contact",
        extras: {
          header: "Welcome to my website",
          p: "Here you can find all about me and my work experience",
        },
      },
    ],
  },
};
