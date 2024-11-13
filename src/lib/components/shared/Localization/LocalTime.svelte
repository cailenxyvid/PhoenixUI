<script lang="ts">
    import { localTime } from "$lib/data/localize";
    export let dateString: string;
</script>

{localTime(dateString)}