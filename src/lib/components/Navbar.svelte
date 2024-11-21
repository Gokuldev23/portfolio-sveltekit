<script>
	import { page } from "$app/stores";


    let paths = [
        {name:"About",path:'/'},
        {name:"Projects",path:'/projects'},
        {name:"Contact",path:'/contact'}
    ]

    console.log()

</script>


<nav class="max-w-xs mx-auto space-x-5">
    {#each paths as {name,path}}
        {@const active = $page.url.pathname == path ? 'page' : null}
        <a href={path} class="tab relative z-10 font-bold" aria-current={active}>{name}</a>
    {/each}
</nav>


<style>
    .tab{
        z-index: 100;
    }
    .tab[aria-current='page']::before {
        content: '';
        width: calc(100% + 10px);
        height: 100%;
        padding: 10px 20px;
        border-radius: 40px;
        z-index: -1;
        top: 0;
        left: 0;
        position: absolute;
        background-color: yellow;
        view-transition-name: active-page;
    }
</style>