<script>
	import Icon from '@iconify/svelte';

	const { devMode } = $props();
</script>

<div
	class="fixed right-4 top-4 z-50 {devMode
		? 'flex'
		: 'hidden'} items-center font-semibold gap-2 rounded-xl bg-yellow-800 px-3 py-0.5 text-white shadow-xl shadow-white"
>
	<div>
		<Icon icon="arcticons:nrf-toolbox" />
	</div>
	<p>In Development</p>
</div>
