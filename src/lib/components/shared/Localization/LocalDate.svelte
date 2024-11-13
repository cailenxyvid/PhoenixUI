<script lang="ts">
    import { localDate } from "$lib/data/localize";
    export let dateString: string;
</script>

{localDate(dateString)}