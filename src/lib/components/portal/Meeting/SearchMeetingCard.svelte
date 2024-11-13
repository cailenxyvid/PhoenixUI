<script lang="ts">
  import type { Meeting } from "$lib/data/customTypes";  

  export let meeting: Meeting;
</script>

<div
  class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
>
  <a href="/meeting/{meeting.id}">
    <img class="rounded-t-lg" src={meeting.options.image_url} alt="" />
  </a>
  <div class="p-5">
    <a href="/meeting/{meeting.id}">
      <h5
        class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
      >
        {meeting.options.xyp_title}
      </h5>
    </a>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
      
    </p>
    <div class="flex justify-between">
      <a
        href="/meeting/{meeting.id}"
        class="inline-flex items-center px-3 py-2 text-sm font-medium text-center brandPrimaryText rounded-lg hover:opacity-90 focus:ring-4 focus:outline-none"
      >
        
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
     
    </div>
  </div>
</div>
