<script>
	import { page } from "$app/stores";


    let paths = [
        {name:"About",path:'/'},
        {name:"Projects",path:'/projects'},
        {name:"Contact",path:'/contact'}
    ]

    console.log()

</script>


<nav class="w-fit mx-auto fixed left-1/2 -translate-x-1/2 z-10 flex justify-center rounded-full p-1 bg-blue-500 ">
    {#each paths as {name,path}}
        {@const active = $page.url.pathname == path ? 'page' : null}
        <a href={path} class="tab z-10 w-24 text-center rounded-full relative font-bold" aria-current={active}>
            {name}
        </a>
    {/each}
</nav>


<style>
   
    .tab{
        z-index: 100;
        padding: 5px 10px;
        color: white;
    }
    .tab[aria-current='page'] {
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