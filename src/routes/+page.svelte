<script>
	import myImg from '$lib/assets/myImage1.png';
	import svelteLogo from '$lib/assets/svelte.svg';
	import reactLogo from '$lib/assets/react-2.svg';
	import tailwindLogo from '$lib/assets/tailwindcss.svg';
	import expoLogo from '$lib/assets/expo.svg';
</script>

<div class="absolute top-0 h-[200vh] w-[100px] bg-blue-500 blur-[200px]"></div>
<main class=" relative mx-auto min-h-screen w-full max-w-7xl">
	<div class="grid lg:grid-cols-[1fr_300px] h-screen  w-full items-center relative  lg:px-10 px-4">
    <!-- <div></div> -->
    <div class="h-40 w-1/4 left-0 bg-blue-500 absolute top-1/3  rounded-r-[100%] blur-[200px]"></div>
		<h1 style="" class="tagline text-2xl lg:text-5xl/[100px] relative z-10 font-extrabold text-[#8458fc]">
			  Efficient Design, Seamless Performance – Web & App Developer
		</h1>
		<img class="myImg relative z-10" src={myImg} alt="" />
	</div>
	<div id="about" class="text-white h-screen py-20 content-center relative">
    <div class="h-40 w-full left-0 bg-blue-500 absolute top-1/3 rounded-r-[100%] blur-[200px]"></div>
    <div class="space-y-10 relative z-10">
      <h1 class="text-5xl font-bold mb-10">Who Am I?</h1>
  
      <p>
        I am a passionate front-end developer with over a year of experience creating dynamic and
        efficient web applications. Proficient in Svelte, SvelteKit, and Tailwind CSS, I thrive on
        crafting responsive, visually appealing designs and implementing smooth animations.
      </p>
  
      <p>
        I am currently exploring the world of AI integrations and React Native to expand my skill set
        and build innovative solutions. With a solid foundation in React, Vue, and modern JavaScript
        frameworks, I bring creativity and technical expertise to every project.
      </p>
  
      <p>
        Beyond coding, I love solving challenging problems, learning new technologies, and
        contributing to impactful projects. Let's create something amazing together!
      </p>
    </div>
	</div>
</main>

<style>
	.tagline {
		font-family: 'Delius Unicase', serif;
		background: -webkit-linear-gradient(45deg, #eee, #333);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
  p{
    font-size: 20px;
    line-height: 40px;
  }
  .arrow-right {
    width: 100px; 
    height: 0; 
    border-top: 60px solid transparent;
    border-bottom: 60px solid transparent;
}
</style>
