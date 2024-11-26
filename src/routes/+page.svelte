<script>
    import myImg from "$lib/assets/myImage1.png"
    import svelteLogo from "$lib/assets/svelte.svg"
    import reactLogo from "$lib/assets/react-2.svg"
    import tailwindLogo from "$lib/assets/tailwindcss.svg"
    import expoLogo from "$lib/assets/expo.svg"

</script>




<main  class=" w-full max-w-7xl h-screen mx-auto   relative ">
    <div class="h-full w-full flex items-center px-10">
        <h1 style="" class="tagline font-extrabold text-[#8458fc] text-5xl/[100px] ">Efficient Design, Seamless Performance – Web & App Developer</h1>
        <img class="myImg" src={myImg} alt="">
    </div>
</main>

<style>
    .tagline{
        font-family: "Delius Unicase", serif;
        background: -webkit-linear-gradient(45deg,#eee, #333);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

</style>