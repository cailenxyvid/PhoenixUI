<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import { localText } from "$lib/data/localize";
  import { dictionary } from "$lib/data/application";
  import NumberCard from "./NumberCard.svelte";

  export let event_date: string;

  interface Time {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }

  let endDateTime = new Date(event_date);
  let intervalId: ReturnType<typeof setInterval>; // setInterval has wonky polymorphic return types, this avoids issues by detecting type
  let timeDifference: number;

  function updateTime(): Time {
    let currentTime = new Date();
    timeDifference = endDateTime.getTime() - currentTime.getTime();

    let days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }

  let time: Time = updateTime();

  onMount(() => {
    intervalId = setInterval(() => {
      time = updateTime();
    }, 1000);
  });

  onDestroy(() => {
    clearInterval(intervalId);
  });
</script>

<div class="card p-2 gap-4 flex">
  {#if timeDifference > 0}    
    <NumberCard
      number={time.days}
      label={localText($dictionary, "label_days")}
    />
    <NumberCard
      number={time.hours}
      label={localText($dictionary, "label_hours")}
      autohide={time.days < 1}
    />
    <NumberCard
      number={time.minutes}
      label={localText($dictionary, "label_minutes")}
      autohide={time.hours < 1}
    />
    <NumberCard
      number={time.seconds}
      label={localText($dictionary, "label_seconds")}
      autohide={time.minutes < 1}
    />
  {:else}
    <h1 class="brandPrimaryText text-xl">
      {localText($dictionary, "your_event_is_starting")}
    </h1>
  {/if}
</div>
