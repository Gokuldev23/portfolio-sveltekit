// 1. Define the exact union of types
type ProjectType = 'PROFESSIONAL' | 'FEATURED' | 'EXPERIMENTAL' | 'FIGMA_TO_UI';

// 2. Define the Project type (as you already have)
type Project = {
	title: string;
	description: string;
	type: ProjectType;
	contribution: string[];
	logo: string | null;
	image: string | null;
	link: string | null;
	techStack: string[];
	platform: string[];
	company: string | null;
	underDevelpoment: boolean;
	solo: boolean;
};

// 3. Map project types to emojis — fully type-checked
const projectTypeEmojiMap: Record<ProjectType, string> = {
	PROFESSIONAL: '💼',
	FEATURED: '🚀',
	EXPERIMENTAL: '🧪',
	FIGMA_TO_UI: '🎨'
};

export const projectTypeMetaData: Record<ProjectType, { label: string; slug: string; emoji: string }> = {
	PROFESSIONAL: {
		label: 'Professional',
		slug: 'professional',
		emoji: '💼'
	},
	FEATURED: {
		label: 'Featured',
		slug: 'featured',
		emoji: '🚀'
	},
	EXPERIMENTAL: {
		label: 'Experimental',
		slug: 'experimental',
		emoji: '🧪'
	},
	FIGMA_TO_UI: {
		label: 'Figma to UI',
		slug: 'figma-to-ui',
		emoji: '🎨'
	}
};




export function getProjectEmoji(type: ProjectType): string {
	return projectTypeEmojiMap[type];
}




