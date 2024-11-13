<script lang="ts">
    import type { Meeting, UserRegistration } from "$lib/data/customTypes";  
    import { user } from "$lib/data/application";
    import LocalText from "../../Application/Localization/LocalText.svelte";
    import MeetingContent from "../../Application/Localization/MeetingContent.svelte";
    import MeetingDateTime from "../MeetingDateTime.svelte";
  
    export let meeting: Meeting;
    let registration: UserRegistration;
    $: registration = $user.registrations?.find(
      (i) => i.meeting.id === meeting.id
    ) as UserRegistration;
  </script>
  
  <div
    class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
  >
    <div class="flex">
      <div>
        <a href="/meeting/{meeting.id}">
          <img class="rounded-t-lg" src={meeting.options.image_url} alt="" />
        </a>
      </div>
      <div class="p-5">
        <a href="/meeting/{meeting.id}">
          <h5
            class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
          >
            {meeting.options.xyp_title}
          </h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          <MeetingDateTime {meeting} />
        </p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          <MeetingContent {meeting} type="Meta" />
        </p>
        <div class="flex justify-between">
          <a
            href="/meeting/{meeting.id}"
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center brandPrimaryText rounded-lg hover:opacity-90 focus:ring-4 focus:outline-none"
          >
            <LocalText slug="read_more" />
            <svg
              class="w-3.5 h-3.5 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
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
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white brandPrimaryBackground rounded-lg hover:opacity-90 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <LocalText slug="button_register" />
            </a>
          {/if}
        </div>
      </div>
    </div>
    
  </div>
  