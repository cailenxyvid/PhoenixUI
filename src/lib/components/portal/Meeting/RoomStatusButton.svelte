<script lang="ts">
  import type { Meeting, UserRegistration } from "$lib/data/customTypes";
  import { PUBLIC_XYP_PORTAL_URL } from "$env/static/public";
  import { user } from "$lib/data/application";
  import CountdownClock from "./CountdownClock/CountdownClock.svelte";
  import RegisterButton from "./RegisterButton.svelte";
  import LocalText from "../Application/Localization/LocalText.svelte";

  export let meeting: Meeting;
  let registration: UserRegistration;
  let open: boolean;

  $: open = meeting.xyp_status === "open";
  $: registration = $user.registrations?.find(
    (i) => i.meeting.id === meeting.id
  ) as UserRegistration;
</script>

{#if registration}
  {#if open}
    <a
      href="{PUBLIC_XYP_PORTAL_URL}/{meeting.xyp_id}?emailAddress={$user.email}&directEntry=true"
      class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white brandPrimaryBackground rounded-lg hover:opacity-90 focus:ring-4 focus:outline-none"
    >
      <LocalText slug="enter_room" />
    </a>
  {:else}
    <!-- <h2 class="text-lg"><LocalText slug="your_event_will_begin_countdown" /></h2> -->
    <span
      class="inline-flex items-center text-sm font-medium text-center brandPrimaryText border-color-[color:var(--brand-primary)] rounded-lg hover:opacity-90 focus:ring-4 focus:outline-none"
    >
      <CountdownClock event_date={meeting.options.startDate} />
    </span>
  {/if}
{:else}
  <RegisterButton {meeting} />
{/if}
