<script lang="ts">
    import { dictionary } from "$lib/data/application";
    import { localLabel } from "$lib/data/localize";

    export let field: string;
</script>

{localLabel($dictionary, field)}