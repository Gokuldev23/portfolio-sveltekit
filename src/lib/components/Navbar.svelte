<script>
	import { page } from "$app/stores";
    import Icon from '@iconify/svelte';


    let paths = [
        {name:"About",path:'/',icon:"mdi:about"},
        {name:"Projects",path:'/projects',icon:"si:projects-alt-fill"},
        {name:"Contact",path:'/contact',icon:"material-symbols:contact-support"}
    ]

</script>


<nav class="w-fit mx-auto fixed z-50 left-1/2 h-10 shadow-2xl shadow-black -translate-x-1/2 z-10 flex justify-center  rounded-full p-1 ">
  
    {#each paths as {name,path,icon}}
        {@const active = $page.url.pathname == path ? 'page' : null}
        <a href={path} class="tab z-10 flex shrink-0 justify-center dark:text-white items-center gap-2 w-32 text-center rounded-full relative font-bold" aria-current={active}>
            <div>
                <Icon icon={icon} width={20}/>
            </div>
            {name}
        </a>
    {/each}
</nav>


<style>
    nav{
        view-transition-name:nav;
        /* background: rgba( 255, 255, 255, 0.25 ); */
        box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
        backdrop-filter: blur( 10px );
        -webkit-backdrop-filter: blur( 6.5px );
    }
   
    .tab{
        z-index: 100;
        /* padding: 5px 10px; */
        position: relative;
    }
    .tab[aria-current='page'] ::before{
        content: '';
        position: absolute;
        height: 4px;
        border-radius: 50px;
        width: 75%;
        bottom: 0;
        left: 50%;
        transform: translate(-50%,0);
        background-color: white;
        view-transition-name: tab;
        color: rgb(59,130,246);
    }

    ::view-transition-group(tab) {
        /* animation-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55); */
        animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
        
        animation-duration: 0.5s;
    }
    
</style>