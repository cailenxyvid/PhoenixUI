<script lang="ts">
    import { dictionary } from "$lib/data/application";

    export let slug: string;

    let display = $dictionary?.find(content => { return content.content_slug.slug === slug})  
    
    if (!display) {
        console.error('LocalText - missing content for slug: ' + slug);
    }
</script>

{#if display}
<span>
    {display.content}
</span>
{:else}
<span class="text-red-500">Missing content!</span>
{/if}