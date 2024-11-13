<script lang="ts">
  import type { Meeting, UserRegistration } from "$lib/data/customTypes";  
  import { user } from "$lib/data/application";
  import LocalText from "../Application/Localization/LocalText.svelte";
  import MeetingContent from "../Application/Localization/MeetingContent.svelte";

  export let items: any[];

</script>
<h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Upcoming Events</h2>
{#each items as meeting}

<section class="bg-white dark:bg-gray-900">
  <div class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-3  lg:px-6">
  
      <img class="w-full dark:hidden" src="{meeting.meeting.options.image_url}" alt="dashboard image">
      <img class="w-full hidden dark:block" src="{meeting.meeting.options.image_url}" alt="dashboard image">
      <div class="mt-4 md:mt-0 col-span-2">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">{meeting.meeting.options.xyp_title}</h2>
          <p class="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">  {new Date(meeting.meeting.options.startDate).toLocaleDateString() + " " + new Date(meeting.meeting.options.startDate).toLocaleTimeString()}</p>
          <a href="#" class="inline-flex items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900">
          
              <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </a>
      </div>
      
  </div>
  <div class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid  lg:px-6">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </div>
  
</section>
{/each}


