<script>
    import myImg from "$lib/assets/myImage1.png"
    import svelteLogo from "$lib/assets/svelte.svg"
    import reactLogo from "$lib/assets/react-2.svg"
    import tailwindLogo from "$lib/assets/tailwindcss.svg"
    import expoLogo from "$lib/assets/expo.svg"

</script>



<div class="w-[700px]  h-[700px] absolute -right-40 -top-40 blur-[300px] rounded-full bg-pink-500"></div>
<div class="w-[700px]  h-[700px] absolute -left-40 -bottom-40 blur-[300px] rounded-full bg-blue-500"></div>
<div class="h-screen w-full absolute">
    <img class="w-32 absolute svelte" src={svelteLogo} alt="">
    <img class="w-32 absolute right-0 top-1/4 animate-spin react drop-shadow-[0px_0px_4px_black] " src={reactLogo} alt="">
    <img class="w-32 absolute left-20 bottom-1/4 animate-bounce tailwind drop-shadow-[0px_0px_4px_black] " src={tailwindLogo} alt="">
    <img class="w-32 absolute right-1/2 bottom-0 animate-bounce tailwind " src={expoLogo} alt="">
</div>
<main style="height:100dvh" class=" w-full max-w-7xl mx-auto overflow-hidden  relative">
    <div class="h-full w-full flex items-center px-10">
        <h1 style="" class="tagline font-extrabold text-[#4D96EE] text-5xl/[100px] ">Efficient Design, Seamless Performance – Web & App Developer</h1>
        <img class="myImg" src={myImg} alt="">
    </div>
</main>

<style>
    .tagline{
        font-family: "Delius Unicase", serif;
    }
    .myImg{
        filter: contrast(1.2);
        filter: drop-shadow(10px 5px 10px black);
    }
    .svelte{
        animation: wiggle 40s ease-in-out  infinite;
        /* animation: name duration timing-function delay iteration-count direction fill-mode; */
    }
    .react,.tailwind{
        animation-duration: 40s;
    }
    @keyframes wiggle {
    0% { transform: rotate(0deg); }
   20% { transform: rotate(4deg); }
   40% { transform: rotate(-4deg); }
   60% { transform: rotate(10deg); }
   80% { transform: rotate(-10deg); }
  100% { transform: rotate(0deg); }
}
@keyframes shake {
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
}

</style>