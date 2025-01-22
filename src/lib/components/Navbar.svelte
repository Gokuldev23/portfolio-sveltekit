<script>
	import { page } from "$app/stores";
    import Icon from '@iconify/svelte';


    let paths = [
        {name:"About",path:'/',icon:"mdi:about"},
        {name:"Projects",path:'/projects',icon:"si:projects-alt-fill"},
        {name:"Contact",path:'/contact',icon:"material-symbols:contact-support"}
    ]

</script>


<header class="w-fit mx-auto fixed top-4 left-1/2 px-2  shadow-2xl shadow-black -translate-x-1/2 flex justify-center  rounded-full p-1 ">
  
    {#each paths as {name,path,icon}}
        <div>
            <a href={path} class="tab z-10 flex shrink-0 justify-center text-sm md:text-base items-center gap-2 md:w-32 w-24 text-center rounded-full relative font-bold" aria-current={$page.url.pathname == path ? 'page' : null}>
                
                {name}
            </a>
        </div>
    {/each}
</header>


<style>
    header{
        view-transition-name:nav;
        box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
        backdrop-filter: blur( 50px );
        -webkit-backdrop-filter: blur( 1px );
        z-index: 100;
    }
    a span{
        padding: 10px 0;
    }
   
    .tab{
        z-index: 100;
        position: relative;
        color: black;
    }
    .tab[aria-current='page']::before{
        content: '';
        position: absolute;
        height: 4px;
        border-radius: 50px;
        width: 10px;
        bottom: -2px;
        left: 50%;
        transform: translate(-50%,0);
        background-color: rgb(59,130,246);
        view-transition-name: tab;
        color: rgb(59,130,246);
    }
    .tab[aria-current='page']{
        color: rgb(59,130,246);
    }

    ::view-transition-group(tab) {
        animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
        animation-duration: 0.5s;
    }
    
</style>