export const projects: Project[] = [
	{
		title: 'Next Trade',
		description: `Next Trade** is a lightweight, modern trading journal designed for retail traders to log trades, 
					 track performance, and analyze patterns over time. Built for speed and clarity, it helps users improve 
					 consistency and decision-making with clean visuals and minimal noise.`,
		type: 'FEATURED',
		contribution: ['Design', 'Frontend', 'Architecture', 'State Management'],
		logo: '/NextTradeLogo.png',
		image: '/images/next-trade-preview.png',
		link: null,
		techStack: ['React', 'NextJs', 'Tailwind CSS', 'Postgress', 'Neon', 'Jotai', 'Chart.js'],
		platform: ['Web'],
		company: '',
		underDevelpoment: true,
		solo: true
	},
	{
		title: 'Gramlok',
		description: `A large-scale social media platform designed to bridge connections between villages across India. Gramlok
					  fosters local engagement by supporting 17 regional languages, enabling users to post activities, news, and
					  events seamlessly. It empowers communities by providing a marketplace for buying and selling goods without
					  platform fees and offers a space to showcase and promote local arts and services. Gramlok exemplifies inclusive
					  digital innovation, bringing rural communities closer through technology.`,
		type: 'PROFESSIONAL',
		contribution: [
			'Contributed to UI development and multi-language support (17+ Indian languages).',
			'Integrated backend APIs and managed dynamic data rendering.',
			'Optimized performance and UI for low-end Android devices.',
			'Converted Gramlok web app to native Android/iOS with Capacitor and published'
		],
		logo: '/gramLogo.png',
		image: '/gram-square.png',
		link: 'https://www.gramlok.in',
		techStack: ['svelte', 'svelteKit', 'pwa', 'node', 'express', 'capacitor'],
		platform: ['web', 'android', 'ios'],
		company: 'Lulugram',
		underDevelpoment: false,
		solo: false
	},
	{
		title: 'Crossword-Mart',
		description: `A specialized crossword game app designed for GRE, GMAT, SAT, and TOEFL aspirants to enhance their vocabulary.
         			  Built with SvelteKit, the app provides an engaging way to master complex words through interactive puzzles tai
					  lored to advanced learners. Each crossword is curated to align with the challenging vocabulary requirements of
					  competitive exams, ensuring users can learn effectively while having fun.The app also includes progress tracking,
					  word definitions, and contextual examples to reinforce learning.`,
		type: 'PROFESSIONAL',
		contribution: [
			'Developed a crossword app for GRE, GMAT, SAT, TOEFL prep.',
			'Designed UI/UX, integrated APIs, optimized performance, and added in-app purchases.',
			'Managed app submissions to Google Play and App Store.'
		],
		logo: '/crosswordMart_logo.png',
		image: '/csmart-square.png',
		link: 'https://crosswordmart.com',
		techStack: ['SvelteKit', 'Tailwind CSS', 'Firebase', 'capacitor'],
		platform: ['web', 'android', 'ios'],
		company: 'Lulugram',
		underDevelpoment: false,
		solo: false
	},
	{
		title: 'vidhyavart',
		description: `An innovative e-learning app built using React Native, designed to enhance the learning experience for students.
         			  Vidhyavart offers a seamless platform where users can join courses, learn interactively, ask questions, and practice
					  concepts in real-time. Powered by AI, the app personalizes learning paths to suit individual needs and provides an 
					  engaging environment for students to grasp complex topics efficiently. Its intuitive design ensures accessibility across
					  devices, fostering a culture of continuous learning.`,
		type: 'PROFESSIONAL',

		contribution: [
			'Developed a cross-platform e-learning app using React Native/Expo and AI-based features, allowing students to ask questions, learn concepts, and practice quizzes.',
			'Integrated AI-based OCR and math rendering, enabling students to capture textbook problems and edit LaTeX-formatted content.',
			'Designed a quiz engine with timers, autosubmit, analytics, and persistent resume functionality using Zustand + AsyncStorage.',
			'Integrated lightweight AI models to assist users in real-time doubt solving using OCR and semantic search.'
		],
		logo: '/vidhyavartLogo.png',
		image: '/vidyavart-square.png',
		link: 'https://vidyavart.in/',
		techStack: ['React Native', 'mistral AI', 'Langchain js', 'node', 'express'],
		platform: ['android', 'ios'],
		company: 'Lulugram',
		underDevelpoment: true,
		solo: false
	},
	{
		title: 'Lulugram-Dashboard',
		description: `A modern, responsive landing page designed as the digital front for Lulugram, showcasing its brand, features, and value proposition.
					Built entirely with SvelteKit and Tailwind CSS v4, the page serves as both a portfolio and an entry point to the internal marketing dashboard.
					It emphasizes clean UI, mobile responsiveness, and high performance, offering visitors a seamless first impression of the platform.
					The layout is structured for scalability, making it easy to extend into a full-featured marketing or admin portal in the future.`,
		type: 'PROFESSIONAL',

		contribution: [
			'Independently designed and developed a high-converting, responsive landing page for Lulugram, aligning with brand identity and modern UI/UX principles.',
			'Used SvelteKit + Tailwind CSS v4 for fast, component-based development with smooth transitions and optimized performance.',
			'Focused on mobile-first responsiveness, accessibility, and SEO-ready markup.',
			'Delivered a fully deployable, production-ready frontend for marketing and user acquisition campaigns.'
		],
		logo: '/lulugramLogo.png',
		image: '/Lulugram-square.png',
		link: 'https://lulugram.in',
		techStack: ['Svelte', 'Sveltekit', 'Tailwind'],
		platform: ['web'],
		company: 'Lulugram',
		underDevelpoment: false,
		solo: true
	},
	{
		title: 'Support System',
		description: `A real-time, multi-tenant support system built for Lulugram and its connected platforms. The system enables users to initiate chats from within any app and routes incoming messages to all active admins. 
	              The first admin to respond claims the session, ensuring quick, personalized support without collisions. Built with scalability and performance in mind, it serves as a centralized hub for managing customer interactions across apps.`,
		type: 'FEATURED',

		contribution: [
			'Independently designed and built the entire support system from scratch, including frontend, backend, and socket-based real-time messaging.',
			'Implemented multi-admin broadcasting, secure session handling, and auto-claiming logic to ensure smooth support workflows.',
			'Used React Native for the mobile app interface and Node.js + PostgreSQL (with Prisma) on the backend.',
			'Designed a multi-tenant architecture to handle support for multiple apps, isolating user data while sharing the MAIN system.',
			'Delivered a scalable and reusable support system that now serves as a shared foundation across internal products.'
		],
		logo: '/defaultLogo.png',
		image: '/support-system-preview.png',
		link: null, // Use actual link if exists or leave blank
		techStack: [
			'React Native',
			'SvelteKit',
			'Tailwind',
			'Node.js',
			'PostgreSQL',
			'Prisma',
			'Socket.io'
		],
		platform: ['mobile'],
		company: 'Lulugram',
		underDevelpoment: true,
		solo: true
	},
	{
		title: 'Meta Hunt',
		description: `An AI Powered Gaming App`,
		type: 'FIGMA_TO_UI',

		contribution: [
			'Built production-ready UIs from Figma mockups — fast, responsive, and accurate to the design specs.'
		],
		logo: '/metaHuntLogo.svg',
		image: null,
		link: 'https://metahunt.vercel.app/', // Use actual link if exists or leave blank
		techStack: ['Tailwind', 'Svelte', 'Vite'],
		platform: ['Web'],
		company: null,
		underDevelpoment: false,
		solo: true
	},
	{
		title: 'LokSa Boxing Gym',
		description: `A Beautifull Boxing Gym Landing Page`,
		type: 'FIGMA_TO_UI',

		contribution: [
			'Built production-ready UIs from Figma mockups — fast, responsive, and accurate to the design specs.'
		],
		logo: '/loksaLogo.png',
		image: null,
		link: 'https://whimsical-tartufo-263a9a.netlify.app/', // Use actual link if exists or leave blank
		techStack: ['Tailwind', 'html', 'css', 'Vite'],
		platform: ['Web'],
		company: null,
		underDevelpoment: false,
		solo: true
	},
	{
		title: 'NextFlick Movie Search',
		description: `An Experimental Movie Search app`,
		type: 'EXPERIMENTAL',

		contribution: [
			'Built the app for learning purpose',
			'Leveraging Sveltekit and tried its Load functions via SSR'
		],
		logo: '/defaultLogo.png',
		image: null,
		link: 'https://next-flicks-pi.vercel.app/', // Use actual link if exists or leave blank
		techStack: ['Tailwind', 'React', 'Vite', 'NextJs', 'SSR'],
		platform: ['Web'],
		company: null,
		underDevelpoment: false,
		solo: true
	}
];