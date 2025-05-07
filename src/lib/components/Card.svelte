<script>
	let props = $props();
</script>

<main class="bg-neutral-900 {props.class}">
	{props?.children()}
</main>
