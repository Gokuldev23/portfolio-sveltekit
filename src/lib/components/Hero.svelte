


<main class="grid md:grid-cols-[2fr_1fr] h-[100dvh]  max-w-7xl mx-auto place-items-center items-center">

    <div>
        <p class="md:text-5xl text-3xl text-primary">Hi I'm</p>
        <p class="md:text-[40px]/[60px] text-2xl text-secondary">GOKUL VENKATRAMAN 👋</p>
        <small class="md:text-base text-xs text-primary"> – Frontend Developer</small>
    </div>

    <div class="relative ">
        <!-- <div id="inside" class="w-48 h-48 bg-black rounded-full border-[18px] border-primary  relative overflow-hidden">
            <img class="absolute -bottom-[30px] left-1/2 transform -translate-x-1/2" src="/myImage1.png" alt="">
        </div>
        <div id="img" class="absolute top-0 w-48 h-48 border-[18px] border-transparent">
            <img class="-translate-y-12 " src="/myImage1.png" alt="">
        </div> -->
        <img src="/hero.svg" alt="">
    </div>
    
</main>


<style>
    p,small{
        font-family: "Days One", serif;
    }
    #inside{
        box-shadow: 0px 4px 50px 8px #4D96EE;
    }
    #img img{
        clip-path: inset(0 0 50px 0); /* Adjust to clip from top, right, bottom, left */
    }
</style>