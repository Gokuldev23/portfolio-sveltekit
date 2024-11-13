<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>


<div class="bg-blue-400 p-4">
	{@render children()}
</div>
