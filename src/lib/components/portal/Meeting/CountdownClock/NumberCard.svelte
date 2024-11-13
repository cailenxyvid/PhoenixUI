<script lang="ts">
    import { fade } from 'svelte/transition';

    export let number: number;
    export let label: string | undefined;
    export let autohide: boolean = true;
</script>

{#if number > 0 || !autohide}
<div class="text-white brandPrimaryBackground rounded-md p-4 flex flex-col">
    <div class="inline">{number.toLocaleString()}</div>
    <div class="inline">{label}</div>
</div>
{/if}