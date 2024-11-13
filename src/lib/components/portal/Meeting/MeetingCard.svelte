<script lang="ts">
  // this component acts as a wrapper for Meeting (event) cards
  // shared functionality should go here
  // new card templates must be added to the MeetingCards directory, then added to availableCards

  import type { Meeting, UserRegistration } from "$lib/data/customTypes";
  import { user, clientSettings } from "$lib/data/application";

  // dynamic meeting card, available components
  import DefaultMeetingCard from "./MeetingCards/DefaultMeetingCard.svelte";
  import HorizontalMeetingCard from "./MeetingCards/HorizontalMeetingCard.svelte";

  export let meeting: Meeting;

  // this object could be more deeply nested, to pass optional props or etc
  const availableCards: any = {
    DefaultMeetingCard: DefaultMeetingCard,
    HorizontalMeetingCard: HorizontalMeetingCard,
  };

  let registration: UserRegistration;
  let innerCardName =
    $clientSettings.config.meetingCardType ?? "DefaultMeetingCard";

  $: registration = $user.registrations?.find(
    (i) => i.meeting.id === meeting.id
  ) as UserRegistration;
</script>

<div
  class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
>
  <svelte:component
    this={availableCards[innerCardName]}
    {meeting}
    {registration}
  />
</div>
