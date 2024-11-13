<script lang="ts">
  import type { Meeting, UserRegistration } from "$lib/data/customTypes";  
  import { user } from "$lib/data/application";
  import LocalText from "../Application/Localization/LocalText.svelte";

  export let meeting: Meeting;
  let registration: UserRegistration;
  $: registration = $user.registrations?.find(
    (i) => i.meeting.id === meeting.id
  ) as UserRegistration;
</script>

{#if registration}
  <span
    class="inline-flex items-center px-3 py-2 text-sm font-medium text-center brandPrimaryText border-color-[color:var(--brand-primary)] rounded-lg hover:opacity-90 focus:ring-4 focus:outline-none"
  >
    <LocalText slug="already_registered" />
    <!-- we could show registration.created_at here as a microenhancement. You registered on:  -->
  </span>
{:else}
  <a
    href="/register/{meeting.id}"
    class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white brandPrimaryBackground rounded-lg hover:opacity-90 focus:ring-4 focus:outline-none"
  >
    <LocalText slug="button_register" />
  </a>
{/if}
