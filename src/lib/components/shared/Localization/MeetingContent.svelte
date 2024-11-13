<script lang="ts">
  import { PUBLIC_DEFAULT_LOCALE } from "$env/static/public";
  import type { LocalContent, Meeting } from "$lib/data/customTypes";

  import { user } from "$lib/data/application";

  export let meeting: Meeting;
  export let type: string;

  let display: LocalContent | undefined;

  $: if (meeting.meeting_content) {
    display =
      meeting.meeting_content?.find((content) => {
        return content.type.name === type && content.locale.id === $user.locale?.id;
      }) ??
      meeting.meeting_content?.find((content) => {
        return content.type.name === type &&
          content.locale.id === Number(PUBLIC_DEFAULT_LOCALE);
      });
  }  
</script>

{#if display}
  <span>{display.content}</span>
{:else}
  <span class="text-red-500">Missing meeting {type} content!</span>
{/if}
