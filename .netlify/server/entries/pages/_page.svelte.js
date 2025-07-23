function About($$payload) {
  $$payload.out += `<main class="md:py-40 max-w-7xl mx-auto px-4 font-[Poppins]"><h1 class="text-primary text-[40px] font-bold md:mb-10 mb-4">About</h1> <div id="about" class="md:space-y-10 space-y-5 md:text-xl/9 text-slate-700 font-semibold cursor-default"><p class="tracking-normal text-pretty">I transitioned to IT as a web developer in 2021 after completing my degree, and this career shift quickly turned into a passion.
             My interest in coding deepened when I learned <b class="text-[#f96743]">Svelte</b> , and I began my professional journey with a three-month contract job at <strong class="text-primary first-letter:text-2xl inline-block">Qbtrix</strong>, 
             a product-based company, where I mastered <b class="text-primary">Tailwind CSS</b> and <b class="text-[#F96743]">SvelteKit</b>.</p> <p class="tracking-normal text-pretty">With <strong>1.5 years of experience</strong>, I am now working on <strong class="text-primary first-letter:text-2xl inline-block">Lulugram</strong>, another product-based company, where I worked on Svelte-based frontends and expanded my skill set to include <strong class="text-primary">React Native, 
            AI, server-side development, PWA, and Capacitor</strong>. My performance earned me three appraisals within a year, doubling my salary.</p> <p class="tracking-normal text-pretty">I have also completed over <strong class="text-[#f96743]">50 design-to-code projects</strong>, converting Figma designs into responsive Tailwind HTML, and hosted some of these on Netlify. 
            Coding is more than a profession for me—it’s a passion that drives my constant growth. I am particularly interested in full-stack mobile and AI development, 
            and I strive to create impactful and innovative solutions.</p></div></main>`;
}
function Hero($$payload) {
  $$payload.out += `<main class="flex flex-col md:flex-row justify-evenly md:h-screen h-[75vh] max-w-7xl mx-auto place-items-center items-center"><div><p class="md:text-5xl text-3xl text-primary svelte-6w94g3">Hi I'm</p> <p class="md:text-[40px]/[60px] text-2xl text-secondary svelte-6w94g3">GOKUL VENKATRAMAN 👋</p> <small class="md:text-base text-xs text-primary svelte-6w94g3">– Frontend Developer</small></div> <div class="relative"><img width="300px" src="/hero.svg" alt=""></div></main>`;
}
function _page($$payload) {
  $$payload.out += `<section>`;
  Hero($$payload);
  $$payload.out += `<!----> `;
  About($$payload);
  $$payload.out += `<!----></section>`;
}
export {
  _page as default
};
