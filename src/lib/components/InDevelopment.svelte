<script>
	import Icon from '@iconify/svelte';

    const { devMode } = $props()
</script>

<div
	class="fixed right-4 top-4  {devMode?'flex':'hidden'} items-center gap-2 rounded-sm bg-yellow-800 px-3 py-0.5 text-white"
>
	<div>
		<Icon icon="arcticons:nrf-toolbox" />
	</div>
	<p>In Development</p>
</div>
