import { _ as ensure_array_like, T as attr, X as escape_html, S as pop, Q as push, V as stringify } from "../../../chunks/index.js";
import { I as Icon } from "../../../chunks/Icon.js";
const projectTypeEmojiMap = {
  PROFESSIONAL: "💼",
  FEATURED: "🚀",
  EXPERIMENTAL: "🧪",
  FIGMA_TO_UI: "🎨"
};
function getProjectEmoji(type) {
  return projectTypeEmojiMap[type];
}
const projects = [
  {
    title: "Next Trade",
    description: `Next Trade** is a lightweight, modern trading journal designed for retail traders to log trades, 
					 track performance, and analyze patterns over time. Built for speed and clarity, it helps users improve 
					 consistency and decision-making with clean visuals and minimal noise.`,
    type: "FEATURED",
    contribution: ["Design", "Frontend", "Architecture", "State Management"],
    logo: "/NextTradeLogo.png",
    image: "/images/next-trade-preview.png",
    link: null,
    techStack: ["React", "NextJs", "Tailwind CSS", "Postgress", "Neon", "Jotai", "Chart.js"],
    platform: ["Web"],
    company: "",
    underDevelpoment: true,
    solo: true
  },
  {
    title: "Gramlok",
    description: `A large-scale social media platform designed to bridge connections between villages across India. Gramlok
					  fosters local engagement by supporting 17 regional languages, enabling users to post activities, news, and
					  events seamlessly. It empowers communities by providing a marketplace for buying and selling goods without
					  platform fees and offers a space to showcase and promote local arts and services. Gramlok exemplifies inclusive
					  digital innovation, bringing rural communities closer through technology.`,
    type: "PROFESSIONAL",
    contribution: [
      "Contributed to UI development and multi-language support (17+ Indian languages).",
      "Integrated backend APIs and managed dynamic data rendering.",
      "Optimized performance and UI for low-end Android devices.",
      "Converted Gramlok web app to native Android/iOS with Capacitor and published"
    ],
    logo: "/gramLogo.png",
    image: "/gram-square.png",
    link: "https://www.gramlok.in",
    techStack: ["svelte", "svelteKit", "pwa", "node", "express", "capacitor"],
    platform: ["web", "android", "ios"],
    company: "Lulugram",
    underDevelpoment: false,
    solo: false
  },
  {
    title: "Crossword-Mart",
    description: `A specialized crossword game app designed for GRE, GMAT, SAT, and TOEFL aspirants to enhance their vocabulary.
         			  Built with SvelteKit, the app provides an engaging way to master complex words through interactive puzzles tai
					  lored to advanced learners. Each crossword is curated to align with the challenging vocabulary requirements of
					  competitive exams, ensuring users can learn effectively while having fun.The app also includes progress tracking,
					  word definitions, and contextual examples to reinforce learning.`,
    type: "PROFESSIONAL",
    contribution: [
      "Developed a crossword app for GRE, GMAT, SAT, TOEFL prep.",
      "Designed UI/UX, integrated APIs, optimized performance, and added in-app purchases.",
      "Managed app submissions to Google Play and App Store."
    ],
    logo: "/crosswordMart_logo.png",
    image: "/csmart-square.png",
    link: "https://crosswordmart.com",
    techStack: ["SvelteKit", "Tailwind CSS", "Firebase", "capacitor"],
    platform: ["web", "android", "ios"],
    company: "Lulugram",
    underDevelpoment: false,
    solo: false
  },
  {
    title: "vidhyavart",
    description: `An innovative e-learning app built using React Native, designed to enhance the learning experience for students.
         			  Vidhyavart offers a seamless platform where users can join courses, learn interactively, ask questions, and practice
					  concepts in real-time. Powered by AI, the app personalizes learning paths to suit individual needs and provides an 
					  engaging environment for students to grasp complex topics efficiently. Its intuitive design ensures accessibility across
					  devices, fostering a culture of continuous learning.`,
    type: "PROFESSIONAL",
    contribution: [
      "Developed a cross-platform e-learning app using React Native/Expo and AI-based features, allowing students to ask questions, learn concepts, and practice quizzes.",
      "Integrated AI-based OCR and math rendering, enabling students to capture textbook problems and edit LaTeX-formatted content.",
      "Designed a quiz engine with timers, autosubmit, analytics, and persistent resume functionality using Zustand + AsyncStorage.",
      "Integrated lightweight AI models to assist users in real-time doubt solving using OCR and semantic search."
    ],
    logo: "/vidhyavartLogo.png",
    image: "/vidyavart-square.png",
    link: "https://vidyavart.in/",
    techStack: ["React Native", "mistral AI", "Langchain js", "node", "express"],
    platform: ["android", "ios"],
    company: "Lulugram",
    underDevelpoment: true,
    solo: false
  },
  {
    title: "Lulugram-Dashboard",
    description: `A modern, responsive landing page designed as the digital front for Lulugram, showcasing its brand, features, and value proposition.
					Built entirely with SvelteKit and Tailwind CSS v4, the page serves as both a portfolio and an entry point to the internal marketing dashboard.
					It emphasizes clean UI, mobile responsiveness, and high performance, offering visitors a seamless first impression of the platform.
					The layout is structured for scalability, making it easy to extend into a full-featured marketing or admin portal in the future.`,
    type: "PROFESSIONAL",
    contribution: [
      "Independently designed and developed a high-converting, responsive landing page for Lulugram, aligning with brand identity and modern UI/UX principles.",
      "Used SvelteKit + Tailwind CSS v4 for fast, component-based development with smooth transitions and optimized performance.",
      "Focused on mobile-first responsiveness, accessibility, and SEO-ready markup.",
      "Delivered a fully deployable, production-ready frontend for marketing and user acquisition campaigns."
    ],
    logo: "/lulugramLogo.png",
    image: "/Lulugram-square.png",
    link: "https://lulugram.in",
    techStack: ["Svelte", "Sveltekit", "Tailwind"],
    platform: ["web"],
    company: "Lulugram",
    underDevelpoment: false,
    solo: true
  },
  {
    title: "Support System",
    description: `A real-time, multi-tenant support system built for Lulugram and its connected platforms. The system enables users to initiate chats from within any app and routes incoming messages to all active admins. 
	              The first admin to respond claims the session, ensuring quick, personalized support without collisions. Built with scalability and performance in mind, it serves as a centralized hub for managing customer interactions across apps.`,
    type: "FEATURED",
    contribution: [
      "Independently designed and built the entire support system from scratch, including frontend, backend, and socket-based real-time messaging.",
      "Implemented multi-admin broadcasting, secure session handling, and auto-claiming logic to ensure smooth support workflows.",
      "Used React Native for the mobile app interface and Node.js + PostgreSQL (with Prisma) on the backend.",
      "Designed a multi-tenant architecture to handle support for multiple apps, isolating user data while sharing the MAIN system.",
      "Delivered a scalable and reusable support system that now serves as a shared foundation across internal products."
    ],
    logo: "/defaultLogo.png",
    image: "/support-system-preview.png",
    link: null,
    // Use actual link if exists or leave blank
    techStack: [
      "React Native",
      "SvelteKit",
      "Tailwind",
      "Node.js",
      "PostgreSQL",
      "Prisma",
      "Socket.io"
    ],
    platform: ["mobile"],
    company: "Lulugram",
    underDevelpoment: true,
    solo: true
  },
  {
    title: "Meta Hunt",
    description: `An AI Powered Gaming App`,
    type: "FIGMA_TO_UI",
    contribution: [
      "Built production-ready UIs from Figma mockups — fast, responsive, and accurate to the design specs."
    ],
    logo: "/metaHuntLogo.svg",
    image: null,
    link: "https://metahunt.vercel.app/",
    // Use actual link if exists or leave blank
    techStack: ["Tailwind", "Svelte", "Vite"],
    platform: ["Web"],
    company: null,
    underDevelpoment: false,
    solo: true
  },
  {
    title: "LokSa Boxing Gym",
    description: `A Beautifull Boxing Gym Landing Page`,
    type: "FIGMA_TO_UI",
    contribution: [
      "Built production-ready UIs from Figma mockups — fast, responsive, and accurate to the design specs."
    ],
    logo: "/loksaLogo.png",
    image: null,
    link: "https://whimsical-tartufo-263a9a.netlify.app/",
    // Use actual link if exists or leave blank
    techStack: ["Tailwind", "html", "css", "Vite"],
    platform: ["Web"],
    company: null,
    underDevelpoment: false,
    solo: true
  },
  {
    title: "NervesPark Movie Search",
    description: `An Experimental Movie Search app based on celebrities`,
    type: "EXPERIMENTAL",
    contribution: [
      "Built the app for learning purpose",
      "Leveraging Sveltekit and tried its Load functions via SSR"
    ],
    logo: "/defaultLogo.png",
    image: null,
    link: "https://nervspark-assessment.netlify.app/",
    // Use actual link if exists or leave blank
    techStack: ["Tailwind", "Svelte", "Vite", "Sveltekit", "SSR"],
    platform: ["Web"],
    company: null,
    underDevelpoment: false,
    solo: true
  }
];
function Project($$payload, $$props) {
  push();
  let { project } = $$props;
  project.type;
  const each_array = ensure_array_like(project.techStack);
  $$payload.out += `<div class="relative block h-full rounded-2xl bg-gray-800 p-5 shadow-md transition hover:bg-gray-700">`;
  if (project.link) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<a${attr("href", project.link)} target="_blank" class="redirect-icon group absolute right-4 top-4 w-6 text-gray-400">`;
    Icon($$payload, {
      class: "transition-all duration-500 group-hover:-translate-y-2 group-hover:translate-x-2",
      icon: "mingcute:external-link-line",
      width: "100%"
    });
    $$payload.out += `<!----></a>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <img${attr("src", project.logo)} width="100px" class="mx-auto mb-4 rounded-md" alt="This the current Project Logo"> <h3 class="mb-2 text-xl font-semibold">${escape_html(project.title)}</h3> <p class="mb-3 line-clamp-3 text-sm text-gray-300">${escape_html(project.description)}</p> <div class="flex flex-wrap gap-2"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let tag = each_array[$$index];
    $$payload.out += `<span class="rounded-full bg-gray-700 px-2 py-1 text-xs">${escape_html(tag)}</span>`;
  }
  $$payload.out += `<!--]--></div></div>`;
  pop();
}
function ProjectCatogory($$payload, $$props) {
  push();
  const { category } = $$props;
  const [categoryName, projects2] = category;
  const categoryEmoji = getProjectEmoji(categoryName);
  const each_array = ensure_array_like(projects2);
  $$payload.out += `<section class="xl:mb-16 md:mb-10 mb-6"><h2 class="mb-6 text-2xl font-bold capitalize">${escape_html(categoryEmoji)} ${escape_html(categoryName.split("_").join(" ").toLowerCase())} Projects</h2> <div${attr("class", `${stringify(projects2.length > 3 ? "scroll-bar-css" : "no-scrollbar")} flex w-full gap-4 overflow-x-scroll rounded-lg p-2 svelte-1q1e32k`)}><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let project = each_array[$$index];
    $$payload.out += `<div class="max-w-xs min-w-80">`;
    Project($$payload, { project });
    $$payload.out += `<!----></div>`;
  }
  $$payload.out += `<!--]--></div></section>`;
  pop();
}
function _page($$payload, $$props) {
  push();
  const order = {
    FEATURED: 0,
    PROFESSIONAL: 1,
    EXPERIMENTAL: 2
  };
  let grouped = Object.groupBy(projects, (item) => item.type);
  let categories = Object.entries(grouped).sort(([a], [b]) => order[a] - order[b]);
  const each_array = ensure_array_like(categories);
  $$payload.out += `<main><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let category = each_array[$$index];
    ProjectCatogory($$payload, { category });
  }
  $$payload.out += `<!--]--></main>`;
  pop();
}
export {
  _page as default
};